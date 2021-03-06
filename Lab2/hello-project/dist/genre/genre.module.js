"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const genre_service_1 = require("./genre.service");
const genre_controller_1 = require("./genre.controller");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let GenreModule = class GenreModule {
};
GenreModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [genre_controller_1.default],
        providers: [
            genre_service_1.default,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            }
        ],
    })
], GenreModule);
exports.default = GenreModule;
//# sourceMappingURL=genre.module.js.map