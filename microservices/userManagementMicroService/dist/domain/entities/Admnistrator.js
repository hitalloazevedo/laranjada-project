"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrator = void 0;
const User_1 = require("./User");
class Administrator extends User_1.User {
    constructor(name, phone, email, password, image, managedGroups) {
        super(name, phone, email, password, image);
        this.role = "admin";
        this.managedGroups = managedGroups;
    }
    getManagedGroups() {
        return this.managedGroups;
    }
    setManagedGroups(groups) {
        this.managedGroups = groups;
    }
    addManagedGroup(groupId) {
        this.managedGroups.push(groupId);
    }
    removeManagedGroup(groupId) {
        this.managedGroups = this.managedGroups.filter(id => id !== groupId);
    }
}
exports.Administrator = Administrator;
