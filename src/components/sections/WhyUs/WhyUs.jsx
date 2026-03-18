import styles from './WhyUs.module.scss'

const WhyUs = () => {
	return (
		<div className={styles.WhyUs}>
			<div className={`${styles.container} container`}>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<h2 className={`${styles.title} def-title`}>Why Choose Us?</h2>
						<p className={styles.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium
							lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis
							pulvinar.
						</p>
						<p className={styles.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							orci lacus, tempor nec accumsan ac, luctus ut sem.
						</p>
					</div>
					<ul className={styles.list}>
						<li className={styles.item}>
							<div className={styles.iconWrapper}>
								<svg
									width='53'
									height='61'
									viewBox='0 0 53 61'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M36.6206 0V60.9285L52.1929 48.5245V8.46398L36.6206 0ZM29.3777 47.6207L16.8391 53.0966V5.2957L29.3777 9.00726V47.6207ZM0 46.2168L9.59624 43.6806V13.1707L0.0456964 11.6323L0 46.2168Z'
										fill='url(#paint0_linear_123_702)'
									/>
									<defs>
										<linearGradient
											id='paint0_linear_123_702'
											x1='26.0964'
											y1='-3.50432e-06'
											x2='97.231'
											y2='17.2461'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#F7BC51' />
											<stop
												offset='0.609375'
												stopColor='#60E7CE'
												stopOpacity='0.5'
											/>
											<stop
												offset='1'
												stopColor='#060ED0'
												stopOpacity='0.28'
											/>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<h3 className={styles.innerTitle}>Marketplace</h3>
						</li>
						<li className={styles.item}>
							<div className={styles.iconWrapper}>
								<svg
									width='49'
									height='51'
									viewBox='0 0 49 51'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20.3095 0L38.8368 5.78821C39.3536 5.94952 39.8052 6.27178 40.1258 6.70794C40.4464 7.1441 40.6192 7.67133 40.619 8.21265V12.6934H45.6964C46.3697 12.6934 47.0154 12.9609 47.4915 13.437C47.9676 13.9131 48.2351 14.5588 48.2351 15.2321V20.3095H15.2321V15.2321C15.2321 14.5588 15.4996 13.9131 15.9757 13.437C16.4518 12.9609 17.0975 12.6934 17.7708 12.6934H35.5416V10.0786L20.3095 5.31601L5.07737 10.0786V28.875C5.07701 30.4293 5.43342 31.9629 6.11916 33.3577C6.8049 34.7525 7.80165 35.9713 9.03265 36.9201L9.51246 37.2654L20.3095 44.6301L29.9108 38.0803H17.7708C17.0975 38.0803 16.4518 37.8128 15.9757 37.3367C15.4996 36.8606 15.2321 36.2149 15.2321 35.5416V25.3869H48.2351V35.5416C48.2351 36.2149 47.9676 36.8606 47.4915 37.3367C47.0154 37.8128 46.3697 38.0803 45.6964 38.0803L37.5218 38.0828C36.5393 39.3776 35.3461 40.52 33.9676 41.4593L20.3095 50.7737L6.65136 41.4618C4.60143 40.0642 2.92394 38.1869 1.76474 35.9933C0.605548 33.7997 -0.000256973 31.3561 8.17707e-08 28.875V8.21265C0.000306181 7.67176 0.173358 7.14511 0.493933 6.70946C0.814507 6.27381 1.26584 5.95193 1.78216 5.79075L20.3095 0Z'
										fill='url(#paint0_linear_123_709)'
									/>
									<defs>
										<linearGradient
											id='paint0_linear_123_709'
											x1='24.1175'
											y1='-2.92027e-06'
											x2='89.0295'
											y2='17.4529'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#FD5A14' />
											<stop
												offset='0.609375'
												stopColor='#FFF06B'
												stopOpacity='0.59'
											/>
											<stop
												offset='1'
												stopColor='#060ED0'
												stopOpacity='0.28'
											/>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<h3 className={styles.innerTitle}>Money Protection</h3>
						</li>
						<li className={styles.item}>
							<div className={styles.iconWrapper}>
								<svg
									width='53'
									height='46'
									viewBox='0 0 53 46'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M45.9567 45.6964H6.56525C4.75297 45.6964 3.20569 45.0589 1.92341 43.7838C0.641137 42.5088 0 40.9703 0 39.1683V13.0561C0 12.1721 0.316294 11.4071 0.948883 10.7611C1.58147 10.1151 2.35939 9.79208 3.28262 9.79208H27.9023C27.9023 9.55408 28.0989 9.07807 28.4921 8.36407C28.8854 7.65006 29.2701 6.98706 29.6462 6.37505L30.2617 5.50804C30.501 4.86204 30.9798 4.32653 31.6978 3.90153C32.4159 3.47653 33.1682 3.26403 33.9546 3.26403H46.2645C47.0851 3.26403 47.8545 3.47653 48.5726 3.90153C49.2906 4.32653 49.7694 4.86204 50.0087 5.50804C51.6842 7.68406 52.522 9.11207 52.522 9.79208V39.1683C52.522 40.9703 51.8808 42.5088 50.5986 43.7838C49.3163 45.0589 47.769 45.6964 45.9567 45.6964ZM32.8262 22.8482C32.8262 21.0462 32.1851 19.5077 30.9028 18.2326C29.6205 16.9576 28.0733 16.3201 26.261 16.3201C24.4487 16.3201 22.9014 16.9576 21.6192 18.2326C20.3369 19.5077 19.6957 21.0462 19.6957 22.8482C19.6957 24.1742 20.0804 25.3897 20.8498 26.4947C21.6192 27.5997 22.6193 28.3902 23.8503 28.8662L19.6957 39.1683H32.8262L28.6717 28.8662C29.9026 28.3902 30.9028 27.5997 31.6722 26.4947C32.4416 25.3897 32.8262 24.1742 32.8262 22.8482ZM2.35939 2.24402C2.59874 1.59801 3.07746 1.06251 3.79553 0.637505C4.51361 0.212502 5.26588 0 6.05234 0H18.3622C19.1828 0 19.9522 0.212502 20.6703 0.637505C21.3883 1.06251 21.8842 1.59801 22.1577 2.24402L24.6197 6.52805H0L2.35939 2.24402Z'
										fill='url(#paint0_linear_123_683)'
									/>
									<defs>
										<linearGradient
											id='paint0_linear_123_683'
											x1='26.261'
											y1='-2.62824e-06'
											x2='94.7991'
											y2='22.2952'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#05D2FF' />
											<stop
												offset='0.609375'
												stopColor='#253FE0'
												stopOpacity='0.619792'
											/>
											<stop
												offset='1'
												stopColor='#060ED0'
												stopOpacity='0.28'
											/>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<h3 className={styles.innerTitle}>Data Protection</h3>
						</li>
						<li className={styles.item}>
							<div className={styles.iconWrapper}>
								<svg
									width='49'
									height='49'
									viewBox='0 0 49 49'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M0 0H48.7428V48.7428H0V0ZM11.1702 18.2785C10.6316 18.2785 10.115 18.4925 9.73412 18.8734C9.35325 19.2543 9.13927 19.7709 9.13927 20.3095V40.619C9.13927 41.1576 9.35325 41.6742 9.73412 42.0551C10.115 42.436 10.6316 42.6499 11.1702 42.6499H37.5726C38.1112 42.6499 38.6278 42.436 39.0087 42.0551C39.3895 41.6742 39.6035 41.1576 39.6035 40.619V20.3095C39.6035 19.7709 39.3895 19.2543 39.0087 18.8734C38.6278 18.4925 38.1112 18.2785 37.5726 18.2785H34.5261V16.2476C34.5261 10.6391 29.9799 6.09285 24.3714 6.09285C18.7629 6.09285 14.2166 10.6391 14.2166 16.2476V18.2785H11.1702Z'
										fill='url(#paint0_linear_123_695)'
									/>
									<defs>
										<linearGradient
											id='paint0_linear_123_695'
											x1='24.3714'
											y1='-2.80346e-06'
											x2='89.4923'
											y2='18.4306'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#00DD9C' />
											<stop
												offset='0.609375'
												stopColor='#253FE0'
												stopOpacity='0.619792'
											/>
											<stop
												offset='1'
												stopColor='#060ED0'
												stopOpacity='0.28'
											/>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<h3 className={styles.innerTitle}>Fast & Secure</h3>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default WhyUs
