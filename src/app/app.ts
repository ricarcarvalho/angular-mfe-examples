import { NgComponentOutlet } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, signal, Type } from '@angular/core';

@Component({
  imports: [NgComponentOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly productComponent = signal<Type<unknown> | null>(null);
  protected readonly cartComponent = signal<Type<unknown> | null>(null);

  constructor() {
    loadRemoteModule('productCatalog', './ProductComponent').then((remote) =>
      this.productComponent.set(remote.App),
    );
    loadRemoteModule('shoppingCart', './CartComponent').then((remote) =>
      this.cartComponent.set(remote.App),
    );
  }
}
