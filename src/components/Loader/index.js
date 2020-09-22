import React from 'react'
import './index.css';
export default function Loader(){
    return(
        <div className="d-flex justify-content-center">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div> 
    )
}