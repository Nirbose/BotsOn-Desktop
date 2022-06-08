import { ExtensionInterface } from './extensions';

export interface BotInterface {
    id: string;
    name: string;
    avatar: string;
    token: string;
    prefix: string;
    extensions: ExtensionInterface[];
}

export class BotsCollection {

    private static items: BotInterface[];

    public static add(bots: BotInterface[]) {
        bots.map(item => {
            this.items.push(item);
        });
    }

    public static get(id?: string): BotInterface|BotInterface[] {
        if (id) {
            return this.items.find(item => item.id === id);
        }

        return this.items;
    }
    
    public static remove(id: string) {
        this.items = this.items.filter(item => item.id !== id);
    }

    public static clear() {
        this.items = [];
    }

}

export class Bot {

    public id: string;
    public name: string;
    public avatar: string;
    public token: string;
    public prefix: string;
    public extensions: ExtensionInterface[];

    constructor(id: string, name: string, avatar: string, token: string, prefix: string, extensions: ExtensionInterface[]) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.token = token;
        this.prefix = prefix;
        this.extensions = extensions;

        BotsCollection.add([this]);
    }

}