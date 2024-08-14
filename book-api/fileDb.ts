import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Imessage, MessageMutation} from './types';

const filename = './db.json';
let data: Imessage[] = [];

const fileDb = {
  async init() {
    try {
      const fileContents = await fs.readFile(filename);
      data = JSON.parse(fileContents.toString());
    } catch (e) {
      data = [];
    }
  },
  async getItems() {
    return data;
  },
  async addItem(item: MessageMutation) {
    const id = crypto.randomUUID();
    const product = {...item,id};
    data.push(product);
    await this.save();
    return product;
  },
  async save() {
    return fs.writeFile(filename, JSON.stringify(data, null, 2));
  }
};

export default fileDb;
