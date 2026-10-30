import { Component, signal } from '@angular/core';
import { CartSummary } from './components/cart-summary/cart-summary';

@Component({
  imports: [CartSummary],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('shopping-cart');
}
