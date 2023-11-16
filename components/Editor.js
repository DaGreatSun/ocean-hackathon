import React, { useEffect, useState, useRef } from "react";

function Editor(props) {
  let editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {}; // if it don't find any document then it will be an empty object

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };

    setLoaded(true);
  }, []); // run on mounting

  const config = {
    // blockToolbar: [
    //     "fontSize",
    //     "paragraph",
    //     "heading1",
    //     "heading2",
    //     "|",
    //     "bulletedList",
    //     "numberedList",
    //   ],
    ckfinder: {
      // Upload the images to the server using the CKFinder QuickUpload command.
      uploadUrl:
        // 'https://localhost:44374/api/v1/announcements/upload-file?command=QuickUpload&type=Images&responseType=json'
        "https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json",
    },
    mediaEmbed: {
      previewsInData: true,
    },

    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },

    outerHeight: "500px",
  };

  if (loaded) {
    return (
      <CKEditor
        className={props.className}
        config={config}
        editor={ClassicEditor}
        data={props.value}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        // onChange={(event, editor) => {
        //   // do something when editor's content changed
        //   const data = editor.getData();
        //   console.log("Change.", data);
        // }}
        onChange={props.onChange}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    );
  } else {
    return <h2> Editor is loading </h2>;
  }
}

export default Editor;
