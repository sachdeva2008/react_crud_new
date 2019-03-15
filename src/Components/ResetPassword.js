import React from 'react';

class ResetPassword extends React.Component {
    render(){
        return (
                <form className="col-md-4 border border-secondary rounded p-2 mx-auto"> 
                    <div className="form-group ">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            );
    }
}

export default ResetPassword;