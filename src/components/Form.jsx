import React, { Component } from 'react';

class Form extends Component {
    render() {
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
                                        <input type="email" id="email" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" />
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