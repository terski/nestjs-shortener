import { Body, Controller, Post } from '@nestjs/common';
import { PlaylistService } from './playlist.service';

type PlaylistRequest = {
  title: string;
  songs: number[];
};

@Controller('playlist')
export class PlaylistController {
  constructor(private service: PlaylistService) {}

  @Post()
  async createPlaylist(@Body() { title, songs }: PlaylistRequest) {
    const playlist = await this.service.createPlaylist(title, songs);
    return { playlist };
  }
}
