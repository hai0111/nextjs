import useAnimationFrame from '@/hooks/useAnimationFrame'
import { SizeContext } from '@/utils/size-observer'
import clsx from 'clsx'
import React, { useCallback, useContext, useRef } from 'react'
import SliderItems from './SliderItems'

const Slider: React.FC<{ data: string[]; offsetX?: number }> = ({
	data,
	offsetX = 0,
}) => {
	const screenWidth = useContext(SizeContext)
	const refContainer = useRef<HTMLDivElement>(null)
	const refContent = useRef<HTMLDivElement>(null)
	const refScrollX = useRef<number>(offsetX)
	const enabled = screenWidth < 180 * data.length

	useAnimationFrame(
		enabled,
		useCallback(() => {
			const { current: elContainer } = refContainer
			const { current: elContent } = refContent
			if (elContainer && elContent) {
				let { current } = refScrollX
				current += 1
				refScrollX.current = current
				elContainer.scrollLeft = current
				if (current >= elContent.clientWidth) {
					refScrollX.current = 0
					elContainer.scrollLeft = 0
				}
			}
		}, [])
	)

	return (
		<div
			ref={refContainer}
			className="flex justify-center overflow-hidden whitespace-nowrap max-w-full"
		>
			<SliderItems ref={refContent} data={data} />
			<SliderItems
				className={clsx({
					hidden: !enabled,
				})}
				data={data}
			/>
		</div>
	)
}

export default Slider
