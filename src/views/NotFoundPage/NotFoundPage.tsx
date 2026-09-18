import Link from "next/link";

import styles from "./NotFoundPage.module.css"

export const NotFoundPage = () => {
  return (
    <main className={`page ${styles.page}`}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>

        <h2 className={styles.title}>
          Страница не найдена
        </h2>

        <p className={styles.description}>
          Похоже, такой страницы у нас нет.
        </p>

        <Link href="/catalog" className={styles.button}>
          Вернуться в каталог
        </Link>
      </div>
    </main>
  );
}