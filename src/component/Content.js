import React, { Component } from 'react';

class Content extends Component{
    constructor(){
        super();
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changeMessage(){
        this.setState ({
            message: 'Thankyou for subscribe'
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>{this.state.message}</h1>
                    </div>
                    <div className="col-md-6">
                        <button     onClick= {() => this.changeMessage() } >Subscribe</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content