import React, { useContext } from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar'
import { HomeContext } from '../../Context/HomeContext'
import Chat from '../../components/Chat'


const Home = () => {
	const homeContext = useContext(HomeContext)
	
	return (
		<div className="home">
			{
				homeContext.isDark
				?
				<>
			<div className="home-left" style={{
				backgroundColor: `var(${homeContext.darkmodeStyle.darkPrime[0]})`,
				color: `var(${homeContext.darkmodeStyle.darkPrime[1]})`
			}}>
				<div className='container'>
					
				<Sidebar />
				</div>
			</div>
			<div className="home-right" style={{
				backgroundColor: `var(${homeContext.darkmodeStyle.darkSecond[0]})`,
				color: `var(${homeContext.darkmodeStyle.darkPrime[1]})`
			}}>
			<Chat />
			</div>
			</>
				:
				<>
			<div className="home-left" style={{
				backgroundColor: `var(${homeContext.darkmodeStyle.lightPrime[0]})`,
				color: `var(${homeContext.darkmodeStyle.lightPrime[1]})`
			}}>
				
				<div className='container'>
					
				<Sidebar />
				</div>
			</div>
			<div className="home-right" style={{
				backgroundColor: `var(${homeContext.darkmodeStyle.lightSecond[0]})`,
				color: `var(${homeContext.darkmodeStyle.lightPrime[1]})`
			}}>
			<Chat />
			</div>
			</>
			}
		</div>

	)
}

export default Home