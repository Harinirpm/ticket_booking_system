import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './index.css'
import Routes from './routes/Routes.tsx'

const AppRoute:React.FC = () => {
  const element = useRoutes(Routes);
  return element;
}
const routes = createRoot(document.getElementById('root')!);
routes.render(
  <StrictMode>
    
    <BrowserRouter>
    <AppRoute />
    </BrowserRouter>
   
  </StrictMode>,
)
