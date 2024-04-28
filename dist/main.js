"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
        await app.listen(3001);
    }
    catch (error) {
        throw new Error(error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map