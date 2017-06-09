import React from 'react';

const Box = (props) => {
  let boxType = '';
  let loadingState;

  if (props.border === true) {
    // borderClass = 'box-solid';
  }

  if (props.loading === true) {
    loadingState = (
      <div className="overlay">
        <i className="fa fa-refresh fa-spin"></i>
      </div>
    );
  }

  if (props.collapsed) {
    boxType = 'collapsed-box';
  }

  return (
    <div>
      <div className={`box ${props.theme} color-palette-box ${boxType}`}>
        <div className="box-header with-border">
          <h3 className="box-title">
            {props.title}
          </h3>
          <div className="box-tools pull-right">
            {
              !props.collapsed &&
              <span>
              	<span className="btn btn-box-tool">
                  {props.headerButton}
              	</span>
                <button className="btn btn-box-tool" data-widget="collapse" style={{ marginLeft: 20 }}>
                  <i className="fa fa-minus" />
                </button>
                </span>
            }
          </div>
        </div>
        <div className="box-body">
          {props.content}
          {props.children}
        </div>
        {loadingState}
      </div>
    </div>
  );
};

Box.propTypes = {
  collapsed: React.PropTypes.bool,
  theme: React.PropTypes.string,
  loading: React.PropTypes.bool,
  border: React.PropTypes.bool,
  title: React.PropTypes.string,
  content: React.PropTypes.string,
  // width: React.PropTypes.number,
  headerButton: React.PropTypes.any,
  children: React.PropTypes.node.isRequired,
};

Box.defaultProps = {
  collapsed: false,
  theme: 'box-default',
  loading: false,
  border: true,
  title: 'Default title',
  content: '',
  // width: 12,
  headerButton: '',
};

export default Box;