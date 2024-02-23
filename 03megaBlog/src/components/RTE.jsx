import React from 'react'
import{Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'


function RTE({name, control, label, defaultValue = ""}) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'></label>}

      <Controller
        name = {name || "content"}
        control={control}
        render={({field: {onChange}})=> (
          <Editor
          apiKey='c395paraunmx9lm4o237g3xd20nps1vo6b4p6ue1co1rd0cs'
        initialValue={defaultValue}
        init={{
          ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />
    </div>
  )
}

export default RTE