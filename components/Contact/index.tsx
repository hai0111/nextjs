import Image from 'next/image'
import React from 'react'

const Contact = () => {
	return (
		<section className="min-h-screen bg-black text-white  pt-10 flex flex-col items-center justify-center">
			<Image
				src="/assets/images/logo.svg"
				width={128 / 3}
				height={114 / 3}
				alt=""
			/>
			<h2 className="text-4xl font-bold mt-10">Contact Us</h2>
			<form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
				<input
					type="text"
					id="companyName"
					name="companyName"
					required={true}
					maxLength={128}
					placeholder="Company name"
					className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
				/>
				<input
					type="email"
					id="email"
					name="email"
					required={true}
					maxLength={128}
					placeholder="Your E-mail"
					className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
				/>
				<textarea
					id="message"
					name="message"
					required={true}
					maxLength={1048576}
					placeholder="Additional information"
					className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
				></textarea>
				<div className="text-center mt-10">
					<button
						type="submit"
						className="bg-white text-black rounded-3xl px-8 py-2"
					>
						Submit
					</button>
				</div>
			</form>
		</section>
	)
}

export default Contact
