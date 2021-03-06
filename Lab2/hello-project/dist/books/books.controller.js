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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const update_book_dto_1 = require("./dto/update-book.dto");
const swagger_1 = require("@nestjs/swagger");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    postBook(book) {
        return this.booksService.insert(book);
    }
    putBook(book) {
        return this.booksService.update(book);
    }
    deleteBook(bookId) {
        return this.booksService.delete(bookId);
    }
    getAll() {
        return this.booksService.getAllBooks();
    }
};
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 201, description: 'You add book sucessfully' }),
    swagger_1.ApiResponse({ status: 400, description: 'Bad request!' }),
    swagger_1.ApiResponse({ status: 401, description: 'You are not authorized' }),
    swagger_1.ApiBearerAuth(),
    common_1.Post('post'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.default]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "postBook", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 200, description: 'You update the book successfullly' }),
    swagger_1.ApiResponse({ status: 400, description: 'Wanted book does not exists' }),
    swagger_1.ApiResponse({ status: 401, description: 'You are not authorized' }),
    swagger_1.ApiBearerAuth(),
    common_1.Put('put'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_book_dto_1.default]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "putBook", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 200, description: 'You delete the book successfullly' }),
    swagger_1.ApiResponse({ status: 400, description: 'Wanted book does not exists' }),
    swagger_1.ApiResponse({ status: 401, description: 'You are not authorized' }),
    swagger_1.ApiBearerAuth(),
    common_1.Delete('delete'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "deleteBook", null);
__decorate([
    common_1.Header('Content-Type', 'application/json'),
    swagger_1.ApiResponse({ status: 200, description: 'You get all genres' }),
    swagger_1.ApiResponse({ status: 401, description: 'You are not authorized' }),
    swagger_1.ApiBearerAuth(),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "getAll", null);
BooksController = __decorate([
    common_1.Controller('books'),
    __metadata("design:paramtypes", [books_service_1.default])
], BooksController);
exports.default = BooksController;
//# sourceMappingURL=books.controller.js.map