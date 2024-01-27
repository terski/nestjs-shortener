import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

class ShortenRequest {
  url: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  async getUrl(@Param('id') id: string, @Res() res: Response) {
    const result = await this.appService.get(id);
    if (!result) {
      throw new NotFoundException('URL not found');
    }
    return res.redirect(301, result.longUrl);
  }

  @Post('/')
  async createShortUrl(@Req() req: Request, @Body() body: ShortenRequest) {
    const id = await this.appService.shorten(body.url);
    return { result: `${req.headers.host}/${id}` };
  }
}
