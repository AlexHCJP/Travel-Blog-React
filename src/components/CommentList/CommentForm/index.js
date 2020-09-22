import React from 'react'
import AuthContext from '../../../contexts/AuthContext'
import AxiosTrvelPost from '../../../utils/AxiosTrvel'

const style = {
    textarea:{
        resize: 'none'
    },
    button:{
        width: '150px'
    }
}
const CommentForm = ({blog_id, addComment}) => {
    const {loggedIn} = React.useContext(AuthContext)
    const textRef = React.createRef();
    const handleSubmit = ev => {
        ev.preventDefault()
        AxiosTrvelPost('comment', {
            blog_id,
            text: textRef.current.value
        }, 'POST', addComment)
        textRef.current.value = ''
    }
    return (
        (loggedIn)?
        (
            <form onSubmit={handleSubmit} className='d-flex flex-column'>
                <textarea className='form-control' style={style.textarea} ref={textRef}/>
                <button className='btn btn-dark ml-auto m-2' style={style.button}>Send</button>
            </form>
        ):null
    )
}
export default CommentForm