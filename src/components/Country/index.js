import React from 'react'
import AxiosTrvel from '../../utils/AxiosTrvel'
import Loader from '../Loader'
import Header from './Header'
import CityList from './CityList'

class Country extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            country: null,
            cities: null
        }
        this.axiosCountry = this.axiosCountry.bind(this)
        this.setData = this.setData.bind(this)
    }
    axiosCountry(){
        AxiosTrvel(`country/${this.props.id}`, null, 'GET', this.setData, console.log)
    }
    setData(data){
        this.setState({country: data.country, cities: data.cities})
        console.log(data)
    }
    componentDidMount(){
        this.axiosCountry()
    }
    render(){
        const {country, cities} = this.state
        if(country && cities) return (
            <div className="card">
                <Header name={country.name}/>
                <CityList cities={cities}/>
            </div>
        )
        else return <Loader/>
    }
}

export default Country