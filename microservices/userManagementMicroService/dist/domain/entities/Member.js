"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const User_1 = require("./User");
class Member extends User_1.User {
    constructor(name, phone, email, password, image, groupId) {
        super(name, phone, email, password, image);
        this.groupId = groupId;
        this.role = "member";
    }
    getGroupId() {
        return this.groupId;
    }
    getRole() {
        return this.role;
    }
    setGroupId(id) {
        this.groupId = id;
    }
}
exports.Member = Member;
