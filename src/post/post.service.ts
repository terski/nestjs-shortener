import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  getPosts() {
    return this.prisma.post.findMany({
      select: {
        id: true,
        title: true,
        authorId: true,
        categories: {
          select: { name: true },
        },
      },
      where: { published: true },
    });
  }

  createPost(authorId: number, title: string, categories: string[]) {
    return this.prisma.post.create({
      data: {
        title,
        authorId,
        categories: {
          connectOrCreate: categories.map((name) => ({
            where: { name: name.toLowerCase() },
            create: { name: name.toLowerCase() },
          })),
        },
      },
    });
  }
}
