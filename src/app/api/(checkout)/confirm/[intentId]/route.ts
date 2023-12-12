import prisma from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async (
  req: NextRequest,
  { params }: { params: { intentId: string } }
) => {
  if (!params || typeof params.intentId !== 'string') {
    return new NextResponse(
      JSON.stringify({ message: 'Invalid or missing intentId parameter' }),
      { status: 400 }
    );
  }
  const { intentId } = params;

  try {
    const existingOrder = await prisma.order.findUnique({
      where: { intent_id: intentId },
    });

    if (!existingOrder) {
      return new NextResponse(
        JSON.stringify({ message: 'Order not found for provided intentId' }),
        { status: 404 }
      );
    }

    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: 'Being prepared!' },
    });
    return new NextResponse(
      JSON.stringify({ message: 'Order has been updated' }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    );
  }
};
