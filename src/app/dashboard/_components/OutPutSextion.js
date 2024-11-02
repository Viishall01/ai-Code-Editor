import { Editor } from '@toast-ui/react-editor';
import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

const OutPutSextion = ({aiOutput}) => {
    const editorRef = useRef();

  useEffect(()=>{
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput])
  return (
    <div className='m-2'>
    <div className=''>
           <Editor
            placeholder='hello!.. From @Viishall.01'
            ref={editorRef}
            initialValue="hello ! from @viishall.01"
            previewStyle="vertical"
            height="430px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}/>
            {/* <div className='bg-black text-white'>{aiOutput}</div> */}
            
    </div>
    </div>
  )
}

export default OutPutSextion