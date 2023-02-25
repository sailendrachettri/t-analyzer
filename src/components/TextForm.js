import React, { useState } from 'react';


export default function TextForm(props) {
    // STATE VARIABLES
    const [text, setText] = useState('');

    // VARIABLES AND CALCULATIONS
    let readingTime;
    readingTime = (text.split(" ").length - 1) * 0.008;
    readingTime = readingTime.toFixed(2);

    if (readingTime >= 1)
        readingTime = Math.ceil((text.split(" ").length - 1) * 0.008)


    // CSS STYLINGs
    let background_color = (props.mode === 'light' ? 'white' : '#181e24');
    let text_color = (props.mode === 'light' ? '#212529' : 'white');

    // FUNCTIONS
    const convertTextToUpperCase = () => {
        let txt = text.toLocaleUpperCase();
        setText(txt);
        props.showAlert("Your text is converted to uppercase", "success");
    }
    const clearText = () => {
        let txt = "";
        setText(txt);
        props.showAlert("Text area is empty!", "warning");
    }
    const convertTextToLowerCase = () => {
        let txt = text.toLocaleLowerCase();
        setText(txt);
        props.showAlert("Text converted to lowercase!", "success");
    }
    const extractEmail = () => {
        let email = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        setText(email.join('\n'));

    }
    const methodOnChange = (event) => {
        setText(event.target.value);
    }
    const copyText = () => {
        let txt = document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(text);
        setText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard!", "info");
    }
    const clearTextAreaBox = () => {
        setText("");
    }

    const removeExtraSpaces = () => {
        let txt = text.split(/[  ]+/);
        setText(txt.join(" "));
        props.showAlert("Extra spaces are removed!", "info");
    }

    return (
        <>
            <div className="container mb-3" style={{ color: (props.mode === 'dark') ? 'white' : 'black' }}>
                <div className="container">
                    <h3> Text Analyzer - Remove extra spaces, convert to uppercase, lower case</h3>

                    <div className="mb-2">
                        <label htmlFor="myBox" className="form-label text-secondary">Enter your text below to analyze</label>
                        <textarea className={`form-control`} id="myBox" rows="8" value={text} placeholder="Ctrl+V to paste or start typing..." onChange={methodOnChange} onFocus={clearTextAreaBox} style={{ backgroundColor: background_color, color: text_color }}></textarea>
                    </div>

                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={convertTextToUpperCase}>Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary" onClick={convertTextToLowerCase}>Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-outline-warning mx-1 my-1" onClick={clearText}>Clear</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary" onClick={copyText}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces </button>
                    <button disabled={text.length === 0} className="btn btn-outline-primary" onClick={extractEmail}>Extract Email </button>
                    {/* <button className="btn btn-outline-primary" onClick={pastePrevText}>Paste </button> */}
                </div>

                <div className="container mt-4">
                    <h4>Summary</h4>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words</p>
                    <p>{readingTime} {readingTime >= 1 ? "minutes to read" : "seconds to read"} </p>
                    <p>{text.length} characters (including spaces)</p>
                    <p>{text.replace(/ /g, '').length} characters (excluding spaces)</p>
                </div>

                <h3>Preview</h3>
                {(text.length <= 0) ? "Nothing to preview :(" : text}
            </div>
        </>
    )
}
