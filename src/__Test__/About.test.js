import React from 'react';
import TestRenderer from 'react-test-renderer';
import About from '../components/Pages/About';

it('matches snapshot', () => {
  const tree = TestRenderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
