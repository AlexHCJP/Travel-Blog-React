import React from 'react'
export default function parserBlog(data){
    const elements = []
    data.blocks.forEach((block, ind) => {
        elements.push(switchBlocks(block, ind))
    })
    return <div>{elements}</div>;
}

function switchBlocks(block, ind) {
    switch (block.type) {
        case 'paragraph': {
            return <p key={ind}>{block.data.text}</p>
        }
        case 'header': {
            return React.createElement(`h${block.data.level}`,{key: ind} ,block.data.text )
        }
        case 'list': {
            const elements = []
            block.data.items.forEach((li, indLi)=>{
                elements.push(<li key={indLi}>{li}</li>)
            })
            return <ul key={ind}>{elements}</ul>
        }
        case 'image': {
            return <img key={ind} src={block.data.file.url}/>
        }
    }
}