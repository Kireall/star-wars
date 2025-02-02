import { Typography } from 'antd';
import React from 'react';

import PageLayout from './layouts/PageLayout.tsx';

const { Title } = Typography;
const App: React.FC = () => {
    return (
        <PageLayout>
            <Title>Star Wars Guide</Title>
        </PageLayout>
    );
};

export default App;
