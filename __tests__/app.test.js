
const { response } = require('express');
// will use supertest to test HTTP requests/responses
const request = require('supertest');
const app = require('../src/server/app');

describe("GET /", () => {
    test("should respond with text/html content type", () => {
        return request(app)
        .get("/")
        .then(response => {
            expect(response.type).toEqual('text/html');
            expect(response.statusCode).toBe(200);
        })
    })
})