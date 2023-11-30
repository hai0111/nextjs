import { ScrollContext } from '@/utils/scroll-observer'
import clsx from 'clsx'
import Image from 'next/image'
import React, { SyntheticEvent } from 'react'

const Masthead: React.FC = () => {
	const [imageLoaded, setImageLoaded] = React.useState<boolean>(false)
	const handleImageLoaded = () => {
		setImageLoaded(true)
	}

	const refContainer = React.useRef<HTMLDivElement>(null)

	const scrollValue = React.useContext(ScrollContext)

	const progress = React.useMemo(() => {
		let _progress = 0
		const { current: elContainer } = refContainer
		if (elContainer) {
			_progress = Math.min(1, scrollY / elContainer.clientHeight) * 20
		}
		return _progress
	}, [scrollValue, refContainer])

	return (
		<div
			ref={refContainer}
			className="min-h-screen flex flex-col justify-between items-center py-10 md:pb-20 sticky top-0 -z-10"
			style={{
				transform: `translateY(-${progress}vh)`,
			}}
		>
			<video
				loop
				muted
				playsInline
				autoPlay
				className="absolute -my-10 w-full h-full object-cover"
			>
				<source
					src="/assets/videos/masthead-bg.m4v"
					type="video/mp4; codecs=hvc1"
				/>
				<source
					src="/assets/videos/masthead-bg.webm"
					type="video/webm; codecs=vp9"
				/>
				<source src="/assets/videos/masthead-bg.mp4" type="video/mp4" />
			</video>

			<div
				className={clsx('z-10 transition-opacity duration-1000', {
					'opacity-100': imageLoaded,
					'opacity-0': !imageLoaded,
				})}
			>
				<Image
					src="/assets/images/logo.svg"
					width={128 / 3}
					height={114 / 3}
					alt=""
				/>
			</div>

			<div className="z-10 text-center font-bold text-white drop-shadow-[0_5px_3px_rgb(0,0,0,0.4)]">
				<h1 className="mb-6 text-4xl xl:text-5xl">Margelo</h1>
				<h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
					App Development, done right
				</h2>
			</div>

			<div
				className={clsx('z-10 transition-all duration-1000', {
					'opacity-100': imageLoaded,
					'opacity-0 -translate-y-10': !imageLoaded,
				})}
			>
				<Image
					src="/assets/images/arrow-down.png"
					width={188 / 3}
					height={103 / 3}
					alt=""
					onLoad={handleImageLoaded}
				/>
			</div>
		</div>
	)
}

export default Masthead
