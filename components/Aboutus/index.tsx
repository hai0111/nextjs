'use client'
import React from 'react'
import Member from '@/components/Member'
import members from '@/public/json/members.json'

const AboutUs: React.FC = () => {
	return (
		<section className="flex flex-col items-center bg-white py-20 text-3xl md:text-4xl">
			<div className="container px-11">
				<p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
					<strong>We will help you ship better apps, faster.</strong> Our team
					of expert engineers has created the best user experiences in some of
					the most popular apps worldwide. <br />
					<br />
					Our services:
					<br />- <b>From Idea to AppStore</b>: Full App Design and Development{' '}
					<br />- <b>Performance Optimization</b>: Startup-time, Animation and
					overall smoothness optimization for existing apps <br />-{' '}
					<b>Custom Module Development</b>: Development of specific UIs,
					animations, gestures or native modules for existing apps <br />-{' '}
					<b>Consulting</b>: One-on-one consulting with a React Native, iOS or
					Android expert and bug fixing
				</p>
			</div>

			<div className="container px-11 mt-28 text-center">
				<h2 className="font-bold">Our Team</h2>
				<div className="mt-2">the “spec-ops”</div>
			</div>

			<div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
				{members.map((memData) => (
					<Member key={memData.id} {...memData} />
				))}
			</div>
		</section>
	)
}

export default AboutUs
