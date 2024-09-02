const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("コネクションOK");
    })
    .catch(err => {
        console.log('コネクションエラー');
        console.log(err);
    });


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  //必ずオブジェクトに存在しなければならない
        maxLength: 10
    },
    price: {
        type: Number,
        require: true,
        min: [0, 'priceは0より大きい値にしてください']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
});

productSchema.methods.greet = function () {
    console.log('ハロー！！やっほー！！')
}

const Product = mongoose.model('Product', productSchema);

// const bike = new Product({
//     name: 'マウンテンバイク',
//     price: 59800
// });

// bike.save()
//     .then(data => {
//         console.log('成功！！！');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('エラー！！');
//         console.log(err);
//     })

// Product.findOneAndUpdate({ name: 'マウンテンバイク' }, { price: 1800 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('成功');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('失敗');
//         console.log(err);
//     })
