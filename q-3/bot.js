const e = require('express');
const qnadata = require('./data');

function reply(message) {
    message = message.toLowerCase()
    let answerList = qnadata.find(elem => {
        let data = elem.q.find(ques => ques === message);
        if (data != undefined) {
            if (elem.a instanceof Function) {
                return elem.a();
            }
            return elem.a;
        }
    })
    if (answerList != undefined) {
        return answerList.a;
    }
    else {
        return `I don't understrand what you wanna say... :(`
    }
}

module.exports = reply;