import app from '../src/app';
import supertest from 'supertest';
import createItem from '../factories/itemFactory'
import { TItemData } from '../src/types/ItemsTypes';

describe('Testa POST /items ', () => {
  it('Deve retornar 201, se cadastrado um item no formato correto',async ()=>{
    const body= await createItem() as TItemData
    const result = await supertest(app).post("/items").send(body);
    const status = result.status;    
    expect(status).toEqual(201);
  });

  it('Deve retornar 409, ao tentar cadastrar um item que exista',async()=>{
    const body= await createItem() as TItemData
    await supertest(app).post("/items").send(body);
    const result = await supertest(app).post("/items").send(body);
    const status = result.status; 
    expect(status).toEqual(409);
  });
});

describe('Testa GET /items ', () => {
  it('Deve retornar status 200 e o body no formato de Array',async()=>{
    const result = await supertest(app).get("/items");
    expect(result.status).toBe(200)
    expect(result.body).toBeInstanceOf(Array)
  });
});

describe('Testa GET /items/:id ', () => {
  it('Deve retornar status 200 e um objeto igual a o item cadastrado',async ()=>{
    const result = await supertest(app).get("/items/1");
    expect(result.status).toBe(200)
    expect(result.body).toBeInstanceOf(Object)
  });

  it('Deve retornar status 404 caso não exista um item com esse id',async ()=>{
    const result = await supertest(app).get("/items/200");
    expect(result.status).toBe(404)
  });
});
