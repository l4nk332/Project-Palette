import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import ArrowForward from 'react-icons/lib/md/arrow-forward';

import {GITHUB_URL, PROJECT_PALETTE_GITHUB_URL} from 'utils/constants';
import {updatePageTitle} from 'utils/misc';

import {LandingPage, SplitButton, TextField, Typeahead, Button} from 'components';

import {
  setProjectUrl,
  setColorPalette,
  updateFormField,
  showInfoFields,
  showUrlFields,
} from 'redux/actionCreators';


class LandingPageContainer extends React.Component {
  static propTypes = {
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

  componentDidMount = () => {
    updatePageTitle('Project-Palette');
  }

  splitButtonField = () => ({
    content: (
      <SplitButton
        splits={[
          {
            text: 'Search',
            isActive: this.props.form.infoActive,
            handler: this.props.showInfoFields,
          },
          {
            text: 'URL',
            isActive: this.props.form.urlActive,
            handler: this.props.showUrlFields,
          },
        ]}
      />
    ),
  })

  urlFields = () => [
    {
      label: 'Paste GitHub URL',
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
          style={{fontSize: '1em', padding: '1em', paddingBottom: 'calc(1em - 3px)'}}
        />
      ),
    },
  ];

  renderSelection = ({owner, name}) => (
    <span style={{display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'flex-start'}}>
      <img src={owner.avatar_url} alt={owner.login} style={{width: '2em', height: '2em', margin: '0 1em 0 0.25em', borderRadius: '50%'}} />
      <span style={{marginRight: '0.5em', fontWeight: 'bold'}}>{name}</span>
      <span>({owner.login})</span>
    </span>
  );

  renderOption = ({owner, name}) => (
    <span style={{display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'flex-start'}}>
      <span style={{marginRight: '0.5em', fontWeight: 'bold'}}>{name}</span>
      <span>({owner.login})</span>
    </span>
  );

  infoFields = () => [
    {
      label: 'Search for GitHub Projects',
      isHidden: !this.props.form.infoActive,
      content: (
        <Typeahead
          placeholder="Project-Palette"
          loadingText="Searching Github..."
          emptyResultsText="No Repositories Found..."
          onSelect={({ owner, name }) => {
            this.props.updateFormField('username', owner.login);
            this.props.updateFormField('project', name);
          }}
          renderSelection={this.renderSelection}
          renderOption={this.renderOption}
          fetchValues={async value => {
            const encoded = encodeURIComponent(value || 'a');
            const response = await fetch(`https://api.github.com/search/repositories?q=${encoded}&in:name&sort=stars&order=desc`);
            const {items} = await response.json();

            return items;
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

  render = () => <LandingPage formFields={this.formFields()} />
}

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
  connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer),
);
