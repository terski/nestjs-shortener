import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { AlbumController } from './album/album.controller';
import { AlbumService } from './album/album.service';
import { SongController } from './song/song.controller';
import { SongService } from './song/song.service';
import { PlaylistService } from './playlist/playlist.service';
import { PlaylistController } from './playlist/playlist.controller';

@Module({
  imports: [],
  controllers: [AppController, PostController, AlbumController, SongController, PlaylistController],
  providers: [AppService, PrismaService, PostService, AlbumService, SongService, PlaylistService],
})
export class AppModule {}
