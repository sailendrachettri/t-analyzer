import React, { useState } from 'react'


export default function About() {

    const [btnText, setBtnText] = useState("Enable dark mode");

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    let toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable dark mode");
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable light mode");
        }
    }


    return (
        <>
            <div className="container my-4" style={myStyle}>
                <h3>About Tanalyzer</h3>
                <p>A text Analyzer that helps user to convert to there text to upper case, lower case, count number of words characters with spaces or without spaces etc.</p>
            </div>

            <div className="container">
                <button className="btn btn-outline-primary" onClick={toggleStyle}>{btnText}</button>
            </div>
        </>
    )
}
