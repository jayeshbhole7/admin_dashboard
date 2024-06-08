import React from 'react';
import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import DataTable from '../tables/table';
import Charts from '../charts/charts';
import Calendar from '../calender/calender';
import Kanban from '../kanban/kanban';


const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Dashboard', 'Table', 'Charts', 'Calendar', 'Kanban'].map((text, index) => (
              <ListItem button component={Link} to={`/${text.toLowerCase()}`} key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Routes>
          <Route path="/table" element={<DataTable />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/" element={<Typography paragraph>Welcome to the Admin Dashboard</Typography>} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Dashboard;
