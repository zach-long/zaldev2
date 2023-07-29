import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    @Render('index')
    root() {
        return { pageTitle: 'Zachary Long - Full Stack Developer' };
    }
}

// import { Get, Controller, Res, Render } from '@nestjs/common';
// import { Response } from 'express';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private appService: AppService) {}

//   @Get()
//   root(@Res() res: Response) {
//     return res.render(
//       this.appService.getViewName(),
//       { message: 'Hello world!' },
//     );
//   }
// }