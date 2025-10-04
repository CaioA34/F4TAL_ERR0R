import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Interface para definir a estrutura de cada item do carrossel
interface CarouselItem {
  id: number;
  name: string;
  route: string;
  info: {
    title: string;
    description: string;
  };
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink], // CommonModule para usar *ngFor
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {

  // Lista de itens que aparecerão no carrossel
  carouselItems: CarouselItem[] = [
    {
      id: 1,
      name: 'Marte',
      route: '/map', // Rota que definimos para o mapa
      info: {
        title: 'Exploração de Marte',
        description: 'Navegue por um mosaico de alta resolução da cratera Jezero, o local de pouso do rover Perseverance da NASA. Explore deltas de rios antigos e procure por sinais de vida passada.'
      }
    },
    {
      id: 2,
      name: 'Exemplo 2',
      route: '/map-2', // Rota para um futuro mapa
      info: {
        title: 'Mapa de Exemplo 2',
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
    // Adicione quantos itens quiser aqui
  ];

  // Armazena o item que está selecionado atualmente
  selectedItem: CarouselItem | null = null;

  ngOnInit(): void {
    // Ao iniciar o componente, seleciona o primeiro item da lista por padrão
    if (this.carouselItems.length > 0) {
      this.selectItem(this.carouselItems[0]);
    }
  }

  // Função chamada quando um item do carrossel é clicado
  selectItem(item: CarouselItem): void {
    this.selectedItem = item;
  }
}
