"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let CompanyEntity = class CompanyEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CompanyEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "location", void 0);
__decorate([
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "website", void 0);
__decorate([
    typeorm_1.OneToOne(() => user_entity_1.default),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.default)
], CompanyEntity.prototype, "userEntity", void 0);
CompanyEntity = __decorate([
    typeorm_1.Entity()
], CompanyEntity);
exports.default = CompanyEntity;
//# sourceMappingURL=company.entity.js.map