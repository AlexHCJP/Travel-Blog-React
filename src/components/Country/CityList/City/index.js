import React from 'react'
import { Link } from 'react-router-dom'

const City = ({name, id}) => {
return (
        <div className="rounded col-md-6">
            <div className="card m-1">
                <div className="card-body">
                    <Link to={`/city/${id}`}>{name}</Link>
                </div>
            </div>
                   
        </div>
        
    )
}

export default City