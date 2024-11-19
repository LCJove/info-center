import { Command, CommandRunner, Option } from 'nest-commander';

@Command({ name: 'swap', description: 'Execute token swap' })
export class SwapTokenCommand extends CommandRunner {
  constructor(private readonly) {
    super();
  }

  async run(
    passedParam: string[],
    options?: Record<string, any>,
  ): Promise<void> {
    console.log('swap token', passedParam, options);
  }

  @Option({
    flags: '-t, --token [token]',
    description: 'Token to swap',
  })
  parseToken(val: string): string {
    return val;
  }
}
