"use client";

import { Tabs, ConfigProvider, Avatar } from "antd";
import { MehOutlined } from "@ant-design/icons";
import { useRouter, usePathname } from "next/navigation";
import { headerTabs, allTabs } from "@/shared/config";
import Image from "next/image";

import styles from "./Header.module.css";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const activeTab = headerTabs.find(
    (tab) => tab.key !== "/" && pathname?.startsWith(tab.key),
  )?.key;

  const homeLink = allTabs.find((tab) => tab.id === "home")?.key || "/";
  const profileLink =
    allTabs.find((tab) => tab.id === "profile")?.key || "/profile";

  return (
    <header className={styles.header}>
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
            Avatar: {},
          },
        }}
      >
        <Link href={homeLink} className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Next Anime List"
            width={50}
            height={50}
            priority
          />
          {/* <b>Next Anime List</b> */}
        </Link>
        <nav>
          <Tabs
            className={styles.tabs}
            activeKey={activeTab}
            items={headerTabs}
            onChange={(key) => router.push(key)}
          />
        </nav>
        <Link href={profileLink} className={styles.profile}>
          <Avatar
            className={styles.profileIcon}
            shape="circle"
            // icon={<MehOutlined />}
          />
        </Link>
      </ConfigProvider>
    </header>
  );
};
