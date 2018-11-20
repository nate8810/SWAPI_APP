import React from 'react'

const Suggestions = (props) => {
    const options = props.results.map(r => (
        <li key={r.id}>
            {r.name}
        </li>
    ))
    return <div className="results">
        <ul>{options}</ul>
    </div>
}

export default Suggestions