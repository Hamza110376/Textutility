import React, { useState } from "react";

function TextForm(props) {
  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    console.log("Button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "Success")
  };
  const handleLoClick = () => {
    console.log("Button clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "Success")
  };
  const clearText = () => {
    console.log("Button clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "Success")
  };
  const copyText = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
    props.showAlert("Text copied", "Success")
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="container" style={{color: props.mode==='dark'?'white':'grey'}}>
          <h1 className="mb-4">{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{backgroundColour: props.mode==='dark'? 'grey': 'white', backgroundColor:props.mode=== 'dark'?'grey': 'white'}}
              id="myBox"
              rows={8}
            />
          </div>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button id="lowercase" className="btn btn-primary mx-2 my-3" onClick={handleLoClick}>
          convert to lowercase
        </button>
        <button id="cleartext" className="btn btn-primary mx-2 my-3" onClick={clearText}>
          clear text
        </button>
        <button id="copytext" className="btn btn-primary mx-2 my-3" onClick={copyText}>
          copy text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'grey'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h3 >Preview</h3>
        <div className="card" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
  <div class="card-body">
    <p>{text}</p>
  </div>
</div>
      </div>
    </>
  );
}

export default TextForm;
