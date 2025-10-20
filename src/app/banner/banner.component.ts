import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="banner-container">
      <div class="banner-content">
        <h1>{{ title() }}</h1>
        <p>{{ message() }}</p>
      </div>
    </div>
  `,
  styles: [`
    .banner-container {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin: 1rem 0;
    }

    .banner-content {
      text-align: center;
      color: white;
    }

    h1 {
      font-size: 2rem;
      margin: 0 0 1rem 0;
      font-weight: 700;
    }

    p {
      font-size: 1.125rem;
      margin: 0;
      opacity: 0.95;
    }
  `]
})
export class BannerComponent {
  title = signal('Bienvenido al Sistema');
  message = signal('Este es un componente standalone de banner usando Module Federation');
}
