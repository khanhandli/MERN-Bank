import axios from 'axios'
import React, { useState } from 'react'
import { showErrMsg, showSuccessMsg } from '../ultils/notification/Notification'


const initialState = {
    phone: '',
    password: '',
    err: '',
    success: ''
}
function Login() {
    const [user, setUser] = useState(initialState)
    const {phone, password, err, success} = user

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setUser({...user, [name]:value, err: '', success: ''})

    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/user/login', { ...user })
            localStorage.setItem('firstLogin', true)
            window.location.href = '/all_infor'

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login_page">
            <h2>Login</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Phone" id="email"
                    value={phone} name="phone" onChange={handleChangeInput} />
                </div>

                <div>
                    <input type="password" placeholder="Mật khẩu" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <button type="submit">Đăng nhập</button>
                </div>
            </form>
        </div>
    )
}

export default Login
