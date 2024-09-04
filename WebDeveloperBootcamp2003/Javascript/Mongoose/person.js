const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("コネクションOK");
    })
    .catch(err => {
        console.log('コネクションエラー');
        console.log(err);
    });

const personSchema = new mongoose.Schema({
    last: String,
    first: String,
})

personSchema.virtual('fullName')
    .get(function () {
        return `${this.first} ${this.last}`;
    })
    .set(function (v) {
        // `v` is the value being set, so use the value to set
        // `firstName` and `lastName`.
        const firstName = v.substring(0, v.indexOf(' '));
        const lastName = v.substring(v.indexOf(' ') + 1);
        this.set({ firstName, lastName });
    });

const Person = mongoose.model('Person', personSchema);
// const yamada = new Person({ first: 'Taro', last: 'Yamada' });
// yamada.save();


const test = async function () {
    const yamada = await Person.findOne({ last: 'Yamada' });
    console.log(yamada.fullName);
}

test();