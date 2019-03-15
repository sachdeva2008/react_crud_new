import React from "react";
import Datalist from "../Components/Dashboard";
import {dataList, addRecord,overwriteDataset} from '../Actions/DashboardAction';
import {connect} from 'react-redux';
import Button from "../Components/Button";
import Modal from '../Components/Modal/Modal';
import Backdrop from '../Components/Backdrop/Backdrop';
import AddForm from '../Components/Form/Form';
import _ from 'lodash';

class Dashboard extends React.Component{
    constructor(props){
		super(props);
		this.state = {
			displayModal: false,
			editState: false,
			activeEdit : {}
		}
		this.addRecordClickHandler = this.addRecordClickHandler.bind(this);
		this.checkClickHandler = this.checkClickHandler.bind(this);
	}

	

	addRecordClickHandler = ()=>{
		this.changeModalState(true);
	}
	checkClickHandler=(e) =>{
		console.log("[checking data]",e.target.name);
	}
	changeModalState = (modalState)=>{
		this.setState({
			displayModal: modalState,
			editState:false
		});
	}
	componentDidMount(){
		this.props.dispatch(dataList());
	}
	saveRecords = (data)=>{
		this.props.dispatch(addRecord(data))
	}

	deleteRecordHandler = (id) =>{
        let {dataset} = this.props;
		_.remove(dataset, function(obj) {
			return obj.id == id;
		  });
		this.props.dispatch(overwriteDataset(dataset));
	}

	editRecordHandler = (data) =>{
		let {dataset} = this.props;		
		let currentEdit = _.find(dataset, ['id', data.id]);
				
		let newObj = {
			id: data.id,
			email: data.email,
			name:data.name
		};		
		var ass = Object.assign(currentEdit,newObj);		
		this.props.dispatch(overwriteDataset(dataset));
		this.changeModalState(false);
	}

	openEditModal = (id)=>{
	  let {dataset} = this.props;
	  let currentEdit = _.find(dataset, ['id', id]);
	  this.setState({editState: true,displayModal:true,activeEdit:currentEdit});
	  
	}


    render(){
			
        return(
			<div className="col-xs-12 col-lg-12">
			    <h1 >Total Entries</h1>
				{this.state.displayModal?(
					<React.Fragment>
						<Modal show={this.state.displayModal}>
							{this.state.editState ? 
							    <AddForm changeModalState={this.changeModalState} saveRecords={this.editRecordHandler} activeEdit={this.state.activeEdit}/> : 
								<AddForm changeModalState={this.changeModalState}saveRecords={this.saveRecords}/>}
						</Modal>
						<Backdrop show={this.state.displayModal} clickHandler={()=>{this.changeModalState(false);}}/>
					</React.Fragment>
				):null}
				
				<Button type="button" className="btn btn-primary" 
					onClick = {this.addRecordClickHandler} name="addNew" text="Add New"/>
				<Button type="button" onClick={this.checkClickHandler} name="new button" text="Check on Click" />
				 <Datalist onClick={this.clickHandlerForTable} dataSet = {this.props.dataset} 
				    editHandler={this.openEditModal}
				 	deleteRecordHandler = {this.deleteRecordHandler}/>
			</div>
		);
	}
}

function mapStateToProps(state){
    return {
        dataset : state.dataset.dataset
    };
}

export default connect(mapStateToProps,null)(Dashboard);