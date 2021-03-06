import { Controller, Get } from '@nestjs/common';
import { HealthCheck, MongooseHealthIndicator, HealthCheckService, HealthCheckResult } from '@nestjs/terminus';

@Controller('health')
export class SharedApiHealthController {
  constructor(private readonly health: HealthCheckService, private readonly mongoose: MongooseHealthIndicator) {}

  @Get()
  @HealthCheck()
  check(): Promise<HealthCheckResult> {
    return this.health.check([() => this.mongoose.pingCheck('demo-db')]);
  }
}
