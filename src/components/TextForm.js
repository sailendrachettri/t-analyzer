import React, { useState } from 'react';


export default function TextForm(props) {
    // STATE VARIABLES
    const [text, setText] = useState('Type your text / Ctrl + V to paste');

    // CSS STYLINGs
    let background_color = (props.mode === 'light' ? 'white' : '#181e24');
    let text_color = (props.mode === 'light' ? '#212529' : 'white');

    // FUNCTIONS
    const convertTextToUpperCase = () => {
        let txt = text.toLocaleUpperCase();
        setText(txt);
    }
    const clearText = () => {
        let txt = "";
        setText(txt);
    }
    const convertTextToLowerCase = () => {
        let txt = text.toLocaleLowerCase();
        setText(txt);
    }
    const methodOnChange = (event) => {
        setText(event.target.value);
    }
    const copyText = () => {
        let txt = document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(text);
        setText(text);
    }
    const clearTextAreaBox = () => {
        setText("");
    }

    const removeExtraSpaces = () => {
        let txt = text.split(/[  ]+/);
        setText(txt.join(" "));
    }



    return (
        <>
            <div className="container" style={{ color: (props.mode === 'dark') ? 'white' : 'black' }}>
                <div className="container mt-4">
                    <h2> Text Analyzer</h2>

                    <div className="mb-2">
                        <label htmlFor="myBox" className="form-label text-secondary">Enter your text below to analyze</label>
                        <textarea className={`form-control`} id="myBox" rows="8" value={text} onChange={methodOnChange} onFocus={clearTextAreaBox} style={{ backgroundColor: background_color, color: text_color }}></textarea>
                    </div>

                    <button className="btn btn-outline-primary mx-1" onClick={convertTextToUpperCase}>Uppercase</button>
                    <button className="btn btn-outline-primary" onClick={convertTextToLowerCase}>Lowercase</button>
                    <button className="btn btn-outline-danger mx-1" onClick={clearText}>Clear</button>
                    <button className="btn btn-outline-primary" onClick={copyText}>Copy Text</button>
                    <button className="btn btn-outline-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces </button>
                </div>

                <div className="container mt-4">
                    <h4>Summary</h4>
                    <p>{text.split(" ").length - 1} words</p>
                    <p>{text.length} characters (including spaces)</p>
                    <p>{text.replace(/ /g, '').length} characters (excluding spaces)</p>
                    <p>Reading time: {Math.ceil((text.split(" ").length - 1) * 0.008)} min </p>
                </div>
            </div>
        </>
    )
}
