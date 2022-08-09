const util = require('util');
const fs = require('fs');

const unlinkPromisify = util.promisify(fs.unlink);

const removeFile = async () => {
    try {
        const response = await unlinkPromisify('./q-7/text.txt');
    }
    catch (err) {
        console.log(err);
    }
}
removeFile();