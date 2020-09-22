import React from 'react'
import dateformat from 'dateformat'
import { Link } from 'react-router-dom'
const Blog = ({id, title, description, created_at}) => {
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <p className="card-text">{title}</p>
                    <p className="card-text">{description}</p>
                    <div className="d-flex">
                        <div className="btn-group">
                            <Link to={`/blog/${id}`} className="btn btn-sm btn-outline-secondary">View</Link>
                        </div>  
                        <small className="text-muted  ml-auto">{dateformat(created_at, '')}</small>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Blog