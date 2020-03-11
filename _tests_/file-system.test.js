const fs = require('fs');
const {
    mkdir
} = require('../lib/file-system.js');


describe('file system', () => {

    it('should make a directory', () => {
        fs.mkdir('./justmademe', () => {
        // fs.readdir('./justmademe', (err, files) => {
            expect(mkdir).toEqual([]);
            
        });
    });
});

describe('check if dir exsist', () => {

    it('should check if a dir exsist', () => {
        fs.existsSync('./justmademe', () => {
      // fs.readdir('./justmademe', (err, files) => {
            
          
        });
    });
});


