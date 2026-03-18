import styles from './Create.module.scss'

const Create = () => {
	return (
		<div className={styles.Create}>
			<div className={`${styles.container} container`}>
				<h2 className={`${styles.title} def-title`}>
					Create And Sell Your NFTs
				</h2>

				<ul className={styles.list}>
					<li className={styles.item}>
						<div className={styles.iconWrapper}>
							<svg
								width='64'
								height='64'
								viewBox='0 0 64 64'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M9.33366 19.3334C8.96547 19.3334 8.66699 19.6319 8.66699 20V49.3334C8.66699 49.7016 8.96547 50 9.33366 50H54.667C55.0352 50 55.3337 49.7016 55.3337 49.3334V20C55.3337 19.6319 55.0352 19.3334 54.667 19.3334H9.33366ZM4.66699 20C4.66699 17.4227 6.75633 15.3334 9.33366 15.3334H54.667C57.2443 15.3334 59.3337 17.4227 59.3337 20V49.3334C59.3337 51.9107 57.2443 54 54.667 54H9.33366C6.75633 54 4.66699 51.9107 4.66699 49.3334V20Z'
									fill='url(#paint0_linear_123_635)'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M31.333 26.6666C31.333 25.5621 32.2284 24.6666 33.333 24.6666H57.333C58.4376 24.6666 59.333 25.5621 59.333 26.6666V41.3333C59.333 42.4379 58.4376 43.3333 57.333 43.3333H33.333C32.2284 43.3333 31.333 42.4379 31.333 41.3333V26.6666ZM35.333 28.6666V39.3333H55.333V28.6666H35.333Z'
									fill='url(#paint1_linear_123_635)'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M57.333 22C58.4376 22 59.333 22.8954 59.333 24V44C59.333 45.1046 58.4376 46 57.333 46C56.2284 46 55.333 45.1046 55.333 44V24C55.333 22.8954 56.2284 22 57.333 22Z'
									fill='url(#paint2_linear_123_635)'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M10.2699 10.2788C11.556 8.57251 13.6529 7.33337 16.667 7.33337H36.0003C37.3577 7.33337 39.5059 7.76669 41.3551 9.28951C43.2894 10.8825 44.667 13.4795 44.667 17.3334C44.667 18.4379 43.7716 19.3334 42.667 19.3334C41.5624 19.3334 40.667 18.4379 40.667 17.3334C40.667 14.5206 39.7112 13.1176 38.8122 12.3772C37.8281 11.5667 36.6429 11.3334 36.0003 11.3334H16.667C14.8811 11.3334 13.978 12.0047 13.4641 12.6865C12.8776 13.4646 12.667 14.4486 12.667 15.0647V17.3334C12.667 18.4379 11.7716 19.3334 10.667 19.3334C9.56242 19.3334 8.66699 18.4379 8.66699 17.3334V15.0647C8.66699 13.7703 9.05637 11.8887 10.2699 10.2788Z'
									fill='url(#paint3_linear_123_635)'
								/>
								<path
									d='M44.667 36C45.7716 36 46.667 35.1046 46.667 34C46.667 32.8954 45.7716 32 44.667 32C43.5624 32 42.667 32.8954 42.667 34C42.667 35.1046 43.5624 36 44.667 36Z'
									fill='url(#paint4_linear_123_635)'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_123_635'
										x1='4.66699'
										y1='15.3334'
										x2='59.9917'
										y2='16.299'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
									<linearGradient
										id='paint1_linear_123_635'
										x1='31.333'
										y1='24.6666'
										x2='59.669'
										y2='25.1914'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
									<linearGradient
										id='paint2_linear_123_635'
										x1='55.333'
										y1='22'
										x2='59.3824'
										y2='22.0083'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
									<linearGradient
										id='paint3_linear_123_635'
										x1='8.66699'
										y1='7.33337'
										x2='45.0615'
										y2='8.68132'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
									<linearGradient
										id='paint4_linear_123_635'
										x1='42.667'
										y1='32'
										x2='46.7158'
										y2='32.05'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<h3 className={styles.innerTitle}>Set Up Your Wallet</h3>
						<p className={styles.text}>
							Once you’ve set up your wallet of choice, connect it to OpenSea by
							clicking the wallet icon in the top right corner. Learn about the
							wallets we support.
						</p>
					</li>
					<li className={styles.item}>
						<div className={styles.iconWrapper}>
							<svg
								width='64'
								height='64'
								viewBox='0 0 64 64'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6 38.6666C6 37.5621 6.89543 36.6666 8 36.6666H26.6667C27.7712 36.6666 28.6667 37.5621 28.6667 38.6666V57.3333C28.6667 58.4379 27.7712 59.3333 26.6667 59.3333H8C6.89543 59.3333 6 58.4379 6 57.3333V38.6666ZM10 40.6666V55.3333H24.6667V40.6666H10Z'
									fill='url(#paint0_linear_123_646)'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M32.0003 3.33337C32.7091 3.33337 33.3649 3.70846 33.7242 4.31933L47.0575 26.986C47.4213 27.6044 47.4259 28.3702 47.0698 28.993C46.7136 29.6158 46.0511 30 45.3337 30H18.667C17.9496 30 17.2871 29.6158 16.9309 28.993C16.5747 28.3702 16.5794 27.6044 16.9431 26.986L30.2765 4.31933C30.6358 3.70846 31.2916 3.33337 32.0003 3.33337ZM22.1638 26H41.8368L32.0003 9.27799L22.1638 26Z'
									fill='url(#paint1_linear_123_646)'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M47.9997 39.3334C43.2132 39.3334 39.333 43.2136 39.333 48C39.333 52.7865 43.2132 56.6667 47.9997 56.6667C52.7861 56.6667 56.6663 52.7865 56.6663 48C56.6663 43.2136 52.7861 39.3334 47.9997 39.3334ZM35.333 48C35.333 41.0044 41.0041 35.3334 47.9997 35.3334C54.9953 35.3334 60.6663 41.0044 60.6663 48C60.6663 54.9956 54.9953 60.6667 47.9997 60.6667C41.0041 60.6667 35.333 54.9956 35.333 48Z'
									fill='url(#paint2_linear_123_646)'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_123_646'
										x1='6'
										y1='36.6666'
										x2='28.943'
										y2='36.9499'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
									<linearGradient
										id='paint1_linear_123_646'
										x1='16.667'
										y1='3.33337'
										x2='47.706'
										y2='3.77405'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
									<linearGradient
										id='paint2_linear_123_646'
										x1='35.333'
										y1='35.3334'
										x2='60.9752'
										y2='35.6499'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<h3 className={styles.innerTitle}>Create Your Collection</h3>
						<p className={styles.text}>
							Click My Collections and set up your collection. Add social links,
							a description, profile & banner images, and set a secondary sales
							fee.
						</p>
					</li>
					<li className={styles.item}>
						<div className={styles.iconWrapper}>
							<svg
								width='64'
								height='64'
								viewBox='0 0 64 64'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6 12C6 8.6863 8.6863 6 12 6H52C55.3138 6 58 8.68632 58 12V52C58 55.3138 55.3138 58 52 58H12C8.68632 58 6 55.3138 6 52V12ZM12 10C10.8954 10 10 10.8954 10 12V52C10 53.1046 10.8954 54 12 54H52C53.1046 54 54 53.1046 54 52V12C54 10.8954 53.1046 10 52 10H12Z'
									fill='url(#paint0_linear_123_653)'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M15.333 24C15.333 19.2136 19.2132 15.3334 23.9997 15.3334C28.7861 15.3334 32.6663 19.2136 32.6663 24C32.6663 28.7865 28.7861 32.6667 23.9997 32.6667C19.2132 32.6667 15.333 28.7865 15.333 24ZM23.9997 19.3334C21.4224 19.3334 19.333 21.4227 19.333 24C19.333 26.5773 21.4224 28.6667 23.9997 28.6667C26.577 28.6667 28.6663 26.5773 28.6663 24C28.6663 21.4227 26.577 19.3334 23.9997 19.3334Z'
									fill='url(#paint1_linear_123_653)'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M38.6554 36.1562C38.6553 36.1562 38.6553 36.1562 38.6553 36.1562L25.3238 54H50.8891C51.4279 54 51.7442 53.394 51.4361 52.952C51.4361 52.952 51.4361 52.952 51.436 52.952L39.7364 36.1739C39.4764 35.8011 38.9275 35.792 38.6554 36.1562ZM35.451 33.762C37.3556 31.2129 41.1971 31.2756 43.0174 33.8859L43.0174 33.8859L54.7171 50.6641L54.7172 50.6641C56.8743 53.7579 54.6608 58 50.8891 58H21.333C20.5761 58 19.8841 57.5728 19.545 56.8961C19.2059 56.2195 19.2778 55.4093 19.7308 54.803L35.4509 33.7621L35.451 33.762Z'
									fill='url(#paint2_linear_123_653)'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_123_653'
										x1='6'
										y1='6'
										x2='58.634'
										y2='6.6498'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
									<linearGradient
										id='paint1_linear_123_653'
										x1='15.333'
										y1='15.3334'
										x2='32.8777'
										y2='15.55'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
									<linearGradient
										id='paint2_linear_123_653'
										x1='19.333'
										y1='31.8885'
										x2='56.0005'
										y2='32.5167'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<h3 className={styles.innerTitle}>Add Your NFTs</h3>
						<p className={styles.text}>
							Upload your work (image, video, audio, or 3D art), add a title and
							description, and customize your NFTs with properties, stats, and
							unlockable content.
						</p>
					</li>
					<li className={styles.item}>
						<div className={styles.iconWrapper}>
							<svg
								width='64'
								height='64'
								viewBox='0 0 64 64'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M5.1442 21.3701C5.52419 20.9238 6.08085 20.6666 6.66701 20.6666H57.3337C57.9198 20.6666 58.4765 20.9238 58.8565 21.3701C59.2365 21.8164 59.4016 22.4069 59.3081 22.9856L53.7081 57.6522C53.5516 58.6211 52.7151 59.3333 51.7337 59.3333H12.267C11.2855 59.3333 10.4491 58.6211 10.2926 57.6522L4.6926 22.9856C4.59913 22.4069 4.76421 21.8164 5.1442 21.3701ZM9.01601 24.6666L13.9699 55.3333H50.0308L54.9847 24.6666H9.01601Z'
									fill='url(#paint0_linear_123_658)'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M15.333 22.6666C15.333 12.8929 22.6347 4.66663 31.9997 4.66663C41.3646 4.66663 48.6663 12.8929 48.6663 22.6666C48.6663 23.7712 47.7709 24.6666 46.6663 24.6666C45.5618 24.6666 44.6663 23.7712 44.6663 22.6666C44.6663 14.7673 38.835 8.66663 31.9997 8.66663C25.1644 8.66663 19.333 14.7673 19.333 22.6666C19.333 23.7712 18.4376 24.6666 17.333 24.6666C16.2284 24.6666 15.333 23.7712 15.333 22.6666Z'
									fill='url(#paint1_linear_123_658)'
								/>
								<path
									d='M22.6667 37.3333C24.1394 37.3333 25.3333 36.1394 25.3333 34.6667C25.3333 33.1939 24.1394 32 22.6667 32C21.1939 32 20 33.1939 20 34.6667C20 36.1394 21.1939 37.3333 22.6667 37.3333Z'
									fill='url(#paint2_linear_123_658)'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M25.6565 42.879C25.0412 41.9694 23.806 41.7257 22.8908 42.3359C21.9718 42.9486 21.7234 44.1903 22.3361 45.1094L24.0002 44C22.3361 45.1094 22.3366 45.1101 22.3371 45.1109L22.3382 45.1126L22.3406 45.1161L22.3462 45.1244L22.3605 45.1453L22.4016 45.2039C22.4345 45.2503 22.4788 45.311 22.5343 45.3839C22.6453 45.5296 22.8022 45.7252 23.0054 45.9537C23.4103 46.4092 24.0074 47.0053 24.8002 47.6C26.3919 48.7937 28.8025 50 32.0002 50C35.1979 50 37.6085 48.7937 39.2002 47.6C39.993 47.0053 40.5901 46.4092 40.995 45.9537C41.1982 45.7252 41.3551 45.5296 41.4661 45.3839C41.5216 45.311 41.5659 45.2503 41.5989 45.2039L41.64 45.1453L41.6542 45.1244L41.6598 45.1161L41.6622 45.1126L41.6633 45.1109C41.6638 45.1101 41.6643 45.1094 40.0002 44L41.6643 45.1094C42.277 44.1903 42.0287 42.9486 41.1096 42.3359C40.1944 41.7257 38.9593 41.9694 38.3439 42.879C38.3446 42.878 38.3449 42.8775 38.3449 42.8775L38.3448 42.8776L38.3423 42.8814L38.3397 42.8853L38.3391 42.8858C38.3413 42.8827 38.3429 42.8804 38.3439 42.879C38.3416 42.8824 38.3393 42.8857 38.3371 42.8891L38.338 42.8877L38.3391 42.8858C38.3304 42.8981 38.3121 42.9233 38.2843 42.9598C38.2287 43.0328 38.1356 43.1498 38.0054 43.2962C37.7436 43.5907 37.3407 43.9946 36.8002 44.4C35.7252 45.2062 34.1359 46 32.0002 46C29.8645 46 28.2752 45.2062 27.2002 44.4C26.6597 43.9946 26.2568 43.5907 25.995 43.2962C25.8648 43.1498 25.7717 43.0328 25.7161 42.9598C25.6883 42.9233 25.6701 42.8981 25.6614 42.8858C25.6591 42.8827 25.6575 42.8804 25.6566 42.879'
									fill='url(#paint3_linear_123_658)'
								/>
								<path
									d='M41.3337 37.3333C42.8064 37.3333 44.0003 36.1394 44.0003 34.6667C44.0003 33.1939 42.8064 32 41.3337 32C39.8609 32 38.667 33.1939 38.667 34.6667C38.667 36.1394 39.8609 37.3333 41.3337 37.3333Z'
									fill='url(#paint4_linear_123_658)'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_123_658'
										x1='4.66699'
										y1='20.6666'
										x2='59.9917'
										y2='21.6323'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
									<linearGradient
										id='paint1_linear_123_658'
										x1='15.333'
										y1='4.66663'
										x2='49.0636'
										y2='5.36067'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
									<linearGradient
										id='paint2_linear_123_658'
										x1='20'
										y1='32'
										x2='25.3984'
										y2='32.0666'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
									<linearGradient
										id='paint3_linear_123_658'
										x1='22'
										y1='41.9998'
										x2='42.2281'
										y2='42.6241'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
									<linearGradient
										id='paint4_linear_123_658'
										x1='38.667'
										y1='32'
										x2='44.0653'
										y2='32.0666'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#73E0A9' />
										<stop offset='1' stopColor='#5B68DF' />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<h3 className={styles.innerTitle}>List Them For Sale</h3>
						<p className={styles.text}>
							Choose between auctions, fixed-price listings, and declining-price
							listings. You choose how you want to sell your NFTs, and we help
							you sell them!
						</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Create
