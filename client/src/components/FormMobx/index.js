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
    const { form } = this.props;
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
        editing: this.state.isEditing,
        form,
      })
    );

    return (
      <Box
        title={this.props.title}
        headerButton={ this.state.isEditing && !this.props.edit ? undefined : EditBtn }
      >
        <form>
          { childrenWithProps }
          <p>{form.error}</p>

        {
          this.state.isEditing ?
            <div className="col-xs-12 body-footer">
              <button
                type="submit"
                onClick={() => {
                  this.setState({isEditing: false,});
                  this.props.onSubmit(form.values());
                }}
                className="btn btn-primary"
              >
                Save
              </button>
              <button
                onClick={() => this.setState({isEditing: false,})}
                className="btn btn-default"
              >
                Cancel
              </button>
            </div>
            : <span />
        }
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
          <span className={`value-text`}> {field.label}</span>
      }
    </FormGroup>
  </div>
));