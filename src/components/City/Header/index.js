import React from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../../contexts/AuthContext'

const style = {
    city: {
        fontSize: '50px'
    },
    country: {
        fontSize: '20px'
    }
}
const Header = ({city}) => {
    const {loggedIn} = React.useContext(AuthContext);
    return (
        <div className="d-flex p-3 bg-dark my-2 rounded">
            <div className="text-white">
                <p style={style.city}>{city.name}</p>
                <p style={style.country}>{city.country.name}</p>
            </div>
            {
                (loggedIn)?(
                <div className="mt-4 ml-auto">
                    <Link className='btn btn-dark' to={`/create/blog/${city.id}`}>Create Blog</Link>
                </div>):null
            }
            
        </div>
    )
}

export default Header