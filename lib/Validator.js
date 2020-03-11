//test that validate method can take an object and    Return fields of value
// V.method can throw an error
//use getCaster to get correct Cast to function based on 'type'
// and config param passed in
const { getCaster } = require('../lib/types.js');

 //field is name, and config object is type: 'string', 
module.exports = class Validator {
    //  constructor(field, { type, configuration }) {
    constructor(field, configuration) {
        this.field = field;
        this.configuration = configuration;
    }
        //  this.type = type,
        // this.required = required,
        // this.caster = getCaster;
    
        
     //obj - is the object we want to run through validation
    validate(obj) {
        // if field is required and missing
        if (this.configuration.required && !(this.field in obj)) {
            throw new Error(`Missing required field >>${this.field}<<`);
        }

        //if not required and missing
        if (!this.configuration.required && !(this.filed in obj)) {
            return null;
        }
    // getCaster(String) -> castToString
    // getCaster(Number) -> castToNumber
    // getCaster(Boolean) -> castToBoolean
        const caster = getCaster(this.configuration.type);
        return caster(obj[this.field]);
    }
};
  







///////// DEMO INSTRUCTIONS//////////////////

// const nameValidator = new Validator('name', {
//     type: String,
//     required: true
//   });

//   const ageValidator = new Validator('age', {
//     type: Number,
//     required: true
//   });

//   const colorValidator = new Validator('color', {
//     type: String,
//     required: true
//   });

//   const dog = {
//     name: 'spot',
//     age: '5',
//     weight: '20 lbs'
//   };

//   nameValidator.validate(dog) // returns 'spot'
//   ageValidator.validate(dog) // returns 5
//   colorValidator.validate(dog) // throws error