import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlaylistService {
  constructor(private prisma: PrismaService) {}

  async createPlaylist(title: string, songs: number[]) {
    const playlist = await this.prisma.playlist.create({
      data: {
        title,
      },
    });

    songs.forEach(async (song) => {
      await this.prisma.songOnPlaylist.create({
        data: {
          songId: song,
          playlistId: playlist.id,
        },
      });
    });

    return playlist;
  }
}
