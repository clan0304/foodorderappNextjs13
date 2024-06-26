import prisma from '@/utils/connect';

export default async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeProducts = products.map((product) => ({
      ...product,
      createdAt: product.createdAt.toISOString(),
    }));

    return safeProducts;
  } catch (error: any) {
    throw new Error(error);
  }
}
