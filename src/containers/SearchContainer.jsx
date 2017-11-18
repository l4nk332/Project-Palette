import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import SplitButton from '../components/SplitButton/SplitButton';
import TextField from '../components/TextField/TextField';
import Button from '../components/Button/Button';

import {updateForm} from '../redux/actionCreators';

import Search from '../pages/Search/Search';

class SearchContainer extends React.Component {
  submitSearchQuery = () => {
    this.props.history.push('blah');
  };

  formFields = () => [
    {
      content: (
        <SplitButton
          splits={[
            {
              text: 'Info',
              isActive: true,
              handler: () => {},
            },
            {
              text: 'Url',
              isActive: false,
              handler: () => {},
            },
          ]}
        />
      ),
    },
    {
      label: 'Username/Organization',
      content: (
        <TextField
          placeholder="l4nk332"
          value={this.props.form.username}
          changeHandler={event => {
            const {value} = event.target;
            this.props.updateForm('username', value);
          }}
        />
      ),
    },
    {
      label: 'Project Name',
      content: (
        <TextField
          placeholder="Project-Palette"
          value={this.props.form.project}
          changeHandler={event => {
            const {value} = event.target;
            this.props.updateForm('project', value);
          }}
        />
      ),
    },
    {
      content: <Button>Analyze</Button>,
    },
  ]

  render = () => <Search formFields={this.formFields()} />
}

SearchContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  form: PropTypes.object.isRequired,
  updateForm: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  form: state.form,
});

const mapDispatchToProps = {
  updateForm,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchContainer),
);
