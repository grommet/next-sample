import React, { Component } from 'react';
import { getDocAsJSON } from 'react-desc';
import PropTypes from 'prop-types';

import { Box, Button, Heading, Markdown, Paragraph, RoutedButton } from 'grommet';
import { hpe } from 'grommet/themes';
import { View, LinkPrevious } from 'grommet-icons';

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

  constructor(props, context) {
    super(props, context);
    this.state = props.component ? getDocAsJSON(props.component) : {};
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
    const { name, onExamples, responsiveState, text } = this.props;
    const { description, properties } = this.state;
    const { currentTheme, onThemeChange } = this.context;

    const iconSize = (responsiveState === 'narrow' ? undefined : 'large');

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

    let examplesControl;
    if (onExamples) {
      examplesControl = (
        <Button icon={<View size={iconSize} />} onClick={onExamples} />
      );
    }

    return (
      <Box
        basis='medium'
        background='light-1'
        animation={[
          { type: 'fadeIn', delay: 200 },
          { type: 'slideRight', delay: 300 },
        ]}
      >
        <Box
          direction='row'
          justify='between'
          align='center'
          pad={{ horizontal: 'small' }}
        >
          <RoutedButton path='/' icon={<LinkPrevious size={iconSize} />} />
          <Heading margin='none' size={responsiveState === 'narrow' ? 'small' : undefined}>
            {name}
          </Heading>
          {examplesControl}
        </Box>
        <Box margin='medium' flex='grow'>
          <Markdown content={text || ''} />
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
