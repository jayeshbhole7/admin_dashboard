import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DataTable from '../tables/table';
import Charts from '../charts/charts';
import Calendar from '../calender/calender';
import Kanban from '../kanban/kanban';

const Dashboard = () => {
  return (
    <div className="flex">
      <nav className="fixed inset-y-0 left-0 w-60 flex-shrink-0 bg-gray-800 p-5">
        <div className="text-white text-xl mb-5">Admin Dashboard</div>
        <ul className="mt-5">
          {['Dashboard', 'Table', 'Charts', 'Calendar', 'Kanban'].map((text) => (
            <li key={text} className="mb-2">
              <Link to={`/${text.toLowerCase()}`} className="text-white py-2 block hover:bg-gray-700 rounded">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-grow p-3 ml-60 bg-gray-100">
        <Routes>
          <Route path="/table" element={<DataTable />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/" element={<div className="p-4">Welcome to the Admin Dashboard</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;