import { prisma } from '@/utils/connect';

export default async function getProduct(productId: string) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      return null;
    }

    const safeProduct = {
      ...product,
      createdAt: product.createdAt.toISOString(),
    };

    return safeProduct;
  } catch (error: any) {
    throw new Error(error);
  }
}
