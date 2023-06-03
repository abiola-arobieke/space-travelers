import React from 'react';
import renderer from 'react-test-renderer';
import { useDispatch } from 'react-redux';
import RocketItem from '../components/RocketItem';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('RocketItem', () => {
  it('renders correctly', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const rocket = {
      id: 1,
      name: 'Falcon 9',
      description: 'Sample description',
      reserved: false,
      flickr_images: ['https://example.com/image.jpg'],
    };

    const reservationMock = jest.fn();
    const cancelReservationMock = jest.fn();

    const component = renderer.create(
      <RocketItem
        rocket={rocket}
        reservation={reservationMock}
        cancelReservation={cancelReservationMock}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
