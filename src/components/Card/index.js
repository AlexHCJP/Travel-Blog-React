import React from 'react'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'

const style = {
    header:{
        height: '50px'
    },
    body:{
        height: '100px'
    }
}
function Card({title, description, created_at, to, className}){
    return(
        <div className={className}>
            <div className='card'>
                <div className='card-header p-2' style={style.header}>
                    <h5 className='card-title'>{title}</h5>
                </div>
                <div className='card-body p-2' style={style.body}>
                    <p>{description}</p>
                    <div className='d-flex'>
                        <Link to={to} className="btn btn-dark">Read more...</Link>
                        <p className='text-muted ml-auto'>{dateFormat(created_at, 'dd mmm yyyy')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card