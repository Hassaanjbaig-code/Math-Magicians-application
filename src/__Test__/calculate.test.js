import React from 'react';
import renderer from 'react-test-renderer';
import Fcalculator from '../components/Fcalculator';

it('matches snapshot', () => {
  const tree = renderer.create(<Fcalculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
