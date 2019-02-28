export default class Task {
    constructor(id, name, tags, endDate) {
        this.id = id;
        this.name = name;
        this.tags = tags;
        this.startDate = new Date().toISOString().slice(0, 10);
        this.endDate = endDate;
    }
}