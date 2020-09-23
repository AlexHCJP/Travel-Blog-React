import React from 'react'
import Axios from 'axios'
import Loader from '../Loader'
import CommentList from '../CommentList'

import parserBlog from '../Editor/parserBlog'
import { Link } from 'react-router-dom'
import CommentForm from '../CommentList/CommentForm'


class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            blog : null,
            user : null,
            comments: null,
        }
        this.axiosData = this.axiosData.bind(this)
        this.setBlog = this.setData.bind(this)
        this.addComment = this.addComment.bind(this)
    }
    
    componentDidMount(){
        this.axiosData()
    }
    setData(data){
        this.setState({blog: data.blog, comments: data.comments, user: data.user[0]})
    }
    axiosData(){
        Axios(`http://trvel/api/blog/${this.props.id}`)
            .then(result => this.setData(result.data));
    }
    addComment(comment){
        const {comments} = this.state;
        comment.user = comment.user[0];
        this.setState({comments: [comment , ...comments ]})
    }
    render(){
        
        const {blog, comments, user} = this.state
        
        if(blog && user) 
        return (
            <div className='card'>
                <div className='card-body pl-5'>
                    <div className="d-flex">
                        <Link to={`/user/${user.id}`} className='ml-auto mr-5'>
                            <p>{user.name}</p>
                        </Link>
                    </div>
                    <h1 className="card-title">{blog.title}</h1>
                    <h4 className="card-title">{blog.description}</h4>
                    {parserBlog(JSON.parse(blog.body))}
                </div>
                <div className='card-footer'>
                    <CommentForm blog_id={blog.id} addComment={this.addComment}/>
                    <CommentList comments={comments}/>
                </div>
            </div>
        )
        else return <Loader/>
    }
}

export default Blog