'use client'
import AboutUs from '@/components/Aboutus'
import Masthead from '@/components/Masthead'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
import ScrollObserver from '@/utils/scroll-observer'

export default function Home() {
	return (
		<ScrollObserver>
			<Masthead />
			<AboutUs />
			<Skills />
			<Works />
			<Skills />
		</ScrollObserver>
	)
}
