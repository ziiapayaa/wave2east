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
    id: 1,
    name: 'TSHIRT GELVIRA BLACK UNISEX',
    price: 200000,
    image: '/images/product1.jpg',
    description: 'Express yourself with bold and elegant graphics.',
    images: ['/images/product1.jpg', '/images/product1-2.jpg', '/images/tsirtsize.jpg'],
  },
  {
    id: 2,
    name: 'TSHIRT GELVIRA BLACK UNISEX',
    price: 200000,
    image: '/images/product2.jpg',
    description: 'Express yourself with bold and elegant graphics.',
    images: ['/images/product2.jpg', '/images/product2-2.jpg', '/images/tsirtsize.jpg'],
  },
  {
    id: 3,
    name: 'TSHIRT ISHAELA BLACK UNISEX',
    price: 200000,
    image: '/images/product3.jpg',
    description: 'Experience premium quality and comfort.',
    images: ['/images/product3.jpg', '/images/product3-2.jpg', '/images/tsirtsize.jpg'],
  },
  {
    id: 4,
    name: 'TSHIRT LUSSINA BLACK UNISEX',
    price: 200000,
    image: '/images/product4.jpg',
    description: 'Experience premium quality and comfort.',
    images: ['/images/product4.jpg', '/images/product4-2.jpg', '/images/tsirtsize.jpg'],
  },
  {
    id: 5,
    name: 'TSHIRT EMELINA BLACK UNISEX',
    price: 200000,
    image: '/images/product5.jpg',
    description: 'Experience premium quality and comfort.',
    images: ['/images/product5.jpg', '/images/product5-2.jpg', '/images/tsirtsize.jpg'],
  },
  {
    id: 6,
    name: 'TSHIRT EIMY EMIRIA BLACK UNISEX',
    price: 200000,
    image: '/images/product6.jpg',
    description: 'Experience premium quality and comfort.',
    images: ['/images/product6.jpg', '/images/product6-2.jpg', '/images/tsirtsize.jpg'],
  },
  {
    id: 7,
    name: 'TSHIRT HYNORA BLACK UNISEX',
    price: 200000,
    image: '/images/product7.jpg',
    description: 'Experience premium quality and comfort.',
    images: ['/images/product7.jpg', '/images/product7-2.jpg', '/images/tsirtsize.jpg'],
  },
  {
    id: 8,
    name: 'TSHIRT EFLORA BLACK UNISEX',
    price: 200000,
    image: '/images/product8.jpg',
    description: 'Experience premium quality and comfort.',
    images: ['/images/product8.jpg', '/images/product8-2.jpg', '/images/tsirtsize.jpg'],
  },
  {
    id: 9,
    name: 'TSHIRT GYNORA BLACK UNISEX',
    price: 200000,
    image: '/images/product9.jpg',
    description: 'Experience premium quality and comfort.',
    images: ['/images/product9.jpg', '/images/product9-2.jpg', '/images/tsirtsize.jpg'],
  },
  {
    id: 10,
    name: 'TSHIRT EMIRIA WHITE UNISEX',
    price: 200000,
    image: '/images/product10.jpg',
    description: 'Experience premium quality and comfort.',
    images: ['/images/product10.jpg', '/images/product10-2.jpg', '/images/tsirtsize.jpg'],
  },
];

