import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
  // Hello chào mừng các streamer đến với kênh của mình, hôm nay mình sẽ hướng dẫn các bạn cách tạo một API Gateway đơn giản sử dụng NestJS. API Gateway là một thành phần quan trọng trong kiến trúc microservices, nó giúp chúng ta quản lý và điều phối các dịch vụ khác nhau trong hệ thống của mình. Trong ví dụ này, mình sẽ tạo một API Gateway đơn giản để kết nối với một dịch vụ Catalog Service. Hãy cùng bắt đầu nhé!
}
bootstrap();
