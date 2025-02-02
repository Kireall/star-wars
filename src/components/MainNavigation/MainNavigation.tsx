import { Menu } from 'antd';
import React from 'react';

const items = new Array(1).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));
export const MainNavigation: React.FC = () => {
    return (
        <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['1']}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
        />
    );
};
