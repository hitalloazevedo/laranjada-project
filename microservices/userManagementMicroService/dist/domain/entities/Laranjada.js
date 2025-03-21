"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laranjada = void 0;
class Laranjada {
    constructor(members, name, id, totalOranges, totalReceivedOranges) {
        this.members = members;
        this.name = name;
        this.id = id;
        this.totalOranges = totalOranges;
        this.totalReceivedOranges = totalReceivedOranges;
    }
    // Getters
    getMembers() {
        return this.members;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTotalOranges() {
        return this.totalOranges;
    }
    getTotalReceivedOranges() {
        return this.totalReceivedOranges;
    }
    // Setters
    setMembers(members) {
        this.members = members;
    }
    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    setTotalOranges(totalOranges) {
        this.totalOranges = totalOranges;
    }
    setTotalReceivedOranges(totalReceivedOranges) {
        this.totalReceivedOranges = totalReceivedOranges;
    }
    addMember(user) {
        this.members.push(user);
    }
    removeMember(user) {
        this.members = this.members.filter(member => member.getId() != user.getId());
    }
}
exports.Laranjada = Laranjada;
