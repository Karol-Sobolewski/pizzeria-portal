import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
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
//import DateFnsUtils from '@date-io/date-fns';
/*import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
*/


const Tables = (id) => {
  //const [selectedDate, setSelectedDate] = React.useState(new Date('2020-07-29T12:00:00'));

  /*const handleDateChange = (date) => {
    setSelectedDate(date);
  };
*/
  const demoContent = [
    {id: 1, hour: '12:00', table1: 'free', table2: 'occupied', table3: `occupied`},
    {id: 2, hour: '12:30', table1: 'free', table2: 'occupied', table3: `free`},
    {id: 3, hour: '13:00', table1: 'free', table2: 'free', table3: `occupied`},
    {id: 4, hour: '13:30', table1: 'occupied', table2: 'occupied', table3: `free`},
    {id: 5, hour: '14:00', table1: 'free', table2: 'free', table3: `occupied`},
    {id: 6, hour: '14:30', table1: 'free', table2: 'occupied', table3: `occupied`},
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
            {/*<MuiPickersUtilsProvider >
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                //value={selectedDate}
                //onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              </MuiPickersUtilsProvider>*/}
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
        {/*<Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <Link to={`tables/booking/2`} className={styles.link}>Booking ID:</Link>
            <Tooltip title="New Booking" aria-label="new-booking">
              <Fab color="secondary" className={styles.absolute} component = {Link} exact to={`tables/booking/new`}>
                <AddIcon/>
              </Fab>
            </Tooltip>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <Link to={`events/events/3`} className={styles.link}>Event ID:</Link>
            <Tooltip title="New Event" aria-label="new-event">
              <Fab color="secondary" className={styles.absolute} component = {Link} exact to={`tables/events/new`}>
                <AddIcon/>
              </Fab>
            </Tooltip>
          </Paper>
        </Grid>
        */}
      </Grid>
    </div>

  );
};

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;
