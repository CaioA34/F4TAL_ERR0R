import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WsBase } from './services/ws-base';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements AfterViewInit {

  private map: any;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('leaflet-map', {
      crs: L.CRS.Simple,
      minZoom: -2
    });

    // 2. Definimos as dimensões da sua imagem original em pixels.
    //    Você precisa verificar as dimensões exatas da sua imagem de Marte.
    //    Exemplo: se a imagem tem 8000x8000 pixels.
    const width = 8000;
    const height = 8000;
    const bounds: [[number, number], [number, number]] = [[0, 0], [height, width]];

    // 3. Adicionamos a camada de tiles que VIRÁ DO SEU BACKEND
    L.tileLayer('http://localhost:8080/api/mars_tiles/{z}/{x}/{y}.png', {
      bounds: bounds, // Limita o mapa às bordas da sua imagem
      noWrap: true,   // Impede que o mapa se repita horizontalmente
      attribution: 'NASA/JPL-Caltech/USGS' // Créditos para a imagem
    }).addTo(this.map);

    // 4. Centralizamos o mapa para mostrar a imagem inteira inicialmente
    this.map.fitBounds(bounds);
  }
}
