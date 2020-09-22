import React from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import Axios from 'axios'

function Menu({guardAuth}){
    const {loggedIn, setLoggedIn} = React.useContext(AuthContext)

    const logout = () =>{
        const token = localStorage.getItem('token')
        setLoggedIn(false)
        Axios({
            url: 'http://trvel/api/logout',
            method: 'POST',
            headers: {
                authorization: 'bearer ' + token
            }
        }).then(res => {
            localStorage.removeItem('token')
            guardAuth();
        })
        
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to='/'>Travelcom</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                {
                    (!loggedIn)?
                    (<ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/country'>Countries</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/register'>Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/login'>Login</Link>
                        </li>
                    </ul>):
                    (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/country'>Countries</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/me'>Me</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={logout}>Logout</a>
                            </li>

                        </ul>
                    )
                }
                
            </div>
        </nav>
    )
}

export default Menu