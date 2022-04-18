import React from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:windi.css'
import '@purge-icons/generated'
import App from './App'
import './index.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
