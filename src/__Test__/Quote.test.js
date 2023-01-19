import React from 'react';
import TestRenderer from 'react-test-renderer';
import Quote from '../components/Pages/Quote';

test('should snapshot', () => {
  const tree = TestRenderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
