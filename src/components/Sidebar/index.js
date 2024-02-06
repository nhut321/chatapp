import React, { useContext } from 'react'
import './Sidebar.css'
import Darkmode from '../Darkmode'
import { HomeContext } from '../../Context/HomeContext'

export default function Sidebar() {
	const homeContext = useContext(HomeContext)
	{/* const styleHoverItem = { */}
	{/* 	dark: `var(${homeContext})` */}
	{/* } */}

	return (
		<div className='sidebar'>
			<div className='profile'>
				<img src={require('../../assets/img/avatar.png')} />
			</div>
			<div className='sidebar-list'>
				<div className={homeContext.isDark ? 'sidebar-item dark active' : 'sidebar-item'}>
					<span>Chat</span>
				</div>
				<div className={homeContext.isDark ? 'sidebar-item dark' : 'sidebar-item'}>
					<span>Bạn bè</span>
				</div>
					<Darkmode />
				<div className={homeContext.isDark ? 'sidebar-item dark' : 'sidebar-item'}>
					<span>Cài đặt</span>
				</div>
			</div>
		</div>
	)
}

