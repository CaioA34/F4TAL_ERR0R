import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.html',
  styleUrls: ['./map.scss']
})
export class MapComponent implements AfterViewInit {
  private map: any;

  // --- NOVAS PROPRIEDADES PARA O OVERLAY ---
  private overlayLayer: any; // Guarda a camada do overlay
  public isOverlayVisible: boolean = false; // Controla a visibilidade
  public overlayOpacity: number = 0.5; // Controla a transparência inicial

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('leaflet-map', {
      crs: L.CRS.Simple,
      minZoom: -2
    });

    const width = 8000;
    const height = 8000;
    const bounds: [[number, number], [number, number]] = [[0, 0], [height, width]];

    // --- CAMADA BASE (JÁ EXISTENTE) ---
    const tileUrl = `${environment.baseUrl}/mars_tiles/base/{z}/{x}/{y}.png`; // Ajuste na URL
    L.tileLayer(tileUrl, {
      bounds: bounds,
      noWrap: true,
      attribution: 'NASA/JPL-Caltech/USGS'
    }).addTo(this.map);

    // --- CRIAÇÃO DA CAMADA DE OVERLAY (NOVO) ---
    // Esta URL deve apontar para a imagem COMPLETA de outra data.
    // O seu backend C++ precisará de um endpoint para servir esta imagem.
    const overlayImageUrl = `${environment.baseUrl}/full_image/mars_2020.jpg`;

    // Cria a camada de ImageOverlay com a opacidade inicial
    this.overlayLayer = L.imageOverlay(overlayImageUrl, bounds, {
      opacity: this.overlayOpacity,
      interactive: false // A imagem não captura cliques do mouse
    });

    this.map.fitBounds(bounds);
  }

  // --- NOVAS FUNÇÕES CHAMADAS PELO HTML ---

  /**
   * Chamada quando o checkbox 'Habilitar Overlay' é clicado.
   * Adiciona ou remove a camada de overlay do mapa.
   */
  public toggleOverlay(event: any): void {
    this.isOverlayVisible = event.target.checked;

    if (this.isOverlayVisible) {
      this.overlayLayer.addTo(this.map);
    } else {
      this.map.removeLayer(this.overlayLayer);
    }
  }

  /**
   * Chamada quando o slider de transparência é movido.
   * Altera a opacidade da camada de overlay.
   */
  public changeOpacity(event: any): void {
    this.overlayOpacity = event.target.value;

    if (this.overlayLayer) {
      this.overlayLayer.setOpacity(this.overlayOpacity);
    }
  }
}
