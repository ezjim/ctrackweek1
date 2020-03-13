const { Schema } = require('../lib/Schema.js');

describe('Schema', () => {
    it('validates a valid schema', () => {
        const schema = new Schema({
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number
            },
            weight: {
                type: String
            }
        });
        const dog = {
            name: 'Spot',
            age: 5,
            weight: '20 lbs'
        };
        expect(schema.validate(dog)).toEqual({
            name: 'Spot',
            age: 5,
            weight: '20 lbs'
        });
    });
});