import { Component, OnDestroy, signal } from '@angular/core';

const CART_ITEM_ADDED_EVENT = 'cart:item-added';

interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnDestroy {
  protected readonly items = signal<CartItem[]>([]);

  private readonly onCartItemAdded = (event: Event): void => {
    const item = (event as CustomEvent<CartItem>).detail;
    this.items.update((items) => {
      const existingItem = items.find((cartItem) => cartItem.productId === item.productId);

      if (!existingItem) {
        return [...items, item];
      }

      return items.map((cartItem) =>
        cartItem.productId === item.productId
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem,
      );
    });
  };

  constructor() {
    window.addEventListener(CART_ITEM_ADDED_EVENT, this.onCartItemAdded);
  }

  ngOnDestroy(): void {
    window.removeEventListener(CART_ITEM_ADDED_EVENT, this.onCartItemAdded);
  }
}
