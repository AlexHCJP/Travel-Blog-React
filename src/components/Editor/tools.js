import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";

export const EDITOR_JS_TOOLS = {
    paragraph: Paragraph,
    list: List,
    image: {
        class: Image,
        config: {
          endpoints: {
            byFile: 'http://trvel/api/uploadImage', // Your backend file uploader endpoint
          }
        }
      },
    header: Header,
    delimiter: Delimiter,
    
}