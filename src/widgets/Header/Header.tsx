"use client";

import { Tabs, ConfigProvider } from "antd";
import { useRouter, usePathname } from "next/navigation";
import { tabs } from "@/shared/config";

import styles from "./Header.module.css";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const activeTab =
    tabs.find((tab) => pathname.startsWith(tab.key) && tab.key !== "/")?.key ??
    "/";

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Anime</div>
      <nav>
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                itemColor: "#888",
                itemSelectedColor: "#fff",
                itemHoverColor: "#fff",
                itemActiveColor: "#666",
                // inkBarColor: "#fff",

                // horizontalItemGutter: 32,
                // horizontalItemPadding: "12px 18px",

                horizontalMargin: "0",

                titleFontSize: 16,
              },
            },
          }}
        >
          <Tabs
            className={styles.tabs}
            activeKey={activeTab}
            items={tabs}
            onChange={(key) => router.push(key)}
          />
        </ConfigProvider>
      </nav>
      <YoutubeFilled />
      <div className={styles.profile}>Profile</div>
    </header>
  );
};
