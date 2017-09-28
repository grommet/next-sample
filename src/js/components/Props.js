import React, { Component } from 'react';
import { getDocAsJSON } from 'react-desc';
import PropTypes from 'prop-types';

import { Box, Heading, Paragraph, RoutedButton } from 'grommet';
import { hpe } from 'grommet/themes';
import { LinkPrevious } from 'grommet-icons';

const THEMES = {
  grommet: undefined,
  hpe,
};

export default class Props extends Component {
  static contextTypes = {
    currentTheme: PropTypes.string,
    onThemeChange: PropTypes.func,
    router: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = getDocAsJSON(props.component);
  }

  renderValues(values) {
    let result;
    if (Array.isArray(values)) {
      result = values.map(v => this.renderValues(v));
    } else {
      result = <span key={values}>{values}</span>;
    }
    return result;
  }

  render() {
    const { name } = this.props;
    const { description, properties } = this.state;
    const { currentTheme, onThemeChange } = this.context;

    const props = (properties || []).map(property => (
      <Box key={property.name}>
        <Heading level={3} size='small'>
          <strong>{property.name}</strong>
        </Heading>
        <Paragraph>{property.description}</Paragraph>
        {this.renderValues(property.format)}
      </Box>
    ));

    const themeOptions = Object.keys(THEMES).map(t => <option key={t}>{t}</option>);

    return (
      <Box basis='medium' background='light-1'>
        <Box
          basis='xsmall'
          direction='row'
          justify='between'
          align='center'
          pad={{ horizontal: 'small' }}
        >
          <RoutedButton path='/' icon={<LinkPrevious size='large' />} />
          <Box direction='row' align='center' pad='medium'>
            <Heading margin='none'>{name}</Heading>
          </Box>
        </Box>
        <Box margin='medium'>
          <Paragraph>
            {description}
          </Paragraph>
          {props}
        </Box>
        <Box margin='medium'>
          <Heading level={3}>Theme</Heading>
          <select value={currentTheme} onChange={event => onThemeChange(event.target.value)}>
            {themeOptions}
          </select>
        </Box>
      </Box>
    );
  }
}
