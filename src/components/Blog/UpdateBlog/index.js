import React from 'react'
import Editor from '../Editor'
import AxiosTrvel from '../../../utils/AxiosTrvel'
import Loader from '../../Loader'


class UpdateBlog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: null,
            description: null,
            data: null
        }
        this.updateBlog = this.updateBlog.bind(this)
        this.axiosBlog = this.axiosBlog.bind(this)
        this.setData = this.setData.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    updateBlog(editor){
        const {title, description} = this.state
        const {guardAuth, toHome} = this.props
        editor.save().then((res => {
            AxiosTrvel(`blog/${this.props.id}`, {
                title,
                description,
                body: JSON.stringify(res),
            }, 'PUT', toHome, guardAuth)
        }))
    }
    handleChange = ev => {
        this.setState ({
            [ ev.target.name ]: ev.target.value
        })
    }
    componentDidMount(){
        this.axiosBlog()
    }
    axiosBlog(){
        AxiosTrvel(`blog/${this.props.id}/edit`, null, 'GET', this.setData)
    }
    setData(data){
        this.setState({data, title: data.title, description: data.description})
    }
    render(){
        const {data} = this.state
        if(data)return (
            <div>
                <div className="form-group">
                    <input className="form-control" 
                        name="title"
                        placeholder="Title"
                        onChange={this.handleChange} value={data.title}/>
                </div>
                <div className="form-group">
                    <textarea className="form-control"
                        name="description"
                        placeholder="Description"
                        onChange={this.handleChange} value={data.description}/>
                </div>
                <Editor callback={this.updateBlog} data={data.body}/>
            </div>
        )
        else return <Loader/>
    }
}
export default UpdateBlog