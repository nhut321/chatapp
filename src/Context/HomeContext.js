import React, { createContext, useState } from 'react'

export const MainContext = React.createContext()

const MainContextProvider = ({children}) => {
	const [isLogin, setIsLogin] = useState(false)
	const handleLogin = () => {

	}

	const data = {
		isLogin,
		setIsLogin
	}
	return (
		<MainContext.Provider value={data}>
			{children}
		</MainContext.Provider>
	)
}

export default MainContextProvider