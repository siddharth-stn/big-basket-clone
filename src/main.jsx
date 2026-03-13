import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import CommonLayout from './components/common/CommonLayout';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode >,
)
