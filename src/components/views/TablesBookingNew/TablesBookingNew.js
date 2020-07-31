import React from 'react';
import styles from './TablesBookingNew.module.scss';
import Paper from '@material-ui/core/Paper';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const WaiterOrderNew = (/*{title}*/) => {
  // const [checked, setChecked] = React.useState(true);

  /*const handleChange = (event) => {
    setChecked(event.target.checked);
  };*/

  function valuetext(value) {
    return `${value}people`;
  }
  const [repeat, setAge] = React.useState('');

  const handleChangeRepeat = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = React.useState([12, 13]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setAge(event.target.value);
  };
  return (
    <Paper className={styles.component}>
      <Paper className={[styles.paper, styles.center]}>
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
      <Paper className={styles.paper}>
        <div>
          <Typography id="range-slider" gutterBottom>
        Hours
          </Typography>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            step={0.5}
            marks
            min={12}
            max={24}
          />
        </div>
      </Paper>
      <Paper className={styles.paper}>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem nodeId="1" label="Table">
            <TreeItem nodeId="2" label="1" />
            <TreeItem nodeId="3" label="2" />
            <TreeItem nodeId="4" label="3" />
          </TreeItem>
        </TreeView>
      </Paper>
      <Paper className={styles.paper}>
        <div>
          <Typography id="discrete-slider" gutterBottom>
        People
          </Typography>
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={9}
          />
        </div>
      </Paper>
      <Paper className={[styles.paper, styles.center]}>
        <Button variant="contained" color="secondary">
        Book
        </Button>
      </Paper>
    </Paper>
  );
};

/*Login.propTypes = {
  title: PropTypes.string,
};
*/
export default WaiterOrderNew;
