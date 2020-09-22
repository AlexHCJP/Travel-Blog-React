import React from 'react'
import AxiosTrvel from '../../utils/AxiosTrvel'
import BlogList from '../BlogList';
import Loader from '../Loader';
import Header from './Header';

class City extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
        this.axiosCity = this.axiosCity.bind(this);
        this.setData = this.setData.bind(this);
    }
    componentDidMount(){
        this.axiosCity();
    }
    axiosCity(){
        AxiosTrvel(`city/${this.props.id}`, null, 'GET', this.setData)
    }
    setData(data){
        this.setState({data})
    }
    render(){
        const {data} = this.state
        if(data){
        return (
            <div>
                <Header city={data.city}/>
                <BlogList blogs={data.blogs}/>
            </div>
        )}else return <Loader/>
    }
}
export default City