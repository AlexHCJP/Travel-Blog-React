import React from 'react'
import Comment from './Comment'

function CommentList({comments}){
    if(comments)return(
        <ul className="p-0">
            {comments.map((comment, ind) => {
                return <Comment key={ind} {...comment}/>
            })}
        </ul>
    )
    else return null;
}

export default CommentList