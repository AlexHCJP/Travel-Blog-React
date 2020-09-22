import React from 'react'
function UserHeader({name}){
    return(
        <div className='card-header'>
            <div className='d-flex'>
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default UserHeader