"use client";
import data from "../../../category.json";
import SubCard from "@/components/SubCard/SubCard";
import styles from "./category.module.scss";
import { notFound } from "next/navigation";
import { useEffect } from "react";

// Компонент страницы
const CategoryPage = ({ params }) => {
	const { category } = params; // Получаем категорию из параметров маршрута

	// Найдем нужную категорию по id
	const curCategory = data.find((cat) => cat.id === category);

	// Если категория не найдена, выводим 404
	if (!curCategory) {
		notFound(); // Функция для рендеринга страницы 404
	}
	useEffect(() => {
		document.title = `${curCategory.name} - СибГИУ`; // Установка заголовка страницы
	}, []);

	return (
		<main className={styles["category"]}>
			<h1 className={styles["category-title"]}>{curCategory.name}</h1>
			<div className={styles["category-wrapper"]}>
				{curCategory.products.map((product) => (
					<SubCard
						key={product.id}
						id={product.id}
						title={product.name}
						img={product.imageUrl[0]}
						price={product.price}
						url={curCategory.id}
					/>
				))}
			</div>
		</main>
	);
};

export default CategoryPage;
