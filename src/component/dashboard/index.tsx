import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    BarChartOutlined,
    SettingOutlined,
    UserOutlined,
    StockOutlined,
    FormOutlined,
    AppstoreOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Avatar, Dropdown, message } from "antd";
import { useNavigate } from "react-router-dom";
import DashboardHome from "../../pages/admin/dashboard/index";
import WithDraw from "../../pages/admin/withdraw/index";
import SalesReport from "../../pages/admin/sales-report";
import Settings from "../../pages/Setting";
import Manage from "../../pages/admin/manage/index";

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedPage, setSelectedPage] = useState("dashboard");
    const navigate = useNavigate(); // Điều hướng

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // Hàm để render trang tương ứng khi chọn menu
    const renderContent = () => {
        switch (selectedPage) {
            case "dashboard":
                return <DashboardHome />;
            case "withdraw":
                return <WithDraw />;
            case "salesreport":
                return <SalesReport />;
            case "manage":
                return <Manage />;
            case "settings":
                return <Settings />;
            default:
                return <DashboardHome />;
        }
    };

    // Xử lý Logout
    const handleLogout = () => {
        message.success("Logged out successfully!");
        setTimeout(() => {
            navigate("/"); // Điều hướng về trang Login
        }, 1000);
    };

    // Menu dropdown khi click vào Avatar
    const userMenu = (
        <Menu
            items={[
                { key: "profile", icon: <BarChartOutlined />, label: "Profile" },
                { key: "settings", icon: <SettingOutlined />, label: "Settings" },
                { key: "logout", icon: <LogoutOutlined />, label: "Logout", onClick: handleLogout },
            ]}
        />
    );

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="text-white text-center py-4 text-xl font-bold">
                    {collapsed ? "D" : "Dashboard"}
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedPage]}
                    onClick={(e) => setSelectedPage(e.key)}
                >
                    <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="withdraw" icon={<BarChartOutlined />}>
                        WithDraw
                    </Menu.Item>
                    <Menu.Item key="salesreport" icon={<StockOutlined />}>
                        Sales Report
                    </Menu.Item>
                    <Menu.Item key="manage" icon={<FormOutlined />}>
                        Manage
                    </Menu.Item>
                    <Menu.Item key="settings" icon={<SettingOutlined />}>
                        Settings
                    </Menu.Item>
                </Menu>
            </Sider>

            {/* Main Layout */}
            <Layout>
                {/* Header */}
                <Header
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0 16px",
                        background: colorBgContainer,
                    }}
                >
                    {/* Nút Toggle Sidebar */}
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ fontSize: "18px" }}
                    />

                    {/* Avatar & Dropdown Menu */}
                    <Dropdown overlay={userMenu} placement="bottomRight">
                        <Avatar
                            size="large"
                            icon={<UserOutlined />}
                            className="cursor-pointer"
                        />
                    </Dropdown>
                </Header>

                {/* Content */}
                <Content
                    style={{
                        margin: "16px",
                        padding: "24px",
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {renderContent()} {/* Hiển thị trang tương ứng */}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;