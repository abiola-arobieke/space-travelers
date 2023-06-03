import React from 'react';
import renderer from 'react-test-renderer';
import { useSelector, useDispatch } from 'react-redux';
import RocketList from '../components/RocketList';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('../redux/rockets/rocketsSlice', () => ({
  addReservation: jest.fn(),
  cancelReservation: jest.fn(),
}));

describe('RocketList', () => {
  it('renders correctly', () => {
    const rocketsItem = [
      {
        id: 1,
        name: 'Falcon 9',
        description: 'Sample description 1',
        reserved: false,
        flickr_images: ['https://example.com/image1.jpg'],
      },
      {
        id: 2,
        name: 'Falcon Heavy',
        description: 'Sample description 2',
        reserved: true,
        flickr_images: ['https://example.com/image2.jpg'],
      },
    ];

    useSelector.mockReturnValue({ rocketsItem });
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const component = renderer.create(<RocketList />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
