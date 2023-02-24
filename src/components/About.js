export default function About(props) {
    // VARIABLES DECLARATIONS AND INITIALIZATIONS
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#181e24',
        backgroundColor: props.mode === 'dark' ? '#181e24' : 'white'
    }
    return (
        <>
            <div className="container my-4" style={myStyle}>
                <h3>About Tanalyzer</h3>
                <p>A text Analyzer that helps user to convert to there text to upper case, lower case, count number of words characters with spaces or without spaces etc.</p>

            </div>
        </>
    )
}
