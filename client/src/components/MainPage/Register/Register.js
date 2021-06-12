import axios from 'axios'
import React, { useState } from 'react'
// import { GlobalState } from '../../../GlobalState'
import { showErrMsg, showSuccessMsg } from '../ultils/notification/Notification'
import { Link } from 'react-router-dom'

    const initialState = {
        name: '',
        phone: '',
        address: '',
        price: '',
        vay: '',
        err: '',
        success: ''
    }
function Register() {
    
    const isEmpty = value => {
    if(!value) return true
    return false
}
    // const state = useContext(GlobalState);
    const [user, setUser] = useState(initialState)
    const {name, phone, address, price, vay, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        if(isEmpty(name) || isEmpty(phone))
                return setUser({...user, err: "Hãy điền đầy đủ thông tin.", success: ''})
        try {
            alert('Đăng ký thành công chúng tôi sớm liên hệ với bạn!');
            window.location.href = '/';
            const res = await axios.post('/user/register', {
                name, phone, address, price, vay
            });
            setUser({...user, err: '', success: res.data.msg})
            
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
        
    }

    return (
        <div className="register" id='vay'>
            <div className="register__form">
                <form onSubmit={onHandleSubmit}>
                    <h4>Đăng Ký Nhận Ưu Đãi Tốt Nhất</h4>
                    <p>Vui lòng điền thông tin của bạn, chúng tôi rất sẵn sàng được hỗ trợ bạn bất cứ lúc nào. Nhân viên CSKH sẽ liên hệ lại cho bạn sớm nhất.</p>
                    {err && showErrMsg(err)}
                    {success && showSuccessMsg(success)}
                    <input type="text"
                        name="name"
                        placeholder="Họ và tên"
                        value={name}
                        onChange={handleChangeInput}
                    />
                    <input type="text"
                        name="phone"
                        placeholder="Số điện thoại"
                        value={phone}
                        onChange={handleChangeInput}
                        />
                    <input type="text"
                        name="address"
                        placeholder="Địa chỉ"
                        value={address}
                        onChange={handleChangeInput}
                        />
                    <input type="text"
                        name="price"
                        placeholder="Số tiền muốn vay"
                        value={price}
                        onChange={handleChangeInput}
                        />
                    <input type="text"
                        name="vay"
                        placeholder="Hình thức vay"
                        value={vay}
                        onChange={handleChangeInput}
                        />
                    <input type="submit" value="HOÀN TẤT ĐĂNG KÝ" />
                </form>
                <div className="close">
                 <Link to="/">X</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Register
