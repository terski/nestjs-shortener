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
import { readFileSync } from 'fs';

class ShortenRequest {
  url: string;
}
@Controller()
export class AppController {
  private _indexHtml: string;

  constructor(private readonly appService: AppService) {}

  private async indexHtml() {
    if (this._indexHtml) {
      return this._indexHtml;
    }
    this._indexHtml = await readFileSync(
      `${process.cwd()}/dist/assets/index.html`,
    ).toString();
    return this._indexHtml;
  }

  @Get('/')
  async index(@Res() res: Response) {
    res.setHeader('Content-Type', 'text/html');
    return res.send(await this.indexHtml());
  }

  @Get('/:id')
  async getUrl(@Param('id') id: string, @Res() res: Response) {
    const result = await this.appService.get(id);
    if (!result) {
      throw new NotFoundException('URL not found');
    }
    return res.redirect(301, result.longUrl);
  }

  @Post('/')
  async createShortUrl(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: ShortenRequest,
  ) {
    const id = await this.appService.shorten(body.url);
    const shortenedUrl = `${req.headers.host}/${id}`;
    const index = await this.indexHtml();
    const result = `
      ${index}
      <p>
        Shortened URL:
        <a href="${id}" rel="noopener noreferrer" target="_blank">
          ${shortenedUrl}
        </a>
      </p>
    `;
    res.setHeader('Content-Type', 'text/html');
    return res.send(result);
  }
}
