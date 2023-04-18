import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+text)
        let newText =text.toUpperCase();
        setText(newText )
    }

    const handleLOWClick = ()=>{
      console.log("Lowercase was clicked"+text)
      let newText2 =text.toLowerCase();
      setText(newText2 )
    }  
    const handleClrClick = ()=>{
      console.log("clr was clicked"+text)
      let newText2 ="";
      setText(newText2 )
    } 
    const handleUndoClick = ()=>{
     
        // Get the text field
        var text = document.getElementById("exampleFormControlTextarea1");
      
        // Select the text field
        text.select();
        text.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(text.value);
      
       
      
  } 
  const handleRemoveClick = ()=> {
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
} 

    const handleOnChange = (event)=>{
        setText(event.target.value)
        console.log("On chnage ")
    }

    
    const [text, setText] = useState("");
    return (
      <>
      <div className='container' style = {{color:props.mode ==='light'?'#1c456b':'white'}}>
        <h1>{props.heading} </h1>
        
    <div className="mb-3">
   
    <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode ==='light'?'white':'black'
    ,color:props.mode ==='light'?'#1c456b':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>

    <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to  upper case </button>
    <button className="btn btn-primary mx-2" onClick={handleLOWClick}> Convert to lower case </button>
    <button className="btn btn-primary mx-2" onClick={handleClrClick}>  clear text </button>
    <button className="btn btn-primary mx-2" onClick={handleUndoClick}>  copy Text </button>
    <button className="btn btn-primary mx-2" onClick={handleRemoveClick}>  Remove Extra spaces </button>
</div>

<div className="container" style = {{color:props.mode ==='light'?'#1c456b':'white'}} >
      <h1>your text sumarry</h1>
      <p>{text.trim() ==="" ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
      {/* <p className="">{ text.split(" ").length-1} words {text.length} characters</p> */}
      <p> {0.008*text.split(" ").length} minuts to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text :"enter text to preview something"}</p>

      

    </div>
    </>
  )
}
