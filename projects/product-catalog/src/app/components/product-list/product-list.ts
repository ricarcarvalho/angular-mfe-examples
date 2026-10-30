import { Component } from '@angular/core';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/product.model';

const CART_ITEM_ADDED_EVENT = 'cart:item-added';

@Component({
  imports: [],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  protected readonly products = PRODUCTS.map((product) => ({ ...product, error: false }));

  protected sanitizeQuantity(event: Event): void {
    const input = event.target as HTMLInputElement;

    input.value = input.value.replace(/[^0-9]/g, '');
  }

  protected addToCart(product: Product, qtt: number): void {
    if (qtt === 0) {
      return;
    } else if (qtt > product.stock) {
      product.error = true;
      return;
    }

    product.stock -= qtt;
    product.error = false;

    window.dispatchEvent(
      new CustomEvent(CART_ITEM_ADDED_EVENT, {
        detail: {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: qtt,
        },
      }),
    );
  }
}
