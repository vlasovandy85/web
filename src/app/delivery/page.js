import Image from "next/image";
import styles from "./delivery.module.scss";
const Delivery = () => {
	return (
		<div className={styles["delivery"]}>
			<h1 className={styles["delivery-title"]}>Доставка и оплата</h1>
			<div className={styles["delivery-wrapper"]}>
				<h2 className={styles["delivery-subtitle"]}>Способы доставки</h2>
				<div className={styles["delivery-subwrapper"]}>
					<div className={styles["delivery-subwrapper-item"]}>
						<Image
							src="/icons/delivery_man.svg"
							alt="delivery"
							width={60}
							height={60}
						/>
						<h3 className={styles["delivery-subwrapper-item-title"]}>
							Доставкой по России
						</h3>
						<p className={styles["delivery-subwrapper-item-text"]}>
							Стоимость доставки зависит от веса и местоположения. Узнать тарифы можно
							при оформлении заказа.
						</p>
					</div>
					<div className={styles["delivery-subwrapper-item"]}>
						<Image src="/icons/car.svg" alt="logo" width={60} height={60} />
						<h3 className={styles["delivery-subwrapper-item-title"]}>
							Почтой в любую точку мира
						</h3>
						<p className={styles["delivery-subwrapper-item-text"]}>
							Доставка «Почтой России» в более 200 стран мира. Стоимость зависит от
							местоположения и рассчитывается в момент оформления заказа.
						</p>
					</div>
					<div className={styles["delivery-subwrapper-item"]}>
						<Image src="/icons/get.svg" alt="logo" width={60} height={60} />
						<h3 className={styles["delivery-subwrapper-item-title"]}>Самовывоз</h3>
						<p className={styles["delivery-subwrapper-item-text"]}>
							Вы можете выбрать бесплатную доставку в любой отделении вуза СибГИУ.
						</p>
					</div>
				</div>
			</div>
			<div className={styles["delivery-wrapper"]}>
				<h2 className={styles["delivery-subtitle"]}>Методы оплаты</h2>
				<div className={styles["delivery-second-subwrapper"]}>
					<div className={styles["delivery-subwrapper-item"]}>
						<Image src="/icons/online.svg" alt="delivery" width={60} height={60} />
						<h3 className={styles["delivery-subwrapper-item-title"]}>Онлайн</h3>
						<p className={styles["delivery-subwrapper-item-text"]}>
							Мы принимаем платежи банковскими картами «Мир», Visa и Mastercard,
							выпущенным на территории РФ.
						</p>
					</div>
					<div className={styles["delivery-subwrapper-item"]}>
						<Image src="/icons/cash.svg" alt="logo" width={60} height={60} />
						<h3 className={styles["delivery-subwrapper-item-title"]}>
							При получении
						</h3>
						<p className={styles["delivery-subwrapper-item-text"]}>
							Вы можете оплатить заказ наличными или банковской картой при самовывозе в
							любом отделении вуза СибГИУ.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Delivery;
