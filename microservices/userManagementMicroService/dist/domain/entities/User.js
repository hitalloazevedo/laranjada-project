"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(name, phone, email, password, image) {
        this.uuid = (0, uuid_1.v4)();
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.givenOranges = 0;
        this.image = image;
    }
    // Getters
    getId() {
        return this.uuid;
    }
    getName() {
        return this.name;
    }
    getPhone() {
        return this.phone;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getGivenOranges() {
        return this.givenOranges;
    }
    getImage() {
        return this.image;
    }
    // Setters
    setName(name) {
        this.name = name;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    setEmail(email) {
        this.email = email;
    }
    setPassword(password) {
        this.password = password;
    }
    setGivenOranges(givenOranges) {
        this.givenOranges = givenOranges;
    }
    setImage(image) {
        this.image = image;
    }
}
exports.User = User;
