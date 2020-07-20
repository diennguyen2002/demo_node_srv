const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:root@cluster0.zfu2x.mongodb.net/phoneshop?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const Product = mongoose.model('Product', 
{ 
    name: String ,
    price: Number,
    img: String
});

module.exports = {Product}

// const sp1 = new Product({name: 'Điện Thoại iPhone 11 64GB', price: 18490000, img: 'images/iphone11_64.png'})
// sp1.save()
// .then(res => console.log(res))
// .catch(err => console.log(err))

// const sp2 = new Product({name: 'Điện Thoại Samsung Galaxy A11 32GB', price: 2750000, img: 'images/samsung_a11_32.png'})
// sp2.save()
// .then(res => console.log(res))
// .catch(err => console.log(err))

// const sp3 = new Product({name: 'Điện Thoại Xiaomi Redmi Note 8', price: 2750000, img: 'images/xiaomi_redmi_note8.png'})
// sp3.save()
// .then(res => console.log(res))
// .catch(err => console.log(err))