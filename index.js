const express = require("express");
const app = express();
const bodyParser  =  require("body-parser")
const {Product} = require("./product")
app.use(express.static('public'));
app.use(bodyParser.json())

const list = [
  {
    title: "Bán nhiều nhất",
    data: [
      {
        name: "Điện Thoại iPhone 11 64GB",
        price: "18.490.000 đ",
        img: "",
      },
      {
        name: "Điện Thoại Samsung Galaxy A11 (32GB/3GB)",
        price: "2.750.000 đ",
        img: "",
      },
      {
        name: "Điện Thoại Xiaomi Redmi Note 8",
        price: "3.190.000 đ",
        img: "",
      },
    ],
  },
  {
    title: "Mới nhất",
    data: [
      {
        name: "Điện Thoại iPhone 11 64GB",
        price: "18.490.000 đ",
        img: "",
      },
      {
        name: "Điện Thoại Samsung Galaxy A11 (32GB/3GB)",
        price: "2.750.000 đ",
        img: "",
      },
      {
        name: "Điện Thoại Xiaomi Redmi Note 8",
        price: "3.190.000 đ",
        img: "",
      },
    ],
  },
  {
    title: "Được yêu thích nhất",
    data: [
      {
        name: "Điện Thoại iPhone 11 64GB",
        price: "18.490.000 đ",
        img: "",
      },
      {
        name: "Điện Thoại Samsung Galaxy A11 (32GB/3GB)",
        price: "2.750.000 đ",
        img: "",
      },
      {
        name: "Điện Thoại Xiaomi Redmi Note 8",
        price: "3.190.000 đ",
        img: "",
      },
    ],
  },
  {
    title: "Giảm giá nhiều nhất",
    data: [
      {
        name: "Điện Thoại iPhone 11 64GB",
        price: "18.490.000 đ",
        img: "",
      },
      {
        name: "Điện Thoại Samsung Galaxy A11 (32GB/3GB)",
        price: "2.750.000 đ",
        img: "",
      },
      {
        name: "Điện Thoại Xiaomi Redmi Note 8",
        price: "3.190.000 đ",
        img: "",
      },
    ],
  },
];

app.get("/list" , (req , res) => {
    Product.find({})
    .then(products => res.send({success : true , products}))
    .catch(error => res.send({success : false , message : error}))
})

app.listen(process.env.PORT || "3000",() => console.log("Server started"))
