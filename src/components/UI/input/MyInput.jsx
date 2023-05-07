import React, { forwardRef } from 'react';
import classes from './MyInput.module.css';

export const MyInput = forwardRef((props, ref) => (
  <input className={classes.myInput} {...props} ref={ref} />
));
