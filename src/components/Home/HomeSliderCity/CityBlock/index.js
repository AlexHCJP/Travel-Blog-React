import React from 'react'
import { Link } from 'react-router-dom';

const style = {
    city: {
        fontSize: '65px',
        textDecoration: 'none'
    },
    country: {
        fontSize: '15px',
    }
}
const CityBlock = ({id, name, country}) => {
    return (
        <div className="border shadow rounded text-center ">
            <div className="p-4 text-muted">
                <Link to={`/city/${id}`} style={style.city}>{name}</Link>
                <p style={style.country}>{country.name}</p>
            </div>
        </div>
    )
}

export default CityBlock;