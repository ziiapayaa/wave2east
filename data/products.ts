export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: 2,
    name: 'TSHIRT GELVIRA BLACK',
    price: 200.00.toFixed(3),
    image: '/images/product2.jpg',
    description: 'Express yourself with bold graphics.',
  },
  {
    id: 3,
    name: 'TSHIRT ISHAELA BLACK',
    price: 200.00.toFixed(3),
    image: '/images/product3.jpg',
    description: 'Experience premium quality and comfort.',
  },
  {
    id: 4,
    name: 'TSHIRT LUSSINA BLACK',
    price: 200.00.toFixed(3),
    image: '/images/product4.jpg',
    description: 'Experience premium quality and comfort.',
  },
  {
    id: 5,
    name: 'TSHIRT EMELINA BLACK',
    price: 200.00.toFixed(3),
    image: '/images/product5.jpg',
    description: 'Experience premium quality and comfort.',
  },
  {
    id: 6,
    name: 'TSHIRT EIMY BLACK',
    price: 200.00.toFixed(3),
    image: '/images/product6.jpg',
    description: 'Experience premium quality and comfort.',
  },
  {
    id: 7,
    name: 'TSHIRT HYNORA BLACK',
    price: 200.00.toFixed(3),
    image: '/images/product7.jpg',
    description: 'Experience premium quality and comfort.',
  },
  {
    id: 8,
    name: 'TSHIRT EFLORA BLACK',
    price: 200.00.toFixed(3),
    image: '/images/product8.jpg',
    description: 'Experience premium quality and comfort.',
  },
  {
    id: 9,
    name: 'TSHIRT GYNORA BLACK',
    price: 200.00.toFixed(3),
    image: '/images/product9.jpg',
    description: 'Experience premium quality and comfort.',
  },
  {
    id: 10,
    name: 'TSHIRT EMIRIA WHITE',
    price: 200.00.toFixed(3),
    image: '/images/product10.jpg',
    description: 'Experience premium quality and comfort.',
  },
];

