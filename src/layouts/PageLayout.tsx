import { Layout } from 'antd';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import LogoIcon from '../assets/logo.svg';

const { Header, Content, Footer } = Layout;

export const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <Link to={'/'}>
                    <img src={LogoIcon} alt='Star Wars Guide' height={50} width={83} />
                </Link>
            </Header>
            <Content style={{ padding: '24px 48px', flexGrow: 1 }}>{children}</Content>
            <Footer style={{ textAlign: 'center' }}>&copy; Star Wars</Footer>
        </Layout>
    );
};
