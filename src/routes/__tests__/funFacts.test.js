jest.mock('../../models/Funfact', () =>({
    list: jest.fn().mockReturnValue([]),
}));

const app = require("../../app");
const request = require("supertest");


describe('funFacts routes tests', () => {
    it('should return funFacts in the body', async() => {
        const response = await request(app).get('/funfacts');
        expect(response.body).toEqual({
            funFacts: [],
            sources: ["https://www.mentalfloss.com/amazingfactgenerator"],
        });
    });
});