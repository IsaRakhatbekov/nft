import Image from 'next/image'
import heroBg from '../../../../public/images/heroBg.png'
import styles from './Hero.module.scss'

const Hero = () => {
	return (
		<section className={styles.Hero}>
			<div className={styles.bgGradient}>
				<svg
					width='790'
					height='841'
					viewBox='0 0 790 841'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g filter='url(#filter0_f_123_866)'>
						<ellipse
							cx='131.795'
							cy='-18.1208'
							rx='348.703'
							ry='409.259'
							transform='rotate(54.3515 131.795 -18.1208)'
							fill='url(#paint0_linear_123_866)'
						/>
					</g>
					<g filter='url(#filter1_f_123_866)'>
						<ellipse
							cx='-182.441'
							cy='179.916'
							rx='225.124'
							ry='293.536'
							transform='rotate(76.6598 -182.441 179.916)'
							fill='url(#paint1_linear_123_866)'
						/>
					</g>
					<g filter='url(#filter2_f_123_866)'>
						<circle
							cx='124.254'
							cy='313.804'
							r='173.275'
							transform='rotate(-22.5384 124.254 313.804)'
							fill='url(#paint2_linear_123_866)'
						/>
					</g>
					<g filter='url(#filter3_f_123_866)'>
						<ellipse
							cx='24.2547'
							cy='-20.5185'
							rx='216.894'
							ry='318.289'
							transform='rotate(76.6598 24.2547 -20.5185)'
							fill='url(#paint3_linear_123_866)'
						/>
					</g>
					<defs>
						<filter
							id='filter0_f_123_866'
							x='-525.948'
							y='-656.453'
							width='1315.49'
							height='1276.66'
							filterUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'
						>
							<feFlood floodOpacity='0' result='BackgroundImageFix' />
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='BackgroundImageFix'
								result='shape'
							/>
							<feGaussianBlur
								stdDeviation='133.97'
								result='effect1_foregroundBlur_123_866'
							/>
						</filter>
						<filter
							id='filter1_f_123_866'
							x='-826.257'
							y='-402.892'
							width='1287.63'
							height='1165.62'
							filterUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'
						>
							<feFlood floodOpacity='0' result='BackgroundImageFix' />
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='BackgroundImageFix'
								result='shape'
							/>
							<feGaussianBlur
								stdDeviation='176.733'
								result='effect1_foregroundBlur_123_866'
							/>
						</filter>
						<filter
							id='filter2_f_123_866'
							x='-402.532'
							y='-212.981'
							width='1053.57'
							height='1053.57'
							filterUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'
						>
							<feFlood floodOpacity='0' result='BackgroundImageFix' />
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='BackgroundImageFix'
								result='shape'
							/>
							<feGaussianBlur
								stdDeviation='176.733'
								result='effect1_foregroundBlur_123_866'
							/>
						</filter>
						<filter
							id='filter3_f_123_866'
							x='-478.926'
							y='-433.449'
							width='1006.36'
							height='825.861'
							filterUnits='userSpaceOnUse'
							colorInterpolationFilters='sRGB'
						>
							<feFlood floodOpacity='0' result='BackgroundImageFix' />
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='BackgroundImageFix'
								result='shape'
							/>
							<feGaussianBlur
								stdDeviation='94.7075'
								result='effect1_foregroundBlur_123_866'
							/>
						</filter>
						<linearGradient
							id='paint0_linear_123_866'
							x1='498.946'
							y1='30.4649'
							x2='-148.072'
							y2='111.575'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#7000FF' />
							<stop offset='1' stopColor='#06FFF0' />
						</linearGradient>
						<linearGradient
							id='paint1_linear_123_866'
							x1='-182.441'
							y1='-113.62'
							x2='-182.441'
							y2='473.452'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#03FB75' />
							<stop offset='1' stopColor='#06FFF0' />
						</linearGradient>
						<linearGradient
							id='paint2_linear_123_866'
							x1='124.254'
							y1='140.529'
							x2='124.254'
							y2='487.079'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#2603FB' />
							<stop offset='1' stopColor='#DC06FF' />
						</linearGradient>
						<linearGradient
							id='paint3_linear_123_866'
							x1='24.2547'
							y1='-338.808'
							x2='24.2547'
							y2='297.771'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#FB03F5' />
							<stop offset='1' stopColor='#AA9CFF' />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div className={`${styles.container} container`}>
				<div className={styles.content}>
					<h1 className={styles.title}>Keep Calm & Collect Your NFTs.</h1>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium
						lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis
						pulvinar.
					</p>

					<div className={styles.playWrapper}>
						<div className={styles.playIcon}>
							<svg
								width='92'
								height='96'
								viewBox='0 0 92 96'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g filter='url(#filter0_d_123_879)'>
									<path
										d='M29 48.4186C29.0788 51.9568 32.625 54.0993 35.7319 52.4149L60.716 37.9259C62.0767 37.1357 63 35.6879 63 33.9912C63 32.2945 62.0767 30.8467 60.716 30.0565L35.7319 15.5881C32.625 13.9037 29.0788 16.0256 29 19.5638V48.4186Z'
										fill='url(#paint0_linear_123_879)'
									/>
								</g>
								<defs>
									<filter
										id='filter0_d_123_879'
										x='0'
										y='0'
										width='92'
										height='96'
										filterUnits='userSpaceOnUse'
										colorInterpolationFilters='sRGB'
									>
										<feFlood floodOpacity='0' result='BackgroundImageFix' />
										<feColorMatrix
											in='SourceAlpha'
											type='matrix'
											values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
											result='hardAlpha'
										/>
										<feOffset dy='14' />
										<feGaussianBlur stdDeviation='14.5' />
										<feColorMatrix
											type='matrix'
											values='0 0 0 0 0.0313726 0 0 0 0 0.00392157 0 0 0 0 0.247059 0 0 0 1 0'
										/>
										<feBlend
											mode='normal'
											in2='BackgroundImageFix'
											result='effect1_dropShadow_123_879'
										/>
										<feBlend
											mode='normal'
											in='SourceGraphic'
											in2='effect1_dropShadow_123_879'
											result='shape'
										/>
									</filter>
									<linearGradient
										id='paint0_linear_123_879'
										x1='46'
										y1='15'
										x2='46'
										y2='53'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#6147F8' />
										<stop offset='1' stopColor='#BC5EFF' />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div className={styles.inner}>
							<h2 className={styles.playTitle}>Let’s get started!</h2>
							<p className={styles.playText}>
								Watch this quick demo video to see how to get started.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.imgWrapper}>
					<Image src={heroBg} alt='' width={540} height={878} />
				</div>
			</div>
		</section>
	)
}

export default Hero
