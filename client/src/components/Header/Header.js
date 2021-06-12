import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import {Link as Link2} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [userr] = state.userAPI.userr

    const logoutUser = async () => {
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')

        window.location.href = "/";
    }

    return (
        isAdmin ?
         (<header id="top">
         <ul>
             <li>
                 ADMIN
             </li>
             
             <li>
                 <Link2 to="/" onClick={logoutUser}>
                     Logout
                 </Link2>
             </li>
         </ul>
     </header>) 
        : 
        (<header id="top">
        <ul>
            <li>
                <a href="/">
                    Hỗ trợ vay tín chấp ngân hàng
                </a>
            </li>
            <li>
                <Link href="/">
                    Lợi ích
                </Link>
            </li>
            <li>
                <Link spy={true} smooth={true} offset={50} duration={500} activeClass="active" to={'vay'}>
                    Vay tín chấp
                </Link>
            </li>
            <li>
                <Link spy={true} smooth={true} offset={50} duration={500} activeClass="active" to={'hoso'}>
                    Hồ sơ
                </Link>
            </li>
            <li>
                <Link2 to="/register">
                    Liên hệ
                </Link2>
            </li>
            <li>
                <Link2 to="/login">
                    DN
                </Link2>
            </li>
        </ul>
    </header>) 
    )
}

export default Header
