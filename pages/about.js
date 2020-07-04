import Link from "next/link";

const About = () => (
	<div>
		<ul>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
			</li>
		</ul>
		<h1>About prices</h1>
		<p>This site is for viewing Bitcoins prices</p>
	</div>
);

export default About;
