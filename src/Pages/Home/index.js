import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar'

const Home = () => {
	return (
		<div className="home">
			<div className="home-left">
				<Sidebar />
			</div>
			<div className="home-right">2</div>
		</div>

	)
}

export default Home