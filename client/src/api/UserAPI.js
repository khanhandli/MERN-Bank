import axios from 'axios'
import {useEffect, useState}  from 'react'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin]= useState(false)
    const [userr, setUserr] = useState([])
    const [allUser, setAllUser]= useState([])

    useEffect(() => {
        if(token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                    
                    setUserr(res.data)
                    
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }
            getUser();
        }
    }, [token])
    const loadAllUser = async() => {
        try {
            const res = await axios.get('/user/all_infor', {
                headers: { Authorization: token }
            })

            setAllUser(res.data)


        } catch (err) {
        }   
    }
    
    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        userr: [userr, setUserr],
        allUser: [allUser, setAllUser],
        loadAllUser: loadAllUser
    }
}

export default UserAPI