import React, { Component,useState,useEffect} from 'react';
import { Skeleton, TreeView, TreeItem, Rating } from "material-ui/lab" ;
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

const editorConfiguration = {
  plugins: [ Essentials, Bold, Italic, Paragraph ],
  toolbar: [ 'bold', 'italic' ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Using CKEditor 5 from source in React</h2>
        <WYSIWYG Editor
          editor={ ClassicEditor }
          config={ editorConfiguration }
          data="<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>"
          data="<p>	Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.</p>" 
          onInit={ editor => {
            console.log( 'Editor is ready to use!', editor );
          } }
          function App() {
		  const [loading, setLoading] = useState(true);
		  const [rating, setRating] = useState(3);
		  
		  useEffect(()= {
          setTimeout(()= {
            //api
             setLoading(false);
             },5000);
             },[]);
             
             return (
             <div>
             {loading ? <Skeleton width={400} height={200} /> : <div>Done!</div>
             <TreeView>
              <TreeItem label="Hamburger Menu" collapseIcon={<h5>hi</h5>} expandIcon={<h5>hey</h5>}>
                <TreeItem label="Collection 1.1" />
				  <TreeItem label="Item render" />
				    <TreeItem label="Graph view" />
                      <TreeItem label="Controls" />					
              </TreeItem>
              <TreeItem label="Collection 1.1.1" />
			    <TreeItem label="Hierarchical view" />
				  <TreeItem label="Current active item" />
				    <TreeItem label="Edit" />
					  <TreeItem label="Format" />
			  </TreeItem>
              <TreeItem label="Collection 1.1.1.1" />
                <TreeItem label="Add" />
                  <TreeItem label="Invite" />   				  `
              </TreeView>
             <Rating value={rating} precision={0.5} onChange={(e,value)= setRating(value)} />			 
		} }
        />
      </div>
    );
  }
}

export default App;