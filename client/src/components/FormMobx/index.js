/*
* This component is combined with FormMobx
* What 's I coding????'
*/
import React from 'react';
import { observer } from 'mobx-react';
import Box from 'components/Box';
import FormGroup from 'components/FormGroup';

@observer
export default class FormEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    }
  }

  render() {
    const { form, } = this.props;
    const EditBtn = (
      <span className="edit-btn"
        style={{ cursor: 'pointer' }}
        onClick={() => this.setState({isEditing: true,})}
      >
        Edit
        <div className="square"></div>
      </span>
    );
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        editing: this.state.isEditing || this.props.mode === mode.CREATE,
        form,
      })
    );
    const renderButton = () => {
      if(this.props.mode === mode.CREATE) {
          return (
            <div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.onSubmit(form.values());
                }}
                className="btn btn-success"
              >
                Create
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.history.back();
                }}
                className="btn btn-default"
              >
                Cancel
              </button>              
            </div>
          );
      } else if (this.props.mode === mode.EDIT && this.state.isEditing) {
          return (
            <div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ isEditing: false, })
                  this.props.onSubmit(form.values());
                }}
                className="btn btn-success"
              >
                Update
              </button>
              <button
                onClick={() => {
                  this.setState({ isEditing: false, })
                }}
                className="btn btn-default"
              >
                Cancel
              </button>              
            </div>
            );
      } else {
       return (
          <span />
        );       
      }
    }

    return (
      <Box
        title={this.props.title}
        headerButton={ this.props.mode === mode.EDIT ? EditBtn : undefined  }
      >
        <form>
          { childrenWithProps }
          <p>{form.error}</p>
          <div className="col-xs-12 body-footer">
            { renderButton() }
          </div>
        </form>
      </Box>
    )
  }
}

export const Column = observer(({ col = 6, editing, children }) => {
  const childrenWithProps = React.Children.map(children,
    (child) => React.cloneElement(child, {
      editing,
    })
  );

  return (
    <div className={`col-md-${col}`}>
     { childrenWithProps }
    </div>
  )
});


// TODO:
// Make Item edit workable with select, radio button, or checkbox
export const ItemEdit = observer(({ field, type = 'text', placeholder = null, editing }) => (
  <div className="col-md-12">
    <FormGroup title={field.label}>
      {
        editing ? 
          <input className="form-control"
             {...field.bind({ type, placeholder })}
          /> 
          :
          <span className={`value-text`}> {field.value}</span>
      }
    </FormGroup>
  </div>
));

export const mode = {
  CREATE: 'CREATE',
  EDIT: 'EDIT',
  VIEW: 'VIEW',
};
