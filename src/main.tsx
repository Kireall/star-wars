import { ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                hashed: false,
            }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    </StrictMode>
);
