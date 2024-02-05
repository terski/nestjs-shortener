import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';

class PostRequest {
  authorId: number;
  title: string;
  categories: string[];
}

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getPosts() {
    const posts = await this.postService.getPosts();
    return { posts };
  }

  @Post()
  async createPost(@Body() { authorId, title, categories }: PostRequest) {
    const post = await this.postService.createPost(authorId, title, categories);
    return { post };
  }
}
