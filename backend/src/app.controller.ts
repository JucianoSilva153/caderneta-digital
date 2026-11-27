import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  health() {
    return {
      status: 'ok',
      servico: 'caderneta-digital-api',
      versao: '0.1.0',
      sprint: 1,
    };
  }
}
