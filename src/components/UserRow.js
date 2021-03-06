import React from 'react';
import Image from './Image';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const UserRow = React.createClass({
	render() {
		return (
				<TableRow>
						<TableRowColumn> {this.props.index} </TableRowColumn>
						<TableRowColumn> {this.props.username} </TableRowColumn>
						<TableRowColumn> {this.props.recent} </TableRowColumn>
						<TableRowColumn> {this.props.alltime} </TableRowColumn>
				</TableRow>
		);
	}
});

export default UserRow;
