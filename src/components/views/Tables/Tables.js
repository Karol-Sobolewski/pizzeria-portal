import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';

const Tables = (id) => {

  const demoContent = [
    {id: 1, hour: '12:00', table1: 'free', table2: 'occupied', table3: `occupied`},
    {id: 2, hour: '12:30', table1: 'free', table2: 'occupied', table3: `free`},
    {id: 3, hour: '13:00', table1: 'free', table2: 'free', table3: `occupied`},
    {id: 4, hour: '13:30', table1: 'occupied', table2: 'occupied', table3: `free`},
    {id: 5, hour: '14:00', table1: 'free', table2: 'free', table3: `occupied`},
    {id: 6, hour: '14:30', table1: 'free', table2: 'occupied', table3: `occupied`},
    {id: 7, hour: '15:00', table1: 'free', table2: 'occupied', table3: `occupied`},
    {id: 8, hour: '15:30', table1: 'free', table2: 'occupied', table3: `occupied`},
    {id: 9, hour: '16:00', table1: 'free', table2: 'occupied', table3: `occupied`},
    {id: 10, hour: '16:30', table1: 'free', table2: 'occupied', table3: `occupied`},
    {id: 11, hour: '17:00', table1: 'free', table2: 'occupied', table3: `occupied`},
    {id: 12, hour: '17:30', table1: 'free', table2: 'occupied', table3: `occupied`},
    {id: 13, hour: '18:00', table1: 'free', table2: 'occupied', table3: `occupied`},
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
      <h2>Tables view</h2>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <form noValidate>
              <TextField
                id="date-begin"
                label="Date"
                type="date"
                defaultValue="2020-08-02"
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Paper className={styles.component}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Hour</TableCell>
                    <TableCell>Table 1</TableCell>
                    <TableCell>Table 2</TableCell>
                    <TableCell>Table 3</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {demoContent.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.hour}
                      </TableCell>
                      <TableCell>
                        {renderActions(row.table1)}
                      </TableCell>
                      <TableCell>
                        {renderActions(row.table2)}
                      </TableCell>
                      <TableCell>
                        {renderActions(row.table3)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <span>New Booking</span>
            {/*<Link to={`tables/booking/2`} className={styles.link}>New Booking</Link>*/}
            <Tooltip title="New booking" aria-label="new-booking">
              <Fab color="secondary" className={styles.fab} component = {Link} exact to={`tables/booking/new`}>
                <AddIcon/>
              </Fab>
            </Tooltip>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            {/*<Link to={`events/events/3`} className={styles.link}>Event ID:</Link>*/}
            <span>New Event</span>
            <Tooltip title="New event" aria-label="new-event">
              <Fab color="secondary" className={styles.fab} component = {Link} exact to={`tables/events/new`}>
                <AddIcon/>
              </Fab>
            </Tooltip>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tables;
