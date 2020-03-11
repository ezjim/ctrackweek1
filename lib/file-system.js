const fs = require('fs').promises;

const mkdir = (path) => {
    fs.mkdir(path, { recursive: true });
};