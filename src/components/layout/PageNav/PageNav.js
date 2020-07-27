import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageNav.module.scss';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const PageNav = ({children}) => (
  <nav className={styles.component}>
    <Button className={styles.link} component = {NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
    <Button className={styles.link} component = {NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
    <Button className={styles.link} component = {NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Button>
    <Button className={styles.link} component = {NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
    <Button className={styles.link} component = {NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
  </nav>
);

PageNav.propTypes = {
  children: PropTypes.node,
};

export default PageNav;
