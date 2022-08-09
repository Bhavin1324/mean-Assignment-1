const util = require('util');
const fs = require('fs');

// 1) Using util module promisify function
// const unlinkPromisify = util.promisify(fs.unlink);

// 2) creating custom promise function
const unlinkPromisify = (path) => {
    return new Promise((resolve, reject) => {
        fs.unlink(path, (err) => {
            if (err)
                reject()
            else
                resolve()
        })
    })
}

const removeFile = async () => {
    try {
        const response = await unlinkPromisify('./text.txt');
    }
    catch (err) {
        console.log(err);
    }
}
removeFile();