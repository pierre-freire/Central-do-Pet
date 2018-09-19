import React, { Component } from 'react';
import './header.css';
import {withRouter} from 'react-router-dom';

class Header extends Component {

//	redirectSchedule() {
//	this.props.history.push('/');
//	}

	redirectHome() {
		this.props.history.push('/');
	}

	render() {
		return(
			<header>
				//<button onClick={()=> this.redirectSchedule()}>{str('mySchedules')}</button>
				<p><img className='pointer' src={str('logoBM')} alt='logo' onClick={()=> this.redirectHome()}/></p>
			</header>
		);
	}
}

export default withRouter(Header);
