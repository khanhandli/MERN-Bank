const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Hãy nhập họ tên."],
        trim: true
    },
    phone: {
        type: String,
        required: [true, "Hãy nhập số điện thoại"],
        trim: true
    },
    address: {
        type: String,
        required: [true, "Hãy nhập địa chỉ."],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Hãy nhập số tiền muốn vay."],
        trim: true
    },
    vay: {
        type: String,
        required: [true, "Hãy chọn hình thức vay"],
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    role: {
        type: Number,
        default: 0
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)