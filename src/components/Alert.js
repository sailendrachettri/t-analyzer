import React from 'react'

function Alert(props) {

    const firstAlphabetCaptialize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{ height: '55px' }}>
            {props.alert && /* this and operator with below html text comparison */
                <div className="container">
                    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                        <strong>{firstAlphabetCaptialize(props.alert.type)}! </strong> : {props.alert.msg}
                    </div>
                </div>}
        </div>
    )
}

export default Alert