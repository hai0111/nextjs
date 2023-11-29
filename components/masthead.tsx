import React from 'react'

const Masthead: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center">
			<video
				loop
				muted
				playsInline
				autoPlay
				className="absolute w-full h-full object-cover"
			>
				{/* <source src="/assets/masthead-bg.m4v" type="video/mp4; codecs=hvc1" /> */}
				{/* <source src="/assets/masthead-bg.webm" type="video/webm; codecs=vp9" /> */}
				<source src="/assets/masthead-bg.mp4" type="video/mp4" />
			</video>
			<div className="z-10 text-center font-bold text-white drop-shadow-[0_5px_3px_rgb(0,0,0,0.4)]">
				<h1 className="mb-6 text-4xl xl:text-5xl">Margelo</h1>
				<h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
					App Development, done right
				</h2>
			</div>
		</div>
	)
}

export default Masthead
