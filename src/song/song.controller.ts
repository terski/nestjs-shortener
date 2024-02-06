import { Body, Controller, Post } from '@nestjs/common';
import { SongService } from './song.service';

type SongRequest = {
  title: string;
  albumId: number;
};

@Controller('song')
export class SongController {
  constructor(private service: SongService) {}

  @Post()
  async createSong(@Body() { title, albumId }: SongRequest) {
    const song = await this.service.createSong(title, albumId);
    return { song };
  }
}
