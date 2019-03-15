import React from 'react';
import Input from '../Input';
import Button from '../Button';


class Form extends React.Component {

    constructor(props){
        super(props);
        const activeEdit = this.props.activeEdit || {};
        this.state = {
            id: activeEdit.id || '',
            email: activeEdit.email || '',
            name: activeEdit.name || '',
            error: null
        }        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleChange(event){
        let currentState = {...this.state};
        let currKey = event.target.name;
        currentState[currKey] = event.target.value; 
        this.setState(currentState);
    }

    handleSubmit(event) {                
        event.preventDefault();          
        if(this.state.name == ''){
            this.setState({error:"Name is mandetory"});
            return false;
        }
        if(this.state.email == ''){
            this.setState({error:"email is mandetory"});
            return false;
        }        
        this.props.saveRecords({...this.state});    
        this.setState({name:"",email:""}); 
           
    }

   
    
    render(){
        return (
            <div className="form"  role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">      
      <div className="modal-body">
            {this.state.error?(<div className="alert alert-danger" role="alert">{this.state.error}</div>):null}
            <form onSubmit={this.handleSubmit} name="addRecord" className="form-group">
                
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
  </div>
  <input type = "text" placeholder= "Name" name = "name" 
                    value={this.state.name} onChange={this.handleChange} className="form-control" />
</div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
  </div>
  <input placeholder="Email" name = "email"
                    value={this.state.email} onChange={this.handleChange} className="form-control" />
</div>

                
                <div className="modal-footer">
      <Button type ="submit" value="Save" className="btn btn-primary" name="addRecord"/>&nbsp;      
     <Button type = "submit" value="Close" className="btn btn-secondary" name="close" onClick={()=>{this.props.changeModalState(false)}}/>
        
      </div>
                </form>
            </div>
      
    </div>
  </div>
</div>
        );
    }    
}

export default Form; 