import { getActiveChild } from '@/funcs'
import clsx from 'clsx'
import React, { useEffect, useMemo, useRef, useState } from 'react'

const Skills = () => {
	const refContainer = useRef<HTMLDivElement>(null)
	const [activeParagraph, setActiveParagraph] = useState<number>(0)
	useEffect(() => {
		const handleScroll = () => {
			const { current: elContainer } = refContainer
			if (elContainer) {
				setActiveParagraph(getActiveChild(elContainer) as number)
			}
		}
		handleScroll()
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<section className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-24 md:py-28 lg:py-36">
			<div
				ref={refContainer}
				className="max-w-5xl px-10 lg:px-20 text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold leading-[1.15]"
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
