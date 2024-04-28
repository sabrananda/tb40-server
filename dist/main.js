"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['http://127.0.0.1:3000', 'https://tb40.vercel.app'],
    });
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map