import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Collections from '@/components/sections/Collections/Collections'
import Creators from '@/components/sections/Creators/Creators'
import Hero from '@/components/sections/Hero/Hero'
import WhyUs from '@/components/sections/WhyUs/WhyUs'

export default function Home() {
	return (
		<div>
			<Header />
			<main>
				<Hero />
				<Creators />
				<Collections />
				<WhyUs />
			</main>
			<Footer />
		</div>
	)
}
