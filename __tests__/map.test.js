import React from 'react';
import renderer from 'react-test-renderer';
import Session from '../frontend/components/session/session_form.jsx';

describe('Google Map', () => {
  it('Creates a map', () => {
    const map = renderer.create(<Session />);
    expect(map).toMatchSnapshot();
  });
});
