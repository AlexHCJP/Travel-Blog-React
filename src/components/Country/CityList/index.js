import React from 'react'
import City from './City';

const CityList = ({cities}) => {
    return (
        <div className="card-body row">
            {cities.map((city, ind)=>{
                return <City key={ind} {...city}/>;
            })}
        </div>
    )
}
export default CityList