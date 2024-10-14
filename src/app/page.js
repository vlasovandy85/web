import Image from "next/image";
import styles from "./page.module.scss";
import MainCard from "@/components/MainCard/MainCard";
import data from "../../public/main.json";

const Home = () => {
	const mainCards = data;
	return (
		<main className={styles["home"]}>
			<section className={styles["home-wrapper"]}>
				<div className={styles["home-subwrapper"]}>
					{mainCards.slice(0, 4).map((card) => (
						<MainCard
							key={card.title}
							title={card.title}
							img={card.img}
							size="small"
							url={card.url}
						/>
					))}
				</div>
				<div className={styles["home-subwrapper"]}>
					{mainCards.slice(4).map((card) => (
						<MainCard
							key={card.title}
							title={card.title}
							img={card.img}
							size="large"
							url={card.url}
						/>
					))}
				</div>
			</section>

			<section className={styles["home-about"]}>
				<h1 className={styles["home-about-title"]}>О магазине</h1>
				<p className={styles["home-about-description"]}>
					Приветствуем вас в официальном интернет-магазине сувенирной продукции
					Сибирского государственного индустриального университета! <br /> Здесь вы
					можете приобрести сувениры и памятные подарки с официальной символикой
					университета для коллег, партнёров или для себя. Эти стильные и удобные
					вещи будут радовать вас каждый день и напоминать о вашей связи с одним из
					ведущих технических вузов России, богатым своей историей и традициями.
				</p>
			</section>

			<section className={styles["home-delivery"]}>
				<div className={styles["home-delivery-item"]}>
					<Image src="/icons/take.svg" alt="take" width={60} height={60} />
					<p className={styles["home-delivery-item-text"]}>
						Вы можете забрать заказ самостоятельно в книжном магазине «Дом книги»
						СибГИУ или в одном из пунктов выдачи в Новокузнецке.
					</p>
				</div>
				<div className={styles["home-delivery-item"]}>
					<Image src="/icons/deliver.svg" alt="delivery" width={60} height={60} />
					<p className={styles["home-delivery-item-text"]}>
						Мы предлагаем доставку по всей России с помощью почтовых и курьерских
						служб, чтобы вы получили заказ в удобное для вас место.
					</p>
				</div>
				<div className={styles["home-delivery-item"]}>
					<Image src="/icons/payment.svg" alt="payment" width={60} height={60} />
					<p className={styles["home-delivery-item-text"]}>
						Оплатите заказ удобным для вас способом: онлайн через сайт или при
						получении в пункте выдачи.
					</p>
				</div>
			</section>
		</main>
	);
};

export default Home;
