import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked " + text);
        let trimmedText = text.trim().replace(/\s+/g, ' ');           // Removes leading/trailing whitespace and extra spaces between words.
        let newText = trimmedText.toUpperCase();
        setText(newText);                                               // Changes/set the value of "text" state variable with newText.
    }

    const handleLowClick = () =>{
        let trimmedText = text.trim().replace(/\s+/g, ' ');           
        let newText = trimmedText.toLowerCase();
        setText(newText); 
    }

    const handleClearClick = () =>{
        setText(""); 
    }

    const handleCapClick = () =>{
        let trimmedText = text.trim().replace(/\s+/g, ' ');           
        let newText = trimmedText.split(". ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        setText(newText.join(". ")); 
    }

    const handleOnChange = (event) =>{
        // console.log("OnChange");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');

    return (
        <>
            <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h3>{props.heading}</h3>
                <div className="my-3"> 
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleCapClick}>Capitalize</button>
            </div>
            <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h6>Note:- Use a fullstop followed by a single space after end of each sentence.</h6>
                <h2>Your text summary: </h2>
                <h5>Words: {text.split(" ").length}</h5>
                <h5>Characters: {text.length}</h5>
            </div>
        </>
  )
}
