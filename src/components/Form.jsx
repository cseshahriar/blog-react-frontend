import React, { Component } from 'react';

class Form extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            posts: []
        }
    }

    // handle username
    usernameHandle = (event) => {
        this.setState({ username: event.target.value});
    }
    // handle password
    passwordHandle = (event) => {
        this.setState({ password: event.target.value});
    }

    componentDidMount() {
        // this.setState({ username: 'shosen@me.com' });
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => this.setState({ posts: data}));
    }

    render() {
        const {username, password, posts} = this.state;
        
        return (
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6 offset-3'>
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <h1 className="text-center mb-3">Login Form</h1>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            value={username} 
                                            className="form-control" 
                                            onChange={this.usernameHandle}    
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input 
                                            type="password" value={password} 
                                            className="form-control" 
                                            id="password" 
                                            onChange={this.passwordHandle} 
                                        />
                                    </div>
                            
                                    <button type="submit" className="btn btn-primary">Login</button>
                                    <p className='mt-3'>If did't have an account. Please  <a href='/sign-up'>Sign up</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default Form;