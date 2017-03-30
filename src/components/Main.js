import React, { Component } from 'react';
import CampTable from './CampTable';
import styles from '../styles/Main.css';
import {Toggle, Paper} from 'material-ui';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			allTimesData: [],
			recentData: [],
			isToggled: false
		}
	}

	// called when pressing the toggle button
	handleToggle(e,isToggled){
		this.setState({isToggled: isToggled});
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.title}> Best Of The Best </div>
				<Toggle label="Show Recent" onToggle={this.handleToggle.bind(this)} labelPosition="right"/>
				<Paper zDepth={3}>
				<CampTable data={this.state.isToggled ? this.state.recentData : this.state.allTimesData}/>
				</Paper>
			</div>
		);
	}

	componentWillMount() {
		// get recent data 
		fetch(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`)
		.then(data => data.json())
		.then(data => {this.setState({recentData:data})})
		.catch(error => {console.log(error)});

		// get all times data
		fetch(`https://fcctop100.herokuapp.com/api/fccusers/top/alltime`)
		.then(data => data.json())
		.then(data => {this.setState({allTimesData:data})})
		.catch(error => {console.log(error)});
		
	}


}
