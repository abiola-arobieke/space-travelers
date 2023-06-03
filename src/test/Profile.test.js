import React from 'react';
import renderer from 'react-test-renderer';
import { useSelector } from 'react-redux';
import Profile from '../components/Profile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Profile', () => {
  it('renders correctly', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({
      rockets: {
        rocketsItem: [
          { id: 1, name: 'Rocket 1', reserved: true },
          { id: 2, name: 'Rocket 2', reserved: false },
        ],
      },
      missions: {
        data: [
          { mission_id: '1', mission_name: 'Mission 1', reserved: true },
          { mission_id: '2', mission_name: 'Mission 2', reserved: false },
        ],
      },
    }));

    const component = renderer.create(<Profile />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
