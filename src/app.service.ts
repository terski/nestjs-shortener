import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async get(shortId: string) {
    return await this.prisma.url.findUnique({ where: { shortId } });
  }

  async shorten(longUrl: string) {
    const shortId = nanoid();
    const url = await this.prisma.url.create({ data: { shortId, longUrl } });
    return url.shortId;
  }
}
