import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableRow, TableHeaderColumn} from 'material-ui/Table';
import Image from './Image';
import UserRow from './UserRow';

class CampTable extends Component {
	render() {
		return (
			<div>
				<Table>
				<TableHeader displaySelectAll={false}>
					<TableRow>
					<TableHeaderColumn>
						</TableHeaderColumn>
						<TableHeaderColumn>
							Name
						</TableHeaderColumn>
						<TableHeaderColumn>
							Points in the last 30 days
						</TableHeaderColumn>
						<TableHeaderColumn>
							All time points
						</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody displayRowCheckbox={false}>
				// map all the data from Main and create new user row
				{this.props.data.map((elem, index) => {
						return <UserRow img={elem.img} username={elem.username}
						recent={elem.recent} alltime={elem.alltime} index={index + 1}/>
				})}

				</TableBody>
				</Table>
			</div>
		);
	}
}


export default CampTable;
