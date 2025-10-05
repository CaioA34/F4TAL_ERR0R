import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet], // Adicione o RouterOutlet aqui
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  // A classe pode ficar vazia! Toda a lógica foi movida.
}
