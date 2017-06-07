import React from 'react';
import styles from './style.css';

const FormGroup = ({title, children}) => {

  return (
    <div className={`form-group ${styles.centerBlock}`}>
      <label htmlFor="none" className="col-sm-5 col-xs-3 control-label">
        { title }
      </label>
      <div className="col-sm-7 col-xs-9">
        { children }
      </div>
    </div>
  );
}

FormGroup.defaultProps = {
  title: '',
  children: undefined,
};

FormGroup.propTypes = {
  title: React.PropTypes.any,
  children: React.PropTypes.node,
};

export default FormGroup;