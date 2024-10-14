import styles from "@/app/page.module.scss";
import Image from "next/image";
const MainCard = ({ title, img, size, url }) => {
	return size === "small" ? (
		<a
			href={url}
			className={`${styles["home-card"]} ${styles["home-card-small"]}`}
		>
			<Image src={img} alt={title} width={260} height={185} />
			<div className={styles["home-card-overlay"]}>
				<div className={styles["home-card-overlay-backdrop"]}></div>
				<div className={styles["home-card-overlay-text"]}>{title}</div>
			</div>
		</a>
	) : (
		<a
			href={url}
			className={`${styles["home-card"]} ${styles["home-card-large"]}`}
		>
			<Image src={img} alt={title} width={360} height={257} />
			<div className={styles["home-card-overlay"]}>
				<div className={styles["home-card-overlay-backdrop"]}></div>
				<p className={styles["home-card-overlay-text"]}>{title}</p>
			</div>
		</a>
	);
};

export default MainCard;
