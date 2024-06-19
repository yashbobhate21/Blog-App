import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function Logoutbtn() {
    const dispatch = useDispatch()
    const logouthandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            alert("logged out")
        })
    }
    return (
        <button className= 'text-red-700 font-bold px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logouthandler}
        >Logout</button>
    )
}

export default Logoutbtn
