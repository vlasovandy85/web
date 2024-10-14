import styles from "./contacts.module.scss";

const Contacts = () => {
	return (
		<div className={styles["contacts"]}>
			<h1 className={styles["contacts-title"]}>Контакты</h1>
			<div className={styles["contacts-wrapper"]}>
				<div className={styles["contacts-wrapper-item"]}>
					<h2 className={styles["contacts-wrapper-item-title"]}>Адрес:</h2>
					<p className={styles["contacts-wrapper-item-text"]}>
						г. Новокузнецк, Центральный район, ул. Кирова, здание 42.
					</p>
				</div>
				<div className={styles["contacts-wrapper-item"]}>
					<h2 className={styles["contacts-wrapper-item-title"]}>
						Электронная почта:
					</h2>
					<p className={styles["contacts-wrapper-item-text"]}>rector@sibsiu.ru</p>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
