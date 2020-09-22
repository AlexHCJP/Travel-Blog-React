import React from 'react'
import { Link } from 'react-router-dom'

const style={
    country: {
        fontSize: '30px'
    }
}
const Country = ({id, name}) => {
    return (
        <div className="col-12">
            <div className="card m-1">
                <div className="card-body text-center">
                    <Link style={style.country} to={`/country/${id}`}>{name}</Link>
                </div>
            </div>
        </div>
    )
}

export default Country