import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MissionItem from '../components/MissionItem';

// Mock Redux store
const mockStore = configureStore([]);
const store = mockStore({});

describe('MissionItem', () => {
  it('renders correctly', () => {
    const mission = {
      mission_id: '1',
      mission_name: 'Mission 1',
      description: 'Mission description',
      reserved: true,
    };

    const component = renderer.create(
      <Provider store={store}>
        <MissionItem mission={mission} />
      </Provider>,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
