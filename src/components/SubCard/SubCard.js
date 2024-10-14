import styles from "./subcard.module.scss";
import Image from "next/image";
import Link from "next/link";

const SubCard = ({ id, title, img, price, url }) => {
	return (
		<Link href={`${url}/${id}`} className={styles["sub-card"]}>
			<Image src={img} alt={title} width={360} height={396} />
			<div className={styles["sub-card-wrapper"]}>
				<p className={styles["sub-card-text"]}>{title}</p>
				<p className={styles["sub-card-price"]}>{price}₽</p>
			</div>
		</Link>
	);
};

export default SubCard;
