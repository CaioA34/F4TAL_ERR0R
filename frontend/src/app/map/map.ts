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

    const tileUrl = `${environment.baseUrl}/mars_tiles/{z}/{x}/{y}.png`;

    L.tileLayer(tileUrl, {
      bounds: bounds,
      noWrap: true,
      attribution: 'NASA/JPL-Caltech/USGS'
    }).addTo(this.map);

    this.map.fitBounds(bounds);
  }
}
