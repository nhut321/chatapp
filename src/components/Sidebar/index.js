import React from 'react'
import './Sidebar.css'

export default function Sidebar() {

	return (
		<div className='sidebar'>
			<div className='profile'></div>
			<div className='sidebar-list'>
				<div className='sidebar-item'>Chat</div>
				<div className='sidebar-item'>Bạn bè</div>
				<div className='sidebar-item'>Cài đặt</div>
			</div>
		</div>
	)
}

