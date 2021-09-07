import React, { Component } from 'react'
import "./file.css"
export default class Todo extends Component {
    state = { selectedIds: [] }
    arrayRemove = (arr, value) => arr.filter(a => a !== value);
    handleClick = (e) => {
        let id = parseInt(e.target.dataset.id);
        if (this.state.selectedIds.includes(id)) {
            let res = this.arrayRemove(this.state.selectedIds, id);
            this.setState({ selectedIds: res });
        }
        else {
            let res = [...this.state.selectedIds, id];
            this.setState({ selectedIds: res });
        }
    }
    render() {
        let style1 = { backgroundColor: "green" };
        console.log("in render: " + this.state.selectedIds);
        return (
            <div>
                salam2<br />
                <div id="flexContainer1">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(a => (
                        <div data-id={a} className="MyClass" style={this.state.selectedIds.includes(a) ? style1 : null} onClick={this.handleClick}></div>
                    ))}
                </div>
            </div>
        )
    }
}
