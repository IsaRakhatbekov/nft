import '@/styles/global.scss'
import '@/styles/reset.scss'

import { Inter, Jura, Poppins } from 'next/font/google'

const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	variable: '--inter',
	display: 'swap',
})

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--poppins',
	display: 'swap',
})

const jura = Jura({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--jura',
	display: 'swap',
})

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className={`${inter.variable} ${poppins.variable} ${jura.variable}`}
		>
			<body>{children}</body>
		</html>
	)
}
