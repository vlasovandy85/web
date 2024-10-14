import Link from "next/link";
import styles from "./address.module.scss";
const Address = () => {
	return (
		<div className={styles["address"]}>
			<h1>Адреса магазинов</h1>
			<p>
				Приобрести продукцию можно онлайн в{" "}
				<Link href="/" className={styles["address-link"]}>
					интернет-магазине
				</Link>{" "}
				или в отделении нашего вуза СибГИУ, который отмечен на карте.
			</p>
			<iframe
				src="https://yandex.ru/map-widget/v1/?um=constructor%3Abe10fe863560ceb298c6f7971f0149735ca91f9eee3ab49c2f5c5f6121c6365d&amp;source=constructor"
				width="80%"
				height="700px"
				frameBorder="0"
			></iframe>
		</div>
	);
};

export default Address;
