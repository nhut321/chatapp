import React, { createContext, useState } from 'react'

export const HomeContext = React.createContext()

const HomeContextProvider = ({children}) => {
	const [isLogin, setIsLogin] = useState(false)
	const [isDark, setIsDark] = useState(true)
	const handleLogin = () => {

	}

	//darkmode
	const darkmodeStyle = {
		darkSecond: ['--secondary-color-dark', '--text-dark'],
		darkPrime: ['--primary-color-dark', '--text-dark'],
		lightSecond: ['--secondary-color-light', '--text-light'],
		lightPrime: ['--primary-color-light', '--text-light'],
	}
	const handleDarkmode = () => {
		setIsDark(v => !v)
	}


	const data = {
		isLogin,
		setIsLogin,
		darkmodeStyle,
		isDark,
		handleDarkmode
	}
	return (
		<HomeContext.Provider value={data}>
			{children}
		</HomeContext.Provider>
	)
}

export default HomeContextProvider