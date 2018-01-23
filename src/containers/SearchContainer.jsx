import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import ArrowForward from 'react-icons/lib/md/arrow-forward';

import {GITHUB_URL, PROJECT_PALETTE_GITHUB_URL} from 'utils/constants';

import {SplitButton, TextField, Button} from 'components';

import {
  setProjectUrl,
  setColorPalette,
  updateFormField,
  showInfoFields,
  showUrlFields,
} from 'redux/actionCreators';

import {Search} from 'pages';

class SearchContainer extends React.Component {
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
          enterKeyHandler={this.submitSearchForm}
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
          enterKeyHandler={this.submitSearchForm}
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
          enterKeyHandler={this.submitSearchForm}
          changeHandler={event => {
            const {value} = event.target;
            this.props.updateFormField('project', value);
          }}
        />
      ),
    },
  ];

  submitButtonField = () => ({
    content: (
      <Button
        clickHandler={this.submitSearchForm}
        isDisabled={!this.formIsValid()}
      >
        Analyze <ArrowForward />
      </Button>
    ),
  })

  formIsValid = () => {
    const {
      username,
      project,
      url,
      urlActive,
      infoActive,
    } = this.props.form;

    if (infoActive) {
      return Boolean(username.trim() && project.trim());
    }

    if (urlActive) {
      return Boolean(url.trim());
    }

    return false;
  }

  submitSearchForm = event => {
    event.preventDefault();
    // We need to reset the project url and palette in the store.
    this.props.setProjectUrl(null);
    this.props.setColorPalette({});

    const {
      username,
      project,
      url,
      urlActive,
      infoActive,
    } = this.props.form;

    if (infoActive && username.trim() && project.trim()) {
      const search = `${username}/${project}`;
      this.props.history.push(search);
    }

    if (urlActive && url.trim()) {
      const search = url.replace(GITHUB_URL, '');
      this.props.history.push(search);
    }
  }

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
  setProjectUrl: PropTypes.func.isRequired,
  setColorPalette: PropTypes.func.isRequired,
  updateFormField: PropTypes.func.isRequired,
  showInfoFields: PropTypes.func.isRequired,
  showUrlFields: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  form: state.form,
});

const mapDispatchToProps = {
  setProjectUrl,
  setColorPalette,
  updateFormField,
  showInfoFields,
  showUrlFields,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchContainer),
);
