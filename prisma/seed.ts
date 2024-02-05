import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const matt = await prisma.user.upsert({
    where: { email: 'matt@null.com' },
    update: {},
    create: {
      email: 'matt@null.com',
      name: 'Matt Developer',
      posts: {
        create: {
          title: 'Check out Prisma with Next.js',
          published: true,
          categories: {
            create: [{ name: 'software development' }, { name: 'cool' }],
          },
        },
      },
    },
  });
  console.log({ matt });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
