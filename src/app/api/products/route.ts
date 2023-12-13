import prisma from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const { title, img, price, desc, category } = await req.json();
    const newProduct = await prisma.product.create({
      data: {
        title,
        img,
        price,
        desc,
        category,
      },
    });

    return new NextResponse(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    );
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const products = await prisma.product.findMany();
    return new NextResponse(JSON.stringify(products), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};
