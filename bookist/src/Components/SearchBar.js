import React, {Component} from 'react';

class Searchbar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <input className="handle-change" onChange={(e) => {this.props.updateInput(e)}} id="inputLabel"></input>
                <button className="handle-click" onClick={() => {this.props.filterBooks(this.props.input)}}>Search</button>
                <button className="handle-clear" onClick={() => {this.props.clearSearch()}}>Clear Search</button>
            </div>
        )
    }
}

export default Searchbar