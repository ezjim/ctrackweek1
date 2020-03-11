// take and object key default 
// if the key exisit in oject return
//return default
// const spot = {
//     name: 'spot',
//     age: 5,
//     weight: '20 lbs'
// };

// describe('get function', () => {
//     it('gets a value based on key', () => {
//         const spot = {
//             name: 'spot',
//             age: 5,
//             weight: '20 lbs'
//         };
//     });
// });

const spot = {
                name: 'spot',
                age: 5,
                weight: '20 lbs'
            };
// [[key, value], [key, value]]
// [key, value]


//can destructure (([key, value])) setting key to first value of array and value to 2nd
// Object.entries(spot).foreEach((keyValue) => {
Object.entries(spot).foreEach(([key, value]) => {
    console.log(key, value);

}))

const dogNames = ['spot', 'rover', 'bingo'];
const [spot, rover, bear] = dogNames;
console.log(spot, rover, bear);

//skipping destructuring
 const [dog0, , dog2];
 const [dog0, ...otherDogs] = dogNames;


//           const result get(dog, 'age' 50);
//         expect()
//         })
// })
// (ob, key, defaultVaule) => {
//     return key in obj ? obj[key] : defaultVaule; 



//to make a copy 
const dog = {...spot};
// make a copy of spot but with a name of rover
const dog = {...spot, name: 'rover' };

// returns first item in array
// return first item

const [firstItem] = arr;
return firstItem;
const [,, secondItem] = arr;
const head = ([firstItem]) => firstItem
const tail = ([...firstItem])
// tail function return all items not the first item
// [1 , 2, 3, 4] -> [2, 3, 4]
const tail = arr => {

}




const prepend = (arr, value) => {
    return [value, ...arr];
}
// short hand   dont need {} when calling with =>
const prepend = (arr, value) => [...arr, value]

// array into functions
const add = (...numbers) => numbers.reduce((acc, number) => acc + number);
const numbers = [5, 6, 1, 2]
console.log(add(...numbers));
console.log(add(5, 6, 1, 2));


// prepend item to array prepend arr, value
// returning array with value prependded

describe('array functions', () => {
    it('can prepend to arr', () => {
        const numbers = [2, 3, 4];
        const number = 1;

        const result = prepend(numbers, number);

        expect (result).toEqual([1, 2, 3, 4]);
    })
}) 

describe(' head function', () => {
    it('returns first item in array', ())
}) => {
    const names
}
//tail
describe(' tail function', () => {
    it('everthing but the head'
    const names = ['spot', 'rover', 'bingo']
    const result = tail(names);
    ())
}) => {
    const names
}