import React from 'react'

export default function History(props) {
    return (
        <div>
            <ul>
                {props.history.map((item, index) => <div key={index}>{item}</div>)}
            </ul>
        </div>
    )
}
