import React from 'react'
import EditorJsContainer from 'react-editor-js'
import {EDITOR_JS_TOOLS} from '../../Editor/tools'
import AxiosTrvel from '../../../utils/AxiosTrvel';

const CreateBlog = ({id, guardAuth, toHome}) => {
    const editorInstance = React.useRef(null);
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
    const createBlog = () => {
        editorInstance.current.save().then((data => {
            AxiosTrvel('blog', {
                ...blog,
                city_id: id,
                body: JSON.stringify(data.blocks)
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
            
            
            <EditorJsContainer instanceRef={instance => (editorInstance.current = instance)} tools={EDITOR_JS_TOOLS}/>
            <div className="d-flex">
                <button className="btn btn-dark ml-auto" onClick={createBlog}>Create</button>
            </div>
            
        </div>
    )
}

export default CreateBlog