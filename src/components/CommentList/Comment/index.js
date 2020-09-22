import React from 'react'
import { Link } from 'react-router-dom'
import dateformat from 'dateformat'
function Comment({user_id, text, created_at, user}){
    return(
        <div className='bg-white mt-2 p-2 rounded border border-secondary'>
            <div className='d-flex'>
                <Link to={`/user/${user_id}`}>{user.name}</Link>
                <p className='ml-auto text-muted'>{dateformat(created_at, 'longDate')}</p>
            </div> 
            
            <p>{text}</p>
        </div>
    )
}
export default Comment