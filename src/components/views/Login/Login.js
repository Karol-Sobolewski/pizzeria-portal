import React from 'react';
import styles from './Login.module.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const Login = (/*{title}*/) => (
  <div className={styles.component}>
    <h2>Login view</h2>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={styles.paper}>
          <form>
            <input type="text"/>
            <input type="password"/>
            <Button className={styles.link} color="secondary" variant="contained" component = {Link} exact to={`${process.env.PUBLIC_URL}/`}>LOGIN</Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
    {/*<FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
      <Input
        id="standard-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      </FormControl>*/}

  </div>
);

/*Login.propTypes = {
  title: PropTypes.string,
};
*/
export default Login;
