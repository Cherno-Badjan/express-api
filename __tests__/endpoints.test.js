const { app } = require('../app.js');
const { characters } = require('../data.js');
const supertest = require('supertest');
const request = supertest(app);
it('should respond with all characters',

    async (done) => {
        const expectation = {

            characters
        };

        const response = await request.get('/characters');

        expect(response.status).toBe(200);

        expect(response.body).toEqual(expectation);

        done();
    });
it('should respond with  one character i.e. Sirius Black',

    async (done) => {
        const expectation = {


            selectedCharacter: {
                "id": 5,
                "first_name": "Sirius",
                "last_name": "Black",
                "Age": 35,
                "gender": "Non-binary",
                "vegetarian": false
            }

        };

        const response = await request.get('/characters/5');

        expect(response.status).toBe(200);

        expect(response.body).toEqual(expectation);

        done();
    });