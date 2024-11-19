import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module';
import { logerror } from './util';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  try {
    await CommandFactory.run(AppModule, new Logger());
  } catch (error) {
    logerror('bootstrap failed!', error);
  }
}
bootstrap();
