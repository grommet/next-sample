import React, { Component } from 'react';
import { getDocAsJSON } from 'react-desc';

import { Box, Heading, Paragraph, RoutedButton } from 'grommet';

export default class Props extends Component {
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
    const { name, onTheme, theme, themes } = this.props;
    const { description, properties } = this.state;

    const props = (properties || []).map(property => (
      <Box key={property.name}>
        <Heading level={3} size='small'>
          <strong>{property.name}</strong>
        </Heading>
        <Paragraph>{property.description}</Paragraph>
        {this.renderValues(property.format)}
      </Box>
    ));

    const themeOptions = themes.map(t => <option key={t}>{t}</option>);
    let homePath = '/';
    if (theme) {
      homePath += `?theme=${theme}`;
    }

    return (
      <Box basis='medium' background='light-1'>
        <Box
          basis='xsmall'
          direction='row'
          justify='between'
          align='center'
        >
          <RoutedButton path={homePath} plain={true} >
            <svg width='96px' height='96px' viewBox='0 0 96 96' version='1.1'>
              <g fill='none' fillRule='evenodd'>
                <polygon
                  stroke='#333333'
                  strokeWidth='3'
                  points='11.5 69 69 11.5 11.5 11.5'
                />
              </g>
            </svg>
          </RoutedButton>
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
          <select value={theme} onChange={event => onTheme(event.target.value)}>
            {themeOptions}
          </select>
        </Box>
      </Box>
    );
  }
}
