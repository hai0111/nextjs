import clsx from 'clsx'
import Image from 'next/image'
import React, { forwardRef } from 'react'

interface SliderItemsProps {
	className?: string
	data: string[]
}

const SliderItems = React.forwardRef<HTMLDivElement, SliderItemsProps>(
	({ className, data }, ref) => {
		return (
			<div ref={ref} className={clsx('inline-flex items-center', className)}>
				{data.map((src, index) => (
					<div
						key={index}
						className="inline-flex justify-center items-center"
						style={{ width: 180, height: 50 }}
					>
						<Image
							src={`/assets/images/logos/${src}.png`}
							alt=""
							width={150}
							height={50}
							className="aspect-[3/1] object-contain"
						/>
					</div>
				))}
			</div>
		)
	}
)

export default SliderItems
