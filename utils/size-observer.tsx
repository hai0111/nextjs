'use client'
import React, { useCallback, useEffect, useState } from 'react'

export const SizeContext = React.createContext<number>(0)

const SizeObserver: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [screenWidth, setScreenWidth] = useState(0)
	const handleResize = useCallback(() => {
		setScreenWidth(window.innerWidth)
	}, [])

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize, { passive: true })
		return () => window.removeEventListener('resize', handleResize)
	}, [handleResize])
	return (
		<SizeContext.Provider value={screenWidth}>{children}</SizeContext.Provider>
	)
}

export default SizeObserver
