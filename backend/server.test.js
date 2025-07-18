
import request from 'supertest';
import app from './server.js';

describe('GET /', () => {
  it('should return Hello from Backend', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello from Backend');
    expect(res.statusCode).toBe(200);
  });
});
