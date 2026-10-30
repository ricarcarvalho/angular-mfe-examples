import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 12 Pro (128GB)',
    description:
      'A tela do iPhone 12 Pro tem bordas arredondadas que se ajustam ao design curvo do telefone dentro da sua forma retangular. Quando medida como um retângulo, a tela tem 6,06 polegadas na diagonal. A área real de visualização é menor.',
    imageUrl: 'images/iphone.jpg',
    price: 544.9,
    stock: 10,
  },
  {
    id: 2,
    name: 'Headphones SONY 1I X-0',
    description:
      'Tire o máximo partido dos seus auscultadores em qualquer lugar com cancelamento de ruído otimizado e liberdade sem fios. ',
    imageUrl: 'images/headphones.jpg',
    price: 44.9,
    stock: 5,
  },
  {
    id: 3,
    name: 'Smartwatch Uistore Homme Watch 19',
    description:
      'Fique conectado com confiança! A solução avançada de chipset único garante baixo consumo de energia, conexão Bluetooth 5.3 estável e cancelamento de ruído para uma qualidade de chamada nítida, permitindo que você ligue, atenda, rejeite ou silencie com facilidade',
    imageUrl: 'images/smartwatch.jpg',
    price: 120.9,
    stock: 7,
  },
];
