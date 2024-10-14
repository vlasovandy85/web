"use client";
import data from "../../../../category.json"; // Путь к вашему JSON с товарами и категориями
import { notFound } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import styles from "./product.module.scss";
import { useEffect } from "react";

// Страница товара
const ProductPage = ({ params }) => {
	const { category, product } = params;
	const curCategory = data.find((cat) => cat.id === category);

	if (!curCategory) {
		notFound(); // Выводим 404, если категория не найдена
	}

	const curProduct = curCategory.products.find((prod) => prod.id === product);

	if (!curProduct) {
		notFound(); // Выводим 404, если товар не найден
	}

	useEffect(() => {
		document.title = `${curProduct.name} - СибГИУ`; // Установка заголовка страницы
	}, []);

	return (
		<main className={styles["product"]}>
			<Swiper
				cssMode={true}
				navigation={true}
				pagination={true}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className={styles["product-swiper"]}
			>
				{curProduct.imageUrl.map((image, i) => {
					return (
						<SwiperSlide key={image + i}>
							<Image src={image} alt={curProduct.name} width={560} height={560} />
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className={styles["product-wrapper"]}>
				<h1 className={styles["product-title"]}>{curProduct.name}</h1>
				<div className={styles["product-subwrapper"]}>
					<p className={styles["product-description"]}>{curProduct.description}</p>
					<p>
						Цена: <span>{curProduct.price}</span> руб.
					</p>
				</div>
				<button className={styles["product-button"]}>Купить</button>
			</div>
		</main>
	);
};

export default ProductPage;
