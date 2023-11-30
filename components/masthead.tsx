import Image from 'next/image'
import React from 'react'

const Masthead: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col justify-between items-center py-10 md:pb-20">
			<video
				loop
				muted
				playsInline
				autoPlay
				className="absolute -my-10 w-full h-full object-cover"
			>
				{/* <source src="/assets/masthead-bg.m4v" type="video/mp4; codecs=hvc1" /> */}
				{/* <source src="/assets/masthead-bg.webm" type="video/webm; codecs=vp9" /> */}
				<source src="/assets/masthead-bg.mp4" type="video/mp4" />
			</video>

			<div className="z-10 transition-opacity duration-1000 opacity-100">
				<Image src="/logo.svg" width={128 / 3} height={114 / 3} alt="" />
			</div>

			<div className="z-10 text-center font-bold text-white drop-shadow-[0_5px_3px_rgb(0,0,0,0.4)]">
				<h1 className="mb-6 text-4xl xl:text-5xl">Margelo</h1>
				<h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
					App Development, done right
				</h2>
			</div>

			<div className="z-10 transition-all duration-1000 opacity-100">
				<Image src="/arrow-down.png" width={188 / 3} height={103 / 3} alt="" />
			</div>
		</div>
	)
}

export default Masthead
