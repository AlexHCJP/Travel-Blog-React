import React from 'react'

const text = {
    fontSize: '25px'
}
const Header = ({name}) => {
    return (
        <div className="card-header bg-dark">
            <p className="text-white" style={text}>{name}</p>
        </div>
    )
}
export default Header