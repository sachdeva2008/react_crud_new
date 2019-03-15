import React from "react";
import Button from "./Button"; 
import Menu from './Menu';
import ReactDOM from 'react-dom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
  
class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contextMenu: false,
            top: 0,
            left: 0 
          }
    }

   

    componentDidMount(){
        document.addEventListener('contextmenu', this._handleContextMenu);
        document.addEventListener('click', this.hideContextMenu);
        document.addEventListener('scroll', this._handleScroll);
    }

    shouldComponentUpdate(nextProps) {
        return this.props !== nextProps ? true : false;
    }

    contextMenuHandler = (data,event) => {
        if(data === "customizedTr"){
            event.preventDefault();
            const {clientX,clientY} = event;
            this.setState({contextMenu : true});         
            this.setState({top:clientY,left:clientX});
        }
        else{
            if(this.state.contextMenu){
                this.setState({contextMenu : false});
            }    
        }
    }

    hideContextMenu = () =>{ 
        console.log("here");
        const { contextMenu } = this.state;
        if (contextMenu) this.setState({ contextMenu: false });    
    }

    _handleScroll = () => {
        const { contextMenu } = this.state;
        if (contextMenu) this.setState({ contextMenu: false });
    };

   

    render(){
        let dataSet = null;
        
        const WrappingMenuComponent = () =>{
            return (
                <div style={{top: `${this.state.top}px`,left: `${this.state.top}px`,position: "absolute"}}>
                    <Menu />
                </div>
            );
        }

        if(this.props.dataSet){
            dataSet = this.props.dataSet.map((currRow,index)=>{
                return  <tr key={currRow.id} 
                            onContextMenu={this.contextMenuHandler.bind(this,"customizedTr")}>
                        <td>{index+1}</td>
                        <td>{currRow.email}</td>
                        <td>{currRow.name}</td>
                        <td><Button type="button" name="edit" text="Edit" onClick={this.props.editHandler.bind(this,currRow.id)} /></td>
                        <td><Button type="button" name="delete"
                             text="Delete" onClick = {this.props.deleteRecordHandler.bind(this,currRow.id)}/></td>
                    </tr>
            });
        }
    
        return (
            <>
            
            {this.state.contextMenu && <WrappingMenuComponent />}

            
            
           <table className="table table-bordered table-dark" >
                <thead>
                    <tr>
                    <th scope="col">S.no.</th>
                    <th scope="col">Email</th>
                    <th scope="col">Name</th>
                    </tr>
                </thead>
               
                <tbody>
                <React.Fragment key="123">
                       {dataSet}   
                       </React.Fragment>   
                    
                </tbody>
            </table>
           </>
            
        );
    }
        
}

export default Dashboard