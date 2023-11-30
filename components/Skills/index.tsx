import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'

const Skills = () => {
	const refContainer = useRef<HTMLDivElement>(null)
	const [activeParagraph, setActiveParagraph] = useState<number>(0)
	useEffect(() => {
		const handleScroll: EventListener = () => {
			const { current: elContainer } = refContainer
			if (elContainer) {
				const { clientHeight } = elContainer
				const halfH = window.innerHeight / 2
				const indexs = elContainer.childNodes.length - 1
				const { y: posY } = elContainer.getBoundingClientRect()
				const percentY = (-posY + halfH) / clientHeight
				const activeParagraph = Math.min(
					Math.max(Math.round(percentY * indexs), 0),
					indexs
				)
				setActiveParagraph(activeParagraph)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	const handleScroll: React.UIEventHandler<HTMLElement> = (ev) => {
		const el = ev.target!
		console.dir(el)
	}
	return (
		<section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-10 lg:px-20 py-24 md:py-28 lg:py-36">
			<div
				ref={refContainer}
				onScroll={handleScroll}
				className="max-w-5xl text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold leading-[1.15]"
			>
				<div
					className={clsx('transition-opacity duration-200', {
						'opacity-20': activeParagraph !== 0,
						'opacity-100': activeParagraph === 0,
					})}
				>
					We know our tools inside out.
				</div>
				<div
					className={clsx('transition-opacity duration-200', {
						'opacity-20': activeParagraph !== 1,
						'opacity-100': activeParagraph === 1,
					})}
				>
					Our team has contributed 310 commits to React Native core, powering
					thousands of apps worldwide.
				</div>
				<div
					className={clsx('transition-opacity duration-200', {
						'opacity-20': activeParagraph !== 2,
						'opacity-100': activeParagraph === 2,
					})}
				>
					We're maintaining some of the most popular open-source projects, with
					over <strong>59 million downloads</strong>
				</div>
			</div>
		</section>
	)
}

export default Skills
