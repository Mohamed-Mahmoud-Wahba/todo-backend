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
exports.TaskResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Task_1 = require("../entities/Task");
let TaskResolver = class TaskResolver {
    hello() {
        return "Hello World!";
    }
    tasks() {
        return Task_1.Task.find({});
    }
    task(id) {
        return Task_1.Task.findOneBy({ id });
    }
    createdTask(title) {
        return Task_1.Task.create({ title, isComplete: false }).save();
    }
    deleteTask(id) {
        try {
            Task_1.Task.delete({ id });
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    updateTask(id, isComplete, title) {
        const task = Task_1.Task.findOneBy({ id });
        if (!task) {
            return null;
        }
        try {
            Task_1.Task.update({ id }, { isComplete, title });
            return true;
        }
        catch (_a) {
            return false;
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], TaskResolver.prototype, "hello", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Task_1.Task]),
    (0, type_graphql_1.Query)(() => [Task_1.Task]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "tasks", null);
__decorate([
    (0, type_graphql_1.Query)(() => Task_1.Task, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "task", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Task_1.Task),
    __param(0, (0, type_graphql_1.Arg)("title", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "createdTask", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Boolean)
], TaskResolver.prototype, "deleteTask", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("isComplete", () => Boolean)),
    __param(2, (0, type_graphql_1.Arg)("title", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean, String]),
    __metadata("design:returntype", Object)
], TaskResolver.prototype, "updateTask", null);
TaskResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], TaskResolver);
exports.TaskResolver = TaskResolver;
//# sourceMappingURL=task.js.map