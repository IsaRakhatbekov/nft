import Image from 'next/image'
import creatorsImg from '../../../../public/images/CreatorsBg.png'
import styles from './Creators.module.scss'

const Creators = () => {
	return (
		<div className={styles.Creators}>
			<div className={`{styles.container} container`}>
				<h2 className={`${styles.title} def-title`}>Top Creators</h2>
				<div className={styles.imgWrapper}>
					<Image src={creatorsImg} alt='creators' width={1200} height={580} />
				</div>
				<button className={`${styles.btn} def-btn`}>View All Collectors</button>
			</div>
		</div>
	)
}

export default Creators
