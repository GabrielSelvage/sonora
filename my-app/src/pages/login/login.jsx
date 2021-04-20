import React, {Component} from 'react';

class Form extends Component {
    state= { 
        email:'',
        name: ''
    }

    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.v
        })
    }

    onSubmitHandler = (e) => {
        console.log('state', this.state);
        e.preventdefault();
    }
    render(){
        return (
            <>
                <center>
                    <div className= 'col-md-6'>
                        <form className= 'form-group'>
                            <input 
                            name= "name"
                            type="text"
                            placeholder= "name"
                            className= "form-control"
                            value={this.state.name}
                            onChange={ e => this.changeHandler(e) }
                            />
                                
                            <input type= "email"
                            placeholder="email"
                            className="form-control"
                            value={this.state.email}
                            onChange= {e => this.setState({
                                email: e.target.value
                            })}/>
                            <hr/>
                            <button 
                            onClick = { (e) => this.onSubmitHandler(e)}
                            className= "btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </center>
            </>
        );
    }
}

export default Form;