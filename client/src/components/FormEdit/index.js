import React from 'react';
import Box from 'components/Box';
import FormGroup from 'components/FormGroup';

export default class FormEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    }
  }

  render() {
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
      })
    );

    return (
      <Box
        title={this.props.title}
        headerButton={ this.state.isEditing && this.props.edit ? EditBtn : undefined }
      >
        { childrenWithProps }
        {
          this.state.isEditing ?
            <div className="col-xs-12 body-footer">
              <button
                onClick={() => {
                  this.setState({isEditing: false,});
                  this.props.onSave();
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

      </Box>
    )
  }
}

export const Column = ({ col = 6, editing, children }) => {
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
};


// TODO:
// Make Item edit workable with select, radio button, or checkbox
export const ItemEdit = ({ editing, title, value }) =>
  (
    <div className="col-md-12">
      <FormGroup title={title}>
        {
          editing ? <input type="text" className="form-control" value={value}/> :
            <span className={`${title == 'SID' ? 'bold' : ''} value-text`}>{value}</span>
        }
      </FormGroup>
    </div>
  );