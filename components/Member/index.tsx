import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface Member {
	id: string
	name: string
	socialId: string
	link: string
}

const Members: React.FC<Member> = ({ id, link, name, socialId }) => {
	return (
		<div className="text-center">
			<Image
				src={`/assets/images/margelo_faces_${id}.svg`}
				alt=""
				width={1336}
				height={1555}
			/>
			<div className="text-2xl xl:text-3xl">{name}</div>
			<div className="text-xl">
				<Link target="_blank" href={link}>
					{socialId}
				</Link>
			</div>
		</div>
	)
}

export default Members
