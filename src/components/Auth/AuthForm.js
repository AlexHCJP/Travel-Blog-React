import React from 'react'
import Axios from 'axios'
import AuthContext from '../../contexts/AuthContext'

export default function Authform({role, history}){

    const {setLoggedIn} = React.useContext(AuthContext);
    const [authInfo, setAuthInfo] = React.useState({
        name: '',
        email: '',
        password: ''
    })
    const url = `http://trvel/api/${role}`
    const handleChange = ev => {
        setAuthInfo ({
            ...authInfo,
            [ ev.target.name ]: ev.target.value
        })
    }

    const handleSumbit = ev => {
        ev.preventDefault()
        Axios.post(url, authInfo)
            .then(res => {
                    localStorage.setItem('token', res.data.token)
                    setLoggedIn(true);
                    history.push('/')
                })
            .catch(err => console.log(err))
        
    }
    return (
        <div className="text-center">
            <h1>{role}</h1>
            <form onSubmit={handleSumbit}>
                {
                    (role === 'register')?(
                        <input
                            name="name"
                            value={authInfo.name}
                            onChange={handleChange}
                            placeholder='Name'/>
                    ):null
                }
                
                <input
                    name="email"
                    value={authInfo.email}
                    onChange={handleChange}
                    placeholder='Email'/>
                <input
                    name="password"
                    type="password"
                    value={authInfo.password}
                    onChange={handleChange}
                    placeholder='Password'/>
                <button className="btn btn-dark" type="submit">Send</button>
            </form>
        </div>
    )
}