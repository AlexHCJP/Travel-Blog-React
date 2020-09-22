import React from 'react'
import AxiosTrvel from '../../utils/AxiosTrvel'
import Loader from '../Loader'
import Country from './Country'


class CountryList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            countries: null
        }
        this.axiosCountry = this.axiosCountry.bind(this)
        this.setData = this.setData.bind(this)
    }
    axiosCountry(){
        AxiosTrvel(`country`, null, 'GET', this.setData, console.log)
    }
    setData(countries){
        this.setState({countries})
    }
    componentDidMount(){
        this.axiosCountry()
    }
    render(){
        const {countries} = this.state
        if(countries) return (
            <div className="row">
                {countries.map((country, ind)=>{
                    return <Country key={ind} {...country}/>
                })}
            </div>
        )
        else return <Loader/>
    }
}

export default CountryList