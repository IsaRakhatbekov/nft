import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Creators from '@/components/sections/Creators/Creators'
import Hero from '@/components/sections/Hero/Hero'

export default function Home() {
	return (
		<div>
			<Header />
			<main>
				<Hero />
				<Creators />
			</main>
			<Footer />
		</div>
	)
}
