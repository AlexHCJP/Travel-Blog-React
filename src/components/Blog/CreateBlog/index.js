import React from 'react'
import AxiosTrvel from '../../../utils/AxiosTrvel';
import Editor from '../Editor';

const CreateBlog = ({id, guardAuth, toHome}) => {
    const [blog, setBlog] = React.useState({
        title: '',
        description: ''
    });
    const handleChange = ev => {
        setBlog ({
            ...blog,
            [ ev.target.name ]: ev.target.value
        })
    }
    const createBlog = (editor) => {
        editor.save().then((data => {
            AxiosTrvel('blog', {
                ...blog,
                city_id: id,
                body: JSON.stringify(data)
            }, 'POST', toHome, guardAuth)
        }))
    }
    return(
        <div className="mt-3 text-center">
            <div className="form-group">
                <input className="form-control" 
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}/>
            </div>
            <div className="form-group">
                <textarea className="form-control"
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}/>
            </div>
            
            
            <Editor callback={createBlog}/>
            
        </div>
    )
}

export default CreateBlog