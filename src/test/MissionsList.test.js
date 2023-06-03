import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MissionsList from '../components/MissionsList';

const mockStore = configureStore([]);

describe('MissionsList', () => {
  it('renders correctly', () => {
    const missions = {
      data: [
        {
          mission_id: '1',
          mission_name: 'Mission 1',
          description: 'Mission description 1',
        },
        {
          mission_id: '2',
          mission_name: 'Mission 2',
          description: 'Mission description 2',
        },
      ],
    };

    const store = mockStore({ missions });

    const component = renderer.create(
      <Provider store={store}>
        <MissionsList missions={missions} />
      </Provider>,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
