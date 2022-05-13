function About() {
	return (
		<>
			<main className="pt-28 flex items-center flex-col text-center">
				<h1 className="text-3xl text-center">About Me</h1>

				<p className="max-w-[720px] pt-2">
					Hi {"I'm"} Henry, and I am a full stack developer with a lot of experience in
					the React, Svelte and Typescript ecosystem.
				</p>

				{/* Slider Container */}
				<div className="bg-[#4d4f69] w-full p-10">
					<h2 className="text-2xl">
						Some of the technologies I have experience with...
					</h2>

					<h2>
						slider coming soon...
						{/* <IconSlider /> */}
					</h2>
				</div>

				
			</main>
		</>
	)
}

export default About
