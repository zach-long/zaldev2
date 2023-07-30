import { Get, Controller, Res, Render } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  renderRoot(@Res() res: Response) {
    return res.render(
      'index',
      { pageTitle: 'Zachary Long - Full Stack Developer' },
    );
  }

  @Get('admin')
  renderAdmin(@Res() res: Response) {
    return res.render(
        'admin/index',
        { pageTitle: 'Admin' }
    );
  }
}