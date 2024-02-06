import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlbumService {
  constructor(private prisma: PrismaService) {}

  createAlbum(title: string, artistId: number) {
    return this.prisma.album.create({ data: { title, artistId } });
  }
}
