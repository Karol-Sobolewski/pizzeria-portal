import React from 'react';
import styles from './Dashboard.module.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeliveryStats from './DeliveryStats';
import RestaurantStats from './RestaurantStats';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Dashboard = () => {
  const demoContent = [
    {id: 1, table: '1', hourStart: '12:00', hourEnd: '15:00', name: 'Monika', contact: '12345789 / monika@gmail.com', reservation: 'Private'},
    {id: 2, table: '2', hourStart: '12:00', hourEnd: '13:00', name: 'Comarch', contact: '789456132 / evemts@comarch.pl', reservation: 'Event'},
  ];

  const renderActions = status => {
    switch (status) {
      case 'free':
        return (
          <>
            <Button>Free</Button>
          </>
        );
      case 'occupied':
        return (
          <Button>Occupied</Button>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.component}>
      <h2>Dashboard view</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <RestaurantStats />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <DeliveryStats />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Paper className={styles.paper}>
              <Paper className={styles.component}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Table</TableCell>
                      <TableCell>Start</TableCell>
                      <TableCell>End</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Contact</TableCell>
                      <TableCell>Reservation</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {demoContent.map(row => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.table}
                        </TableCell>
                        <TableCell>
                          {row.hourStart}
                        </TableCell>
                        <TableCell>
                          {row.hourEnd}
                        </TableCell>
                        <TableCell>
                          {row.name}
                        </TableCell>
                        <TableCell>
                          {row.contact}
                        </TableCell>
                        <TableCell>
                          {row.reservation}
                        </TableCell>
                        <TableCell>
                          <IconButton aria-label="delete">
                            <EditIcon fontSize="large" />
                          </IconButton>
                          <IconButton aria-label="delete">
                            <DeleteIcon fontSize="large" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
