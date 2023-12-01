import { getActiveChild, getActiveChildAndMore, limitInRange } from '@/funcs'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import IphoneVideo from '../IphoneVideo'

interface Work {
	title: string
	subTitle: string
	image?: string
	video?: string
	typeVideo?: string
	link: string
}

const works: Work[] = [
	{
		title: 'We designed and developed',
		subTitle: "Stori/'s face filters.",
		link: 'https://www.storiapp.co',
		video: '/assets/videos/stori.mp4',
		typeVideo: 'video/mp4',
	},
	{
		title: 'We made',
		subTitle: 'Coinbase Wallet/ faster.',
		link: 'https://www.coinbase.com',
		video: '/assets/videos/coinbase-wallet.mp4',
		typeVideo: 'video/mp4',
	},
	{
		title: 'We built',
		subTitle: "Pink Panda/'s app.",
		image: '/assets/images/pinkpanda.png',
		link: 'https://pinkpanda.io/',
	},
	{
		title: 'We helped',
		subTitle: 'Showtime/ ship faster.',
		image: '/assets/images/showtime.png',
		link: 'https://showtime.io/',
	},
]

interface Props {
	index: number
	activeItem: ActiveItem
	children?: React.ReactNode
}

const WorkWrap: React.FC<Props> = ({ activeItem, index, children }) => {
	return (
		<div
			className={clsx(
				'absolute top-0 h-screen left-0 right-0 grid grid-rows-[3fr,7fr] lg:grid-rows-1 lg:grid-cols-2',
				{
					'pointer-events-none': index !== activeItem.active,
				}
			)}
		>
			{children}
		</div>
	)
}

interface PropsHasData extends Props {
	item: Work
}

const WorkTitle: React.FC<PropsHasData> = ({ activeItem, index, item }) => {
	return (
		<div
			className={clsx(
				'flex justify-center items-center text-white transition-all duration-200',
				{
					'opacity-0': index !== activeItem.active,
				}
			)}
			style={{
				opacity: index === activeItem.active ? activeItem.opacity : '',
				transform: `translateY(${
					index < activeItem.active
						? -20
						: index > activeItem.active
						? 20
						: activeItem.translateY
				}px)`,
			}}
		>
			<div>
				<div className="text-3xl lg:text-3xl">{item.title}</div>
				<div className="text-4xl md:text-5xl font-semibold tracking-tight">
					<Link
						className="underline underline-offset-8 decoration-1"
						target="_blank"
						href={item.link}
					>
						{item.subTitle.split('/')[0]}
					</Link>
					{item.subTitle.split('/')[1]}
				</div>
			</div>
		</div>
	)
}

const WorkMedia: React.FC<PropsHasData> = ({ activeItem, index, item }) => {
	return (
		<div className="flex justify-center lg:items-center relative overflow-hidden">
			<div
				className={clsx('w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0', {
					'opacity-0': index !== activeItem.active,
				})}
				style={{
					opacity: index === activeItem.active ? activeItem.opacity : '',
					transform: `translateY(${
						index < activeItem.active
							? -20
							: index > activeItem.active
							? 20
							: activeItem.translateY
					}px)`,
				}}
			>
				{item.image ? (
					<Image src={item.image} alt="" width={840} height={1620} />
				) : (
					<IphoneVideo>
						<source src={item.video} type={item.typeVideo} />
					</IphoneVideo>
				)}
			</div>
		</div>
	)
}

interface ActiveItem {
	active: number
	opacity: number
	translateY: number
}

const Work = () => {
	const refContainer = useRef<HTMLDivElement>(null)
	const [activeItem, setActiveWork] = useState<ActiveItem>({
		active: 0,
		opacity: 0,
		translateY: 0,
	})
	useEffect(() => {
		const handleScroll = () => {
			const { current: elContainer } = refContainer
			if (elContainer) {
				const { active, additional: percentY } = getActiveChildAndMore<number>(
					elContainer,
					(percentY) => {
						return percentY
					},
					4
				)

				const percentActive = limitInRange(0.15, percentY * 4, 3.85) % 1
				const opacity = Math.min(percentActive, 0.15, 1 - percentActive) / 0.15
				const translateY =
					((percentActive <= 0.15
						? 0.15 - percentActive
						: percentActive >= 0.85
						? 0.85 - percentActive
						: 0) /
						0.15) *
					30

				setActiveWork({
					active,
					opacity,
					translateY,
				})
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<section ref={refContainer} className="h-[400vh] relative">
			<div className="absolute h-full w-full">
				<div className="sticky top-0 h-screen bg-gradient-to-b lg:bg-gradient-to-r from-black from-30% lg:from-50% to-white to-30% lg:to-50%"></div>
			</div>
			<div className="sticky top-0 h-screen overflow-hidden">
				{works.map((item, index) => (
					<WorkWrap key={item.title} index={index} activeItem={activeItem}>
						<WorkTitle item={item} activeItem={activeItem} index={index} />
						<WorkMedia item={item} activeItem={activeItem} index={index} />
					</WorkWrap>
				))}
			</div>
		</section>
	)
}

export default Work
