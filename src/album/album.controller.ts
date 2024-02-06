import { Body, Controller, Post } from '@nestjs/common';
import { AlbumService } from './album.service';

type AlbumRequest = {
  title: string;
  artistId: number;
};

@Controller('album')
export class AlbumController {
  constructor(private service: AlbumService) {}

  @Post()
  async createAlbum(@Body() { title, artistId }: AlbumRequest) {
    const album = await this.service.createAlbum(title, artistId);
    return { album };
  }
}
