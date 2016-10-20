export class Item {
    id: number;
    name: string;
    editing: boolean;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}