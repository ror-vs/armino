import { Menu, Typography, Button, Drawer } from "antd";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const { SubMenu } = Menu;
const { Text } = Typography;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    setVisible({ current: e.key });
  };
  return (
    <div>
      <div
        className={styles.miandiv}
        style={{
          float: "left",
          width: "220px",
          height: "31px",
          // margin: "0px 24px 16px 0",
          background: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <a href="/">
          <p> Arrimo</p>
        </a>
      </div>
      <>
        <Button
          className={styles.menubtn}
          type="primary"
          shape="circle"
          icon={<MenuOutlined />}
          onClick={handleClick}
        ></Button>
        <Drawer
          title="Arrimo"
          placement="right"
          onClose={() => setVisible(false)}
          visible={visible}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button type="text">Users</Button>
            <Button type="text">Events</Button>
          </div>
        </Drawer>
      </>

      <Menu
        className={styles.bigmenu}
        selectedKeys={[current]}
        mode="horizontal"
        overflowedIndicator={<MenuOutlined />}
      >
        <Menu.Item key="users">
          <Link href="/user"> Users </Link>
        </Menu.Item>
        <Menu.Item key="events">
          <Link href="/event"> Events </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default AppHeader;
