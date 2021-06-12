import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {GlobalState} from '../../../GlobalState'

function ListUser() {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [userr] = state.userAPI.userr
    const [allUser] = state.userAPI.allUser
    const loadAllUser = state.userAPI.loadAllUser
    const [callback, setCallback] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if(isAdmin){
            loadAllUser()
        }
    },[isAdmin,token,callback])// eslint-disable-line react-hooks/exhaustive-deps

    const handleDelete = async (id) => {
        try {
            if(userr._id !== id){
                if(window.confirm("Bạn chắc chắn muốn xóa tài khoản?")){
                    setLoading(true)
                    await axios.delete(`/user/delete/${id}`, {
                        headers: {Authorization: token}
                    })
                    setLoading(false)
                    setCallback(!callback)
                }
            }
            
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="col-right">
                <h2>{isAdmin ? "Users" : "My Orders"}</h2>

                <div style={{overflowX: "auto"}}>
                    <table className="customers">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ</th>
                                <th>Số tiền vay</th>
                                <th>Phương thức vay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUser.map(user => (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address}</td>
                                        <td>{user.price}</td>
                                        <td>{user.vay}</td>
                                        <td>
                                            <div className="delete"
                                            onClick={() => handleDelete(user._id)} > Xóa</div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default ListUser
