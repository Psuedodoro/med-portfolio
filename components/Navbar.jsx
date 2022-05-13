import React from 'react';
import Link from 'next/link'

const Navbar = () => {
	return (
	<nav className="fixed w-full top-0 flex flex-row py-6 px-8 bg-[#323345] drop-shadow-2xl border-b-1 border-[#cbd5e11a]">
		<div className="flex items-center">
			{/* <!-- Logo/Other thing --> */}
			<h1>
				<Link href="/">
					<a>Henry Sargeant</a>
				</Link>
			</h1>
		</div>

		<div className="flex ml-auto items-center">
			{/* <!-- Navbar --> */}
			<ul className="flex gap-9 uppercase">
				<li className="">
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>

				<li className="">
					<Link href="/skills">
						<a>Skills</a>
					</Link>
				</li>

				<li className="">
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>

				<li className="">
					<Link href="/workexamples">
						<a>Previous Work</a>
					</Link>
				</li>

				<li className="">
					<a href="#">Services</a>
				</li>

				{/* <!-- <li class="">
					<a href="#">Skillset</a>
				</li> --> */}
			</ul>

			{/* <!-- PUT DARK MODE TOGGLE HERE! --> */}
			{/* <DarkModeToggle /> */}
		</div>
	</nav>
	);
}

export default Navbar;