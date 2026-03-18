import Image from 'next/image'
import collections1 from '../../../../public/images/Collections-1.png'
import collections2 from '../../../../public/images/Collections-2.png'
import collections3 from '../../../../public/images/Collections-3.png'
import collections4 from '../../../../public/images/Collections-4.png'
import styles from './Collections.module.scss'

const Collections = () => {
	return (
		<div className={styles.Collections}>
			<div className={`${styles.container} container`}>
				<div className={styles.wrapper}>
					<ul className={styles.list}>
						<li className={styles.item}>
							<div className={styles.imgWrapper}>
								<Image src={collections1} alt='' width={190} height={190} />
							</div>
							<h3 className={styles.innerTitle}>Ancient Ones</h3>
							<div className={styles.inner}>
								<div className={styles.iconWrapper}>
									<svg
										width='15'
										height='24'
										viewBox='0 0 15 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M7.49736 0L0 12.2223L7.49736 8.87469V0Z'
											fill='white'
										/>
										<path
											d='M7.49736 8.87451L0 12.2221L7.49736 16.5769V8.87451Z'
											fill='white'
										/>
										<path
											d='M14.9958 12.2223L7.49707 0V8.87469L14.9958 12.2223Z'
											fill='white'
										/>
										<path
											d='M7.49707 16.5769L14.9958 12.2221L7.49707 8.87451V16.5769Z'
											fill='white'
										/>
										<path
											d='M0 13.6199L7.49736 23.9999V17.972L0 13.6199Z'
											fill='white'
										/>
										<path
											d='M7.49707 17.972V23.9999L15 13.6199L7.49707 17.972Z'
											fill='white'
										/>
									</svg>
								</div>
								<p className={styles.innerText}>5.0 ETH</p>
							</div>
						</li>
						<li className={styles.item}>
							<div className={styles.imgWrapper}>
								<Image src={collections2} alt='' width={190} height={190} />
							</div>
							<h3 className={styles.innerTitle}>Lost In Space</h3>
							<div className={styles.inner}>
								<div className={styles.iconWrapper}>
									<svg
										width='15'
										height='24'
										viewBox='0 0 15 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M7.49736 0L0 12.2223L7.49736 8.87469V0Z'
											fill='white'
										/>
										<path
											d='M7.49736 8.87451L0 12.2221L7.49736 16.5769V8.87451Z'
											fill='white'
										/>
										<path
											d='M14.9958 12.2223L7.49707 0V8.87469L14.9958 12.2223Z'
											fill='white'
										/>
										<path
											d='M7.49707 16.5769L14.9958 12.2221L7.49707 8.87451V16.5769Z'
											fill='white'
										/>
										<path
											d='M0 13.6199L7.49736 23.9999V17.972L0 13.6199Z'
											fill='white'
										/>
										<path
											d='M7.49707 17.972V23.9999L15 13.6199L7.49707 17.972Z'
											fill='white'
										/>
									</svg>
								</div>
								<p className={styles.innerText}>3.0 ETH</p>
							</div>
						</li>
						<li className={styles.item}>
							<div className={styles.imgWrapper}>
								<Image src={collections3} alt='' width={190} height={190} />
							</div>
							<h3 className={styles.innerTitle}>God of War</h3>
							<div className={styles.inner}>
								<div className={styles.iconWrapper}>
									<svg
										width='15'
										height='24'
										viewBox='0 0 15 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M7.49736 0L0 12.2223L7.49736 8.87469V0Z'
											fill='white'
										/>
										<path
											d='M7.49736 8.87451L0 12.2221L7.49736 16.5769V8.87451Z'
											fill='white'
										/>
										<path
											d='M14.9958 12.2223L7.49707 0V8.87469L14.9958 12.2223Z'
											fill='white'
										/>
										<path
											d='M7.49707 16.5769L14.9958 12.2221L7.49707 8.87451V16.5769Z'
											fill='white'
										/>
										<path
											d='M0 13.6199L7.49736 23.9999V17.972L0 13.6199Z'
											fill='white'
										/>
										<path
											d='M7.49707 17.972V23.9999L15 13.6199L7.49707 17.972Z'
											fill='white'
										/>
									</svg>
								</div>
								<p className={styles.innerText}>7.0 ETH</p>
							</div>
						</li>
						<li className={styles.item}>
							<div className={styles.imgWrapper}>
								<Image src={collections4} alt='' width={190} height={190} />
							</div>
							<h3 className={styles.innerTitle}>The Watchers</h3>
							<div className={styles.inner}>
								<div className={styles.iconWrapper}>
									<svg
										width='15'
										height='24'
										viewBox='0 0 15 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M7.49736 0L0 12.2223L7.49736 8.87469V0Z'
											fill='white'
										/>
										<path
											d='M7.49736 8.87451L0 12.2221L7.49736 16.5769V8.87451Z'
											fill='white'
										/>
										<path
											d='M14.9958 12.2223L7.49707 0V8.87469L14.9958 12.2223Z'
											fill='white'
										/>
										<path
											d='M7.49707 16.5769L14.9958 12.2221L7.49707 8.87451V16.5769Z'
											fill='white'
										/>
										<path
											d='M0 13.6199L7.49736 23.9999V17.972L0 13.6199Z'
											fill='white'
										/>
										<path
											d='M7.49707 17.972V23.9999L15 13.6199L7.49707 17.972Z'
											fill='white'
										/>
									</svg>
								</div>
								<p className={styles.innerText}>3.2 ETH</p>
							</div>
						</li>
					</ul>
					<div className={styles.content}>
						<h2 className={`${styles.title} def-title`}>
							Latest NFT Collections
						</h2>
						<p className={styles.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium
							lacus eget vulputate rhoncus.
						</p>
						<button className={`${styles.btn} def-btn`}>
							View All Collectors
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Collections
