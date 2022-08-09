const qnadata = [
    {
        q: ["tell me your name", "whats your name?", "any name?", "any name", "your name", "your name?", "name?", "name"],
        a: `I am Alex.`
    },
    {
        q: ["age?", "age", "your age", "your age?", "what is your age", "what is your age?", "whats your age?", "whats your age", "what's your age?", "what's your age"],
        a: `Just born. I am little baby :P :)`
    },
    {
        q: ["hi", "hello", "?", "hiii", "hii", "helo", "hellooooo", "hey", "heyy", "heyyy"],
        a: "Hi! do you need any medical assistance?"
    },
    {
        q: ["yay", "yes", "affirmative", "ya", "yaa", "yaaa", "yess", "ha", "haa"],
        a: "how do you feel? any head ache, body pain, flu, cough,... anything???"
    },
    {
        q: ["nope", "noo", "no", "na", "nahi", "nai", "never"],
        a: "okey dokey. I may not give you other answers :). Still you can ask"
    },
    {
        q: ["what", "what?", "kya?", "su", "su?", "kya?"],
        a: "Anything regarding health."
    },
    {
        q: ["m ok", "i m okay", "m good", "Feeling batter"],
        a: "Good ! Health is wealth humans. We BOTs are very careless, but still can take care of others : )"
    },
    {
        q: ["body pain"],
        a: `1)) Take a few cubes of ice in a plastic bag. Fill the bag with water and seal or tie it close. Wrap the bag in a towel and put it over the affected area a few seconds a time. Do not keep the ice at the area for long at once. Repeat the compression twice a day.\n 2)) Take an inch of ginger and boil it in a pan with a cup of water. Strain the solution and drink when cooled enough. You can add honey to sweeten the drink.\n 3)) If still not feeling well consult your doctor before taking any medicine by your self`
    },
    {
        q: ["headache", "head ache", "head"],
        a: `1)) Try herbal tea.\n 2)) Turn down the light and take rest.\n 3)) Drink enough water \n 4)) Head excersize and apply balm for head ache \n if still not relive consult your doctor`
    },
    {
        q: ["cough"],
        a: `*)) Take Honey \n *)) Turmaric powder or tumari milk \n *))steam \n *)) Gargle Saltwater \n *)) Ginger`
    },
    {
        q: ["flu"],
        a: `*))Drink Herbal tea\n *)) Turmaric powder or tumari milk \n *)) Drink warm water or soup \n *)) Inhale Steam \n *)) Blend diet`
    },
    {
        q: ["stomach pain", "stomach"],
        a: `*))Bitter soda \n *)) Chamomile tea \n *)) Apple cider vinegar  \n *)) Peppermint \n *)) Heating Pod. \n if still not relive consult your doctor`
    },
    {
        q: ["tnx", "thanks", "thank you", "you are nice", "nice"],
        a: `Welcome! I am happy :) `
    },
    {
        q: ["bye", "byee", "good by", "byeee", "bbye"],
        a: () => { console.log("BOT ==> Good bye! stay healthy"); process.exit(); }
    },
    {
        q: ["bye dont like you", "byee disappointed", "useless", "byeee useless", "bbye useless", "bad bot", "bad alex"],
        a: () => { console.log("BOT ==> I am sorry for disappointing you :(  I am still learning. hope next time I may help you."); process.exit(); }
    },
];
module.exports = qnadata;