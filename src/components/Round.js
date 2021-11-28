import React, { Component } from 'react'

export default class Round extends Component {
    render() {
        return (
            <div className="round" style={{background:this.props.background, height:this.props.height,width:this.props.width,}}>
                {this.props.icon}
            </div>
        )
    }
}
