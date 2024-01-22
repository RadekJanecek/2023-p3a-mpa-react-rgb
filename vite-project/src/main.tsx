import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ColorSliderContextProvider from "./providers/ColorSliderContextProvicer.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*<ErrorBoundary>
      <StyleProvider>*/}
        <ColorSliderContextProvider>
          <App />
        </ColorSliderContextProvider>
      {/*</StyleProvider>
    </ErrorBoundary>*/}
  </React.StrictMode>,
)
