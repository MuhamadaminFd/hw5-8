import React from 'react';
import { BrowserRouter, Route, Outlet } from 'react-router-dom';
import bookListSlice from './bookListSlice'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/bookListSlice">text</Link>
            </li>
            <li>
            </li>
          </ul>
        </nav>
        {}
        <Outlet />
      </div>
      <Route path="/bookListSlice" element={<bookListSlice />} />
      
      
    </BrowserRouter>
  );
}


