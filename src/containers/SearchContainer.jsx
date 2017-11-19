import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {PROJECT_PALETTE_GITHUB_URL} from '../utils/constants';

import SplitButton from '../components/SplitButton/SplitButton';
import TextField from '../components/TextField/TextField';
import Button from '../components/Button/Button';

import {
  updateFormField,
  showInfoFields,
  showUrlFields,
} from '../redux/actionCreators';

import Search from '../pages/Search/Search';

class SearchContainer extends React.Component {
  submitSearchQuery = () => {
    this.props.history.push('blah');
  };

  splitButtonField = () => ({
    content: (
      <SplitButton
        splits={[
          {
            text: 'Url',
            isActive: this.props.form.urlActive,
            handler: this.props.showUrlFields,
          },
          {
            text: 'Info',
            isActive: this.props.form.infoActive,
            handler: this.props.showInfoFields,
          },
        ]}
      />
    ),
  })

  urlFields = () => [
    {
      label: 'Github Url',
      isHidden: !this.props.form.urlActive,
      content: (
        <TextField
          placeholderText={PROJECT_PALETTE_GITHUB_URL}
          value={this.props.form.url}
          changeHandler={event => {
            const {value} = event.target;
            this.props.updateFormField('url', value);
          }}
        />
      ),
    },
  ];

  infoFields = () => [
    {
      label: 'Username/Organization',
      isHidden: !this.props.form.infoActive,
      content: (
        <TextField
          placeholderText="l4nk332"
          isHidden={!this.props.form.infoActive}
          value={this.props.form.username}
          changeHandler={event => {
            const {value} = event.target;
            this.props.updateFormField('username', value);
          }}
        />
      ),
    },
    {
      label: 'Project Name',
      isHidden: !this.props.form.infoActive,
      content: (
        <TextField
          placeholderText="Project-Palette"
          value={this.props.form.project}
          changeHandler={event => {
            const {value} = event.target;
            this.props.updateFormField('project', value);
          }}
        />
      ),
    },
  ];

  submitButtonField = () => ({
    content: <Button>Analyze</Button>,
  })

  formFields = () => {
    let fields = [];
    fields = fields.concat(this.infoFields());
    fields = fields.concat(this.urlFields());

    return [
      this.splitButtonField(),
      ...fields,
      this.submitButtonField(),
    ];
  }

  render = () => <Search formFields={this.formFields()} />
}

SearchContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  form: PropTypes.object.isRequired,
  updateFormField: PropTypes.func.isRequired,
  showInfoFields: PropTypes.func.isRequired,
  showUrlFields: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  form: state.form,
});

const mapDispatchToProps = {
  updateFormField,
  showInfoFields,
  showUrlFields,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchContainer),
);
