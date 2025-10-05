import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CarouselItem {
  id: number;
  name: string;
  route: string;
  imageUrl?: string;
  info: {
    title: string;
    description: string;
  };
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {

  // Substitua o seu array `carouselItems` por este:
carouselItems: CarouselItem[] = [
    {
      id: 1,
      name: 'Marte',
      route: '/map',
      // CORREÇÃO 1: Usando a imagem correta de Marte e o caminho correto.
      imageUrl: 'assets/images/mars.png',
      info: {
        title: 'Exploração de Marte',
        description: 'Navegue por um mosaico de alta resolução da cratera Jezero, o local de pouso do rover Perseverance da NASA. Explore deltas de rios antigos e procure por sinais de vida passada.'
      }
    },
    {
      id: 2,
      name: 'Terra',
      route: '/map-2',
      // CORREÇÃO 2: O caminho deve ser sempre a partir da raiz 'assets/'.
      imageUrl: 'assets/images/earth.png',
      info: {
        title: 'Mapa da Terra (Exemplo)',
        description: 'Descrição detalhada sobre o que o usuário encontrará no mapa de exemplo 2.'
      }
    },
    {
      id: 3,
      name: 'Exemplo 3',
      route: '/map-3',
      info: {
        title: 'Mapa de Exemplo 3',
        description: 'Descrição detalhada sobre o que o usuário encontrará no mapa de exemplo 3.'
      }
    }
  ];

  selectedItem: CarouselItem | null = null;

  ngOnInit(): void {
    if (this.carouselItems.length > 0) {
      this.selectItem(this.carouselItems[0]);
    }
  }

  selectItem(item: CarouselItem): void {
    this.selectedItem = item;
  }
}
