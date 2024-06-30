import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline  from "@mui/material/CssBaseline";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import theme from './themes/theme';
import  Dashboard  from "./components/Dashboard/dashBoard";
import DataTable from "./components/tables/table";
import Charts from "./components/charts/charts";
import Calendar from "./components/calender/calender";
import Kanban from "./components/kanban/kanban";

function App(){
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <Routes>
        <Route path="/table" element={<DataTable />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
