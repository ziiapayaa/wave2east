import { NextResponse } from 'next/server';
import { products } from '@data/products';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id, 10));
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}
