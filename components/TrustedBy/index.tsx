import React from 'react'
import Slider from './Slider'
import Testimonials from './Testimonials'

const logosUp: string[] = [
	'shopify',
	'coinbase',
	'rainbow',
	'redbull',
	'walletconnect',
	'nativescript',
	'expensify',
	'picnic',
	'status',
	'extra',
	'stori',
	'exodus',
	'thisapp',
]

const logosDown: string[] = [
	'slingshot',
	'showtime',
	'steakwallet',
	'pinkpanda',
	'litentry',
	'raive',
	'scribeware',
	'snapcalorie',
	'push',
	'tocsen',
	'audubon',
	'steddy',
	'candid',
]

const TrustedBy = () => {
	return (
		<section className="bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32">
			<div>
				<h3 className="text-xl mb-10 font-bold text-center">
					trusted by the apps on your phone
				</h3>
				<Slider data={logosUp} />
				<div className="mt-6">
					<Slider data={logosDown} offsetX={90} />
				</div>
			</div>

			<h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">
				We believe in good communication and a fully transparent development
				process.
			</h3>

			<Testimonials />
		</section>
	)
}

export default TrustedBy
