import React from 'react'
import Axios from 'axios'
import BlogList from '../BlogList'
import HomeSliderCity from './HomeSliderCity'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
        this._isMounted = false
        this.axiosData = this.axiosData.bind(this)
        this.setData = this.setData.bind(this)
    }
    componentDidMount(){
        this._isMounted = true
        this.axiosData()
    }
    componentDidUpdate(){
        this._isMounted = false
    }
    axiosData(){
        Axios('http://trvel/api/home')
            .then(result => this._isMounted && this.setData(result.data))
            .catch(err => console.log(err))
    }
    setData(data){
        this.setState({data})
    }
    render(){
        const {data} = this.state;
        if(data)return (
            <div>
                <BlogList blogs={data.blogs}/>
                <HomeSliderCity cities={data.cities}/>
            </div>
        )
        else return null
    }
}
export default Home