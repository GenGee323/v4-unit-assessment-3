import React from 'react';

const Shelf = props => {
    let mappedTitles = props.shelf.map ((e, i) => {
        return (
            <span key = {i}>{e}</span>
        )
    })
    mappedTitles.unshift(<button onClick={() => props.clearShelf()}> clear shelf </button>)
    return mappedTitles
}

export default Shelf;