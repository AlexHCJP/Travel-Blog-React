import React from 'react'
import AxiosTrvel from '../../utils/AxiosTrvel'
import UserHeader from '../User/UserHeader'
import Loader from '../Loader'
import BlogList from '../BlogList'

class Me extends React.Component{
    constructor(props){
        super(props)
        this.setData = this.setData.bind(this)
        this.axiosMe = this.axiosMe.bind(this)
        this.state = {
            user: null,
            blogs: null
        }
    }
    componentDidMount(){
        this.axiosMe()
    }
    axiosMe(){
        AxiosTrvel('me', null, 'GET', this.setData)
    }
    setData(data){
        this.setState({blogs: data['blogs'], user: data['user']})
    }
    render(){
        const {user, blogs} = this.state
        if(user && blogs){return (
            <div className="card">
                <UserHeader {...user}/>
                <div className="card-body">
                    <BlogList blogs={blogs}/>
                </div>
            </div>
        )}else return <Loader/>
    }
}
export default Me