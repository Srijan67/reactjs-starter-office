import {
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Affix, ConfigProvider, Layout, Menu, Tag, theme } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jaypee_logo from "../assets/jaypee_logo.png";
import DashboardRoutes from "../routes/dashboardRoutes";
import AppRoutes from "../routes/appRoutes";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { customDark, customDefault } from "../constraints/theme";
import { navLinks } from "../constraints/sidebar";
const { Header, Sider, Content } = Layout;

const Sidebar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [checkLogin, setCheckLogin] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const selectedKey = location.pathname.substr(1);
    setSelectedKey(selectedKey || "home");
  }, [location.pathname]);

  const [selectedKey, setSelectedKey] = useState("home");
  const mytheme = isDarkMode ? customDark : customDefault;
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            ...mytheme,
          },
          components: {},
        }}
      >
        {checkLogin ? (
          <Layout
            style={{
              minHeight: "100vh",
              overflow: "hidden",
            }}
          >
            <Affix offsetTop={0}>
              <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                style={{
                  minHeight: "100vh",
                }}
              >
                <div className="flex justify-center items-center">
                  <img
                    className="h-10 w-22 ml-auto mr-auto mt-3 mb-2"
                    src={jaypee_logo}
                    alt="jaypee_logo"
                  />
                </div>
                <Menu
                  onClick={(e) => navigate(e.key)}
                  theme="dark"
                  mode="inline"
                  selectedKeys={[selectedKey]}
                  items={navLinks}
                />
              </Sider>
            </Affix>

            <Layout className="site-layout">
              <Header
                style={{
                  padding: 0,
                  background: "#001529",
                  paddingLeft: 10,
                  color: "#fff",
                  fontSize: 20,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: () => setCollapsed(!collapsed),
                  }
                )}
                <Tag
                  color="#fcac5c"
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <UserOutlined style={{ fontSize: 15 }} />
                  <span
                    style={{
                      marginLeft: 5,
                      fontSize: 14,
                      textTransform: "uppercase",
                    }}
                    className="font-medium"
                  >
                    Admin@gmail.com
                  </span>
                </Tag>
                {isDarkMode ? (
                  <button
                    onClick={() => setIsDarkMode(false)}
                    className="h-8 w-8 p-1 bg-transparent border-none rounded-full cursor-pointer"
                  >
                    <img className="h-6 w-6" src={sun} alt="theme_change" />
                  </button>
                ) : (
                  <button
                    onClick={() => setIsDarkMode(true)}
                    className=" bg-white pr-1 pt-1 pl-1 rounded-full cursor-pointer"
                  >
                    <img
                      className="h-5 w-5 bg-white rounded-full"
                      src={moon}
                      alt="theme_change"
                    />
                  </button>
                )}
                <Menu
                  style={{
                    marginRight: 20,
                    background: "#001529",
                  }}
                  onClick={() => {}}
                >
                  <Menu.Item>
                    <LoginOutlined
                      style={{ color: "#fff", fontWeight: "bolder" }}
                    />
                    <span style={{ color: "#fff" }}>Logout</span>
                  </Menu.Item>
                </Menu>
              </Header>
              <Content
                style={{
                  margin: "0 16px",
                }}
              >
                <DashboardRoutes />
              </Content>
            </Layout>
          </Layout>
        ) : (
          <AppRoutes />
        )}
      </ConfigProvider>
    </>
  );
};

export default Sidebar;
