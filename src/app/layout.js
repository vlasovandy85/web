"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import data from "../../category.json";
import "@/app/styles/globals.scss";
import styles from "./layout.module.scss";

export default function RootLayout({ children }) {
	const pathname = usePathname();
	return (
		<html lang="ru">
			<head>
				<title>СибГИУ - магазин сувениров</title>
				<meta
					name="description"
					content="СибГИУ - магазин сувениров для каждого студента"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<nav className={styles["nav"]}>
					<div className={styles["nav-wrapper"]}>
						<Image
							className={styles["nav-logo"]}
							src="/img/logo-full.png"
							alt="logo"
							width={300}
							height={100}
						/>
						<div className={styles["nav-list"]}>
							<div className={styles["nav-list-wrapper"]}>
								<Link
									href="/address"
									className={
										pathname === "/address"
											? styles["nav-list-item-active"]
											: styles["nav-list-item"]
									}
								>
									Где купить?
								</Link>
								<Link
									href="/delivery"
									className={
										pathname === "/delivery"
											? styles["nav-list-item-active"]
											: styles["nav-list-item"]
									}
								>
									Доставка и оплата
								</Link>
								<Link
									href="/contacts"
									className={
										pathname === "/contacts"
											? styles["nav-list-item-active"]
											: styles["nav-list-item"]
									}
								>
									Контакты
								</Link>
							</div>
						</div>
					</div>
					<div className={styles["nav-goods"]}>
						<ul className={styles["nav-goods-wrapper"]}>
							<li
								className={
									pathname === "/"
										? styles["nav-goods-item-active"]
										: styles["nav-goods-item"]
								}
							>
								<Link href="/">Весь каталог</Link>
							</li>
							{data.map((item) => (
								<li
									key={item.id}
									className={
										pathname === `/${item.id}`
											? styles["nav-goods-item-active"]
											: styles["nav-goods-item"]
									}
								>
									<Link href={`/${item.id}`}>{item.name}</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
				{children}
				<footer className={styles["footer"]}>
					<div className={styles["footer-social"]}>
						<a href="https://vk.com/sibsiu" target="_blank">
							<FontAwesomeIcon icon={faVk} />
						</a>
						<a href="https://t.me/sibsiu" target="_blank">
							<FontAwesomeIcon icon={faTelegram} />
						</a>
					</div>
					<div className={styles["footer-copyright"]}>
						{`© ${new Date().getFullYear()} СибГИУ. Все права защищены.`}
					</div>
					<div className={styles["footer-contacts"]}>
						г. Новокузнецк ФГБОУ ВО «Сибирский государственный индустриальный
						университет» Российская Федерация
					</div>
				</footer>
			</body>
		</html>
	);
}
