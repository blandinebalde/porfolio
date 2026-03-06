import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#080D3B', color: '#EEF0F8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Sora, sans-serif' }}>Loading…</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
