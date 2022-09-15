import { faker } from '@faker-js/faker';
import { TItemData } from '../src/types/ItemsTypes';

export default async function createItem() {
    const objeto:TItemData ={
        title: faker.lorem.sentence(),
        url: faker.internet.url(),
        description: faker.lorem.paragraph(),
        amount: Number(faker.finance.amount(0,1000,0))
    }
    return objeto
}