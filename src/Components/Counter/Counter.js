import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state ={
            counter:0,
            positiveClicks: 0,
            negativeClicks: 0
        }
    }
    componentDidMount(){
        if (localStorage.getItem('state')) {
            const LocalState = JSON.parse(localStorage.getItem('state'))
            this.setState(LocalState)
        }
    }
    componentWillUnmount(){
        localStorage.setItem('state',JSON.stringify(this.state))
    }
    componentDidUpdate(prevProps,prevState){
        if (prevState != this.state) {
            localStorage.setItem('state',JSON.stringify(this.state))
        }
    }
    render() {
        const {counter,positiveClicks, negativeClicks} = this.state;
        return (
            <div>
                <h1> Counter : {counter} </h1>
                <button 
                onClick={()=>this.setState({positiveClicks:positiveClicks+1,counter:counter+1})} >
                    + ({positiveClicks} clicks)</button>
                <button disabled={(counter == 0)? true : false}
                onClick={()=>this.setState({negativeClicks:negativeClicks+1,counter:counter-1})} >
                    - ({negativeClicks} clicks)</button>
            </div>
        )
    }
}
export default Counter