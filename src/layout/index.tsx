import React, { useState } from "react";
import { DesktopOutlined, FileOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [getItem("Tom", "3"), getItem("Bill", "4"), getItem("Alex", "5")]),
  getItem("Team", "sub2", <TeamOutlined />, [getItem("Team 1", "6"), getItem("Team 2", "8")]),
  getItem("Files", "9", <FileOutlined />),
];

console.log(items);
const Index: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="h-dvh overflow-hidden ">
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className={`${collapsed ? "justify-center" : "justify-start"} m-2 p-2 text-white rounded-md  flex items-center gap-3`}>
          <img className="size-8" src="/antrex.svg" alt="logo" />
          {!collapsed && <p className="text-2xl text-white">Atrex</p>}
        </div>
        <Menu className="overflow-auto h-full " theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
      </Sider>
      <Layout className="h-dvh">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div></div>
        </Header>
        <Content className="p-4">
          <div className="p-4 bg-white rounded-md overflow-auto h-full">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
