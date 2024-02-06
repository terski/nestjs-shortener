import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) {}

  createSong(title: string, albumId: number) {
    return this.prisma.song.create({ data: { title, albumId } });
  }
}
