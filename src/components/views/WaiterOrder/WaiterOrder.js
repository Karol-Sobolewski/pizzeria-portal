import React from 'react';
import styles from './WaiterOrder.module.scss';
import Paper from '@material-ui/core/Paper';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const WaiterOrderNew = (/*{title}*/) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Paper className={styles.component}>
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
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          multiSelect
        >
          <TreeItem nodeId="1" label="Breakfast">
            <TreeItem nodeId="2" label="Toast 10$"/>
            <TreeItem nodeId="3" label="Coffee 5$" />
          </TreeItem>
          <TreeItem nodeId="5" label="Pizza 20$">
            <TreeItem nodeId="6" label="Extra crust 1$">
            </TreeItem>
            <TreeItem nodeId="7" label="Olives 0$">
              <FormControlLabel
                checked={checked}
                onChange={handleChange}
                value="start"
                control={<Checkbox color="primary" />}
                label="Pizza 20$"
                labelPlacement="start"
              />
            </TreeItem>
            <TreeItem nodeId="8" label="Pineapple 999$">
            </TreeItem>
          </TreeItem>
          <TreeItem nodeId="9" label="Salad 15$">
            <TreeItem nodeId="10" label="Olives 0$">
            </TreeItem>
          </TreeItem>
        Use with control to select multiple options
        </TreeView>
      </Paper>
      <Paper className={styles.paper} /*{styles.order}*/>
        <FormControl component="fieldset">
          <FormLabel component="legend">Table 1</FormLabel>
          <FormGroup aria-label="position" row>
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              multiSelect
            >
              <TreeItem nodeId="1" label="Pizza 20$">
                <FormControlLabel
                  checked={checked}
                  onChange={handleChange}
                  value="start"
                  control={<Checkbox color="primary" />}
                  label="Olives 0$"
                  labelPlacement="start"
                />
              </TreeItem>
              <TreeItem nodeId="2" label="Pizza 21$">
                <FormControlLabel
                  checked={checked}
                  onChange={handleChange}
                  value="start"
                  control={<Checkbox color="primary" />}
                  label="Extra crust 1$"
                  labelPlacement="start"
                />
                <FormControlLabel
                  checked={checked}
                  onChange={handleChange}
                  value="start"
                  control={<Checkbox color="primary" />}
                  label="Olives 0$"
                  labelPlacement="start"
                />
              </TreeItem>
            </TreeView>


          </FormGroup>
          Total: 41$
        </FormControl>
      </Paper>
      <Paper className={styles.paper}>
        <Button variant="contained" color="secondary">
        Order
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
