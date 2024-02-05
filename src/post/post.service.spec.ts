import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('PostService', () => {
  let service: PostService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostService, PrismaService],
    }).compile();

    service = module.get<PostService>(PostService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prisma).toBeDefined();
  });

  it('should get posts', async () => {
    const posts = [
      {
        id: 1,
        title: 'Post 1',
        createdAt: new Date(),
        updatedAt: new Date(),
        published: true,
        authorId: 1,
        categories: [{ name: 'Category 1' }],
      },
    ];
    jest.spyOn(prisma.post, 'findMany').mockResolvedValue(posts);
    expect(await service.getPosts()).toEqual(posts);
  });
});
