import React, {useContext} from 'react'
import './Darkmode.css'
import {HomeContext} from '../../Context/HomeContext'

export default function Darkmode() {
	const homeContext = useContext(HomeContext)
	console.log(homeContext.isDark)
	return (
		<div className='darkmode' onClick={homeContext.handleDarkmode}>
			{/* <div className='cir' style={homeContext.isDark ? {top: '2px', left: '2px'} : {top '100%', left: '100%'}}></div> */}
			<div className='cir' style={homeContext.isDark ? {top: '2px', left: '2px', backgroundColor: '#00abff'}:{top: '2px', left: '22px', backgroundColor: '#0d6c9b'}}></div>
		</div>
		)
}