'use client'
import AboutUs from '@/components/Aboutus'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Masthead from '@/components/Masthead'
import Skills from '@/components/Skills'
import TrustedBy from '@/components/TrustedBy'
import Works from '@/components/Works'
import ScrollObserver from '@/utils/scroll-observer'
import SizeObserver from '@/utils/size-observer'

export default function Home() {
	return (
		<SizeObserver>
			<ScrollObserver>
				<Masthead />
				<AboutUs />
				<Skills />
				<Works />
				<TrustedBy />
				<Contact />
				<Footer />
			</ScrollObserver>
		</SizeObserver>
	)
}
