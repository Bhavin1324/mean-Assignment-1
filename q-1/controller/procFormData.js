const peoples = require('../data');
const formActionPost = (req, res) => {
    const { mail, about } = req.body;
    if (mail && about) {
        return res.status(201).send(`<div><span style="font-weight:600;font-size:18px">Your email is :</span>${mail}</div> <br> <div><span style="font-weight:600;font-size:18px">Description:</span> ${about}</div>`);
    }
    res.send("Any one field was empty. Checkout again");
}

const getPeoples = (req, res) => {
    return res.status(200).json({ data: peoples });
}

const postPeoples = (req, res) => {
    const { email, desc } = req.body;
    if (!email || !desc) {
        return res.status(400).json({ success: false, msg: 'Cannot post empty data' });
    }
    return res.status(201).json({ sucess: true, data: { email: email, description: desc } });
}

module.exports = { formActionPost, getPeoples, postPeoples };