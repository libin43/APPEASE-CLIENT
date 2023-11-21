import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { App } from './App'
import { ServerError } from './pages/ServerError'
import { Provider } from 'react-redux'
import { store } from './redux/store/configStore'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ErrorBoundary FallbackComponent={ServerError}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  // </React.StrictMode>,
)
