import clsx from 'clsx'
import AutoPlay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'

interface Testimonial {
	content: string
	author: string
}

interface TestimonialItemProps {
	active: boolean
	onClick(): void
	data: Testimonial
}

const testimonials: Testimonial[] = [
	{
		content:
			"The talent, communication, and speed from Margelo is unlike any group of engineers I have worked with. Steddy's MVP launched with a level of performance and responsiveness that even I couldn't imagine before connecting with Marc's team.",
		author: 'Raffi (CEO of Steddy)',
	},
	{
		content:
			"The talent, communication, and speed from Margelo is unlike any group of engineers I have worked with. Steddy's MVP launched with a level of performance and responsiveness that even I couldn't imagine before connecting with Marc's team.",
		author: 'Raffi (CEO of Steddy)',
	},
	{
		content:
			"The talent, communication, and speed from Margelo is unlike any group of engineers I have worked with. Steddy's MVP launched with a level of performance and responsiveness that even I couldn't imagine before connecting with Marc's team.",
		author: 'Raffi (CEO of Steddy)',
	},
	{
		content:
			"The talent, communication, and speed from Margelo is unlike any group of engineers I have worked with. Steddy's MVP launched with a level of performance and responsiveness that even I couldn't imagine before connecting with Marc's team.",
		author: 'Raffi (CEO of Steddy)',
	},
	{
		content:
			"The talent, communication, and speed from Margelo is unlike any group of engineers I have worked with. Steddy's MVP launched with a level of performance and responsiveness that even I couldn't imagine before connecting with Marc's team.",
		author: 'Raffi (CEO of Steddy)',
	},
	{
		content:
			"The talent, communication, and speed from Margelo is unlike any group of engineers I have worked with. Steddy's MVP launched with a level of performance and responsiveness that even I couldn't imagine before connecting with Marc's team.",
		author: 'Raffi (CEO of Steddy)',
	},
]

const TestimonialItem: React.FC<TestimonialItemProps> = ({
	active,
	onClick,
	data,
}) => {
	return (
		<div
			onClick={onClick}
			className={clsx(
				'px-5 md:px-10 lg:px-20 flex-shrink-0 text-center w-[70%] max-w-[620px] transition-opacity duration-100',
				{
					'opacity-50': !active,
					'opacity-100': active,
				}
			)}
		>
			<div className="text-xl md:text-2xl lg:leading-[3rem] tracking-tight">
				“{data.content}”
			</div>
			<div className="mt-6">—{data.author}</div>
		</div>
	)
}

const Testimonials = () => {
	const [selectedIdex, setSelectedIdex] = React.useState(0)

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 'center',
			skipSnaps: false,
		},
		[ClassNames(), AutoPlay({ delay: 5000 })]
	)

	const onSelect = React.useCallback(() => {
		if (emblaApi) setSelectedIdex(emblaApi.selectedScrollSnap())
	}, [emblaApi, selectedIdex])

	const onClickItem = (index: number) => {
		if (emblaApi) emblaApi.scrollTo(index)
	}

	React.useEffect(() => {
		if (!emblaApi) return
		emblaApi.on('select', onSelect)
	}, [emblaApi])

	return (
		<div
			ref={emblaRef}
			className={clsx(
				'w-full bg-black text-white py-10 lg:py-20 overflow-hidden draggable'
			)}
		>
			<div className="flex">
				{testimonials.map((item, index) => (
					<TestimonialItem
						key={index}
						data={item}
						active={selectedIdex === index}
						onClick={() => onClickItem(index)}
					/>
				))}
			</div>
		</div>
	)
}

export default Testimonials
