const e = require('express');
const qnadata = require('./data');
module.exports.reply = function (message) {
    message = message.toLowerCase()
    let data = qnadata.forEach(elem => {
        elem.q.forEach(ques => {
            if (ques === message) {
                return ques
            }
        })
        if (true) { }
        // work in progress ...
    })


    /* qnadata.map(elem => {
        const originalQ = elem.q.map(ques => {
            return message === ques;
        })
        if (originalQ.indexOf(message) > -1) {
            if (elem.a instanceof Function) {
                return elem.a();
            }
        }
        return elem.a;
    }) */

}