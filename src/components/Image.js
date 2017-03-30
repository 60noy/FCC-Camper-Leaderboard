import React from 'react';
import style from '../styles/Image.css';

const Image = React.createClass({
	render() {
		return (
			<div>
				<img src={this.props.img} className={style.round}/>
			</div>
		);
	}
});

export default Image;
