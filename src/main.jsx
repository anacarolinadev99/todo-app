import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './media-768.css';
import './media-1024.css';
import './media-1440.css';

import { App } from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
