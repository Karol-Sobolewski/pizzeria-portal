import React from 'react';
import styles from './Dashboard.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const RestaurantStats = () => {
  const columns = [
    { id: 'table', label: 'Table', minWidth: 50 },
    {
      id: 'name',
      label: 'Name',
      minWidth: 100,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'amount',
      label: 'Amount',
      minWidth: 100,
      align: 'center',
      format: (value) => value.toLocaleString('en-US', { style: 'currency', currency: 'PLN' }),
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 100,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];

  function createData(table, name, amount, status) {
    return { table, name, amount, status};
  }

  const rows = [
    createData(1, `Karol`, 30, `Paid`),
    createData(3, `Sylwia`, 20, `Delivered`),
    createData(2, `Agnieszka`, 20, `Ordered`),
    createData(2, `Gustaw`, 20, `Prepared`),
  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper className={styles.root}>
      <TableContainer className={styles.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default RestaurantStats;



