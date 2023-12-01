import Image from 'next/image'
import React from 'react'

interface Props {
	children: React.ReactNode
}

const IphoneVideo: React.FC<Props> = ({ children }) => {
	return (
		<div className="relative">
			<Image
				src="/assets/images/iphone-bezels.png"
				alt=""
				width={840}
				height={1620}
			/>
			<video
				loop
				muted
				playsInline
				autoPlay
				className="absolute top-[2.7%] left-[7.7%] w-[84.5%] rounded-[6%]"
			>
				{children}
			</video>
		</div>
	)
}

export default IphoneVideo
