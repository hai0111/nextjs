import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className="min-h-full flex flex-wrap gap-8 items-center justify-center bg-black text-white px-4 py-20">
			<Image src="/assets/images/logo.svg" alt="" width={18} height={18} />
			<Link href="/imprint">Imprint</Link>
			<Link href="/privacy">Privacy Policy</Link>
			<Link href="https://github.com/margelo">GitHub</Link>
			<Link href="https://twitter.com/margelo_io">Twitter</Link>
			<Link href="https://www.linkedin.com/company/80296551">LinkedIn</Link>
			<Link href="https://clutch.co/profile/margelo">Clutch</Link>
		</footer>
	)
}

export default Footer
