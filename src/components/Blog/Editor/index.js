import React from 'react'
import EditorJsContainer from 'react-editor-js'
import { EDITOR_JS_TOOLS } from '../../Editor/tools'

const Editor = ({callback, data}) => {
    const editorInstance = React.useRef();
    return (
        <div>
            <EditorJsContainer instanceRef={instance => (editorInstance.current = instance)} tools={EDITOR_JS_TOOLS} data={(data)?JSON.parse(data):''}/>
            <div className="d-flex">
                <button className="btn btn-dark ml-auto" onClick={()=>{callback(editorInstance.current)}}>Create</button>
            </div>
        </div>
        
    )
}
export default Editor