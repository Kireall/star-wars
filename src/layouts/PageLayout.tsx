import { Layout } from 'antd';
import React, { ReactNode } from 'react';

import LogoIcon from '../assets/logo.svg';
import MainNavigation from '../components/MainNavigation/MainNavigation.tsx';

const { Header, Content, Footer } = Layout;

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <img src={LogoIcon} alt='Star Wars Guide' height={50} />
                <MainNavigation />
            </Header>
            <Content style={{ padding: 48, flexGrow: 1 }}>{children}</Content>
            <Footer style={{ textAlign: 'center' }}>&copy; Star Wars</Footer>
        </Layout>
    );
};

export default PageLayout;
