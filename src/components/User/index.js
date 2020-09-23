import React from 'react'
import Axios from 'axios'
import Loader from '../Loader'
import Card from '../Card'
import UserHeader from './UserHeader'




class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            blogs: null,
            user: null,
        }
        this._isMounted = false
        this.comment = React.createRef()
        this.setData = this.setData.bind(this)
        this.axiosData = this.axiosData.bind(this)
    }
    componentDidMount(){
        this._isMounted = true
        this.axiosData()
    }
    componentDidUpdate(){
        this._isMounted = false
    }
    axiosData(){
        Axios(`http://trvel/api/user/${this.props.id}`)
            .then(result => this._isMounted && this.setData(result.data))
    }
    setData(data){
        this.setState({blogs: data['blogs'], user: data['user']})
    }
    render(){
        const {blogs, user} = this.state
        if(blogs && user) return(
            <div className = 'card'>                
                <UserHeader {...user}/>
                <div className = 'card-body'>
                    <div className="row">
                        {blogs.map((blog, ind)=>{
                            return <Card key = {ind} {...blog} to = {`/blog/${blog.id}`} className="col-12 my-2"/>
                        })}
                    </div>
                </div>
                
            </div>
        )
        else return <Loader/>
    }
}

export default User