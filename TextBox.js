import React,{Component} from 'react'

import Navbar from './Navbar'
export default class TextBox extends Component {

    constructor(props){
        super(props)
        this.state={
            text:'Enter somthing'

            }
        }
    changeText=(event)=>
    {
        this.setState({
           text:event.target.value
        })
    }

    changeTextUpperCase=()=>
    {
        this.setState({
            text:this.state.text.toUpperCase()
        })
    }

    changeTextLowerCase=()=>
    {
        this.setState({
            text:this.state.text.toLowerCase()
        })
    }
  render() {
    return (
      <div>
            <Navbar brand="TextBox"/>
            <h3> Enter your text below</h3>
            <textarea rows={10} value={this.state.text} onChange={this.changeText}></textarea>
            <br/>
            <button onClick={this.changeTextUpperCase}>UpperCase</button>
            <button onClick={this.changeTextLowerCase}>LowerCase</button>
            <br></br>
            <h5> text has {this.state.text.split(' ').length} words and {this.state.text.length}</h5>
            <h4>Preview</h4>
            <p>{this.state.text}</p>

      </div>
    )
  }
}
