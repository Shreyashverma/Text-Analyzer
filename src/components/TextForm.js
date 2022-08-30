import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase !", "success");
    }

    const handleDownClick = () => {
        
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase !", "success");
    }
    
    const handleClear = () => {
        
        let newText = ' ';
        setText(newText)
        props.showAlert("Cleared the text !", "success");
    }

    const handleFirstLetter = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Converted First letter of every word to uppercase !", "success");
      };

      const replaceString=()=>{
        let repval=prompt("Enter the word to be replaced:")
        let tobereplaced= new RegExp(repval,'g');
  
        let toreplace=prompt("Enter the text that you want to replace with:");
        
        let newText= text.replace(tobereplaced,toreplace);
        setText(newText);
        props.showAlert("Replaced the targeted word !", "success");
      }

      const handleCopy =() => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard !", "success");
      }

      const handleExtraSpaces =() => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces !", "success");
      }

    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value);
    }

    
    const [text, setText] = useState('');
  

    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">


                    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor : props.mode==='light'?'white':'rgba(255, 255, 255, 0.55)', color: props.mode==='dark'?'white':'black' }} onChange={handleOnChange} placeholder="Input Text here" rows="8" />
                    
                   
                    
                
                </div>
                <div className='container' justify-content="space-between">
                    <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
                    <button className="btn btn-danger mx-2" onClick={handleDownClick} >Convert to LowerCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleClear} >Clear Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleFirstLetter} >First letter capital</button>
                    <button className="btn btn-primary mx-2" onClick={replaceString} >Replace</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy to clipboard</button>
                    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove extra spaces</button>
                  

                </div>
            </div>
            <div>

            </div>
            <div className="container my-3" style={{backgroundColor : props.mode==='light'?'white':'grey' }}>
                <h1>Text Summary</h1>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>

                <h2>Preview</h2>
                <div style={{backgroundColor : props.mode==='light'?'white':'grey',color: props.mode==='dark'?'white':'black' }}>
                <p>{text.length>0?text:"Enter something in the textbox to prevview it here"}</p>
                </div>
            </div>
        </>
    );
} 
