import { FileOutlined, LeftOutlined, RightOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { BarChartOutlined, CloudOutlined, DesktopMacOutlined, HomeOutlined } from '@material-ui/icons';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import './LayoutAdmin.scss';
import About from '~/pages/About';
import Category from '~/pages/Category';
import { publicRoutes } from '~/routes';
// import { Lay } from './layouts';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem(<Link to="/admin/about">About</Link>, '1', <UserOutlined />),
    getItem(<Link to="/admin/banner">Banner</Link>, '2', <TeamOutlined />),
    getItem(<Link to="/admin/category">Category</Link>, '3', <DesktopMacOutlined />),
    getItem(<Link to="/admin/popular">Popular</Link>, '4', <TeamOutlined />),
    getItem(<Link to="/admin/cta">CTA</Link>, '5', <BarChartOutlined />),
    getItem(<Link to="/admin/navbar">navbar</Link>, '6', <CloudOutlined />),
    getItem(<Link to="/admin/alumni">Alumni</Link>, '7', <FileOutlined />),
    getItem(<Link to="/admin/concern">Concern</Link>, '8', <FileOutlined />),
];

const AdminLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider
                    // style={{
                    //     background: 'white',
                    // }}//rui sao
                    className="site-layout-background"
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                    width={160}
                    style={{
                        paddingTop: '61px',
                        background: 'white',
                        overflow: 'auto',
                        height: 'auto',
                        // position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        // width: '50px',
                    }}
                    trigger={null}
                >
                    {React.createElement(collapsed ? RightOutlined : LeftOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <Menu className="menu" theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>

                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                            background: 'white',
                            boxShadow: '0 2px 8px #f0f1f2',
                            width: '100%',
                            position: 'fixed',
                            left: 0,
                            zIndex: 1,
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div className="home">
                            <Link to={'/'}>
                                <HomeOutlined className="home-icon" />
                            </Link>
                        </div>
                        <h4 className="admin-title">Admin Page</h4>
                        <Link to={'/'}>
                            <img
                                className="header-logo"
                                alt="devpluslogo"
                                src="https://devplus.edu.vn/assets/images/devplus/Artboard_2.png"
                            />
                        </Link>
                    </Header>
                    <Content className="content">
                        <div className="site-layout-background"></div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    ></Footer>
                </Layout>
                <div className="content">{children}</div>
            </Layout>
        </div>
    );
};

export default AdminLayout;
