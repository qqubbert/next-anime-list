import {
  HomeOutlined,
  UnorderedListOutlined,
  TrophyOutlined,
  BookOutlined,
  MehOutlined,
  LoginOutlined,
} from "@ant-design/icons";

export const headerTabs = [
  {
    id: "home",
    key: "/",
    label: "Главная",
    icon: <HomeOutlined />,
  },
  {
    id: "catalog",
    key: "/catalog",
    label: "Каталог",
    icon: <UnorderedListOutlined />,
  },
  {
    id: "popular",
    key: "/popular",
    label: "Популярное",
    icon: <TrophyOutlined />,
  },
  {
    id: "library",
    key: "/library",
    label: "Моя библиотека",
    icon: <BookOutlined />,
  },
];

export const allTabs = [
  ...headerTabs,
  {
    id: "profile",
    key: "/profile",
    label: "Профиль",
    icon: <MehOutlined />,
  },
  {
    id: "login",
    key: "/login",
    label: "Авторизация",
    icon: <LoginOutlined />,
  },
  {
    id: "register",
    key: "/register",
    label: "Регистрация",
    icon: <LoginOutlined />,
  },
];
