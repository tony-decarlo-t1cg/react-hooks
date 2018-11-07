import React, { Component } from 'react';

export default class NoHooks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'No Hooks',
            width: window.innerWidth
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        document.title = this.state.name;
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate() {
        document.title = this.state.name;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
        this.setState({
            width: window.innerWidth
        });
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    setCount() {
        this.setState({count: this.state.count+1});
    }

render() {
    return (
        <div>
            <input
            value={this.state.name}
            onChange={this.handleNameChange}
            />
            <p>Width: {this.state.width}</p>
        </div>
        )
    }
}