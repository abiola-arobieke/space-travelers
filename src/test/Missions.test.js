import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../components/Missions';

// Mock Redux store
const mockStore = configureStore([]);
const store = mockStore({ missions: [] });

describe('Missions', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
