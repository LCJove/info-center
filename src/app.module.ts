import { Module } from '@nestjs/common';
import { SwapTokenCommand } from './commands/swap/swap.command';

@Module({
  imports: [],
  controllers: [],
  providers: [SwapTokenCommand],
})
export class AppModule {}
