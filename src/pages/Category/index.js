import {
    FileOutlined,
    LeftCircleOutlined,
    LeftOutlined,
    RightOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { BarChartOutlined, CloudOutlined, DesktopMacOutlined, HomeOutlined } from '@material-ui/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Layouts from '~/layouts/DefaultLayout/LayoutsAdmin';
import './Category.scss';
// import '~/layouts/DefaultLayout/LayoutsAdmin.scss';

// import roadmapImg from '../../assets/image/devplus/roadmapdev1.png';
// import './onePlus.scss';

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
    getItem(<Link to="/admin/category">Category</Link>, '2', <DesktopMacOutlined />),
    getItem(<Link to="/popular">Popular</Link>, '3', <TeamOutlined />),
    getItem(<Link to="/cta">CTA</Link>, '4', <BarChartOutlined />),
    getItem(<Link to="/concern">Concern</Link>, '5', <CloudOutlined />),
    getItem(<Link to="/alumni">Alumni</Link>, '6', <FileOutlined />),
];

function Category() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider
                // style={{
                //     background: 'white',
                // }}
                className="site-layout-background"
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                width={160}
                style={{
                    paddingTop: '61px',
                    background: 'white',
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    // width: '50px',
                }}
                trigger={null}
            >
                {React.createElement(collapsed ? RightOutlined : LeftCircleOutlined, {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                })}
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
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
                        display: 'flex',
                        // zIndex: 1,
                        justifyContent: 'space-between',
                    }}
                >
                    <div className="home">
                        <a href="/" alt="">
                            <HomeOutlined className="home-icon" />
                        </a>
                    </div>
                    <h4 className="admin-title">Admin Page</h4>
                    <a href="/">
                        <img
                            className="header-logo"
                            alt="devpluslogo"
                            src="https://devplus.edu.vn/assets/images/devplus/Artboard_2.png"
                        />
                    </a>
                </Header>
                <Content className="content">
                    {/* <h5 className="item-title">About</h5> */}
                    <div
                        className="site-layout-background"
                        style={{
                            // padding: ,
                            minHeight: 360,
                        }}
                    >
                        {/* <Routes>
                                <Route path="/" element={<About />} />
                            </Routes> */}
                        <h2>Category Content</h2>
                        {/* {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                let Layout = LayoutsAdmin;

                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })} */}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Devplus 2022
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Category;
