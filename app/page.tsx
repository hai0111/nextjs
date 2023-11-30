'use client'
import AboutUs from '@/components/Aboutus'
import Masthead from '@/components/Masthead'
import ScrollObserver from '@/utils/scroll-observer'

export default function Home() {
	return (
		<ScrollObserver>
			<Masthead />
			<AboutUs />
		</ScrollObserver>
	)
}
