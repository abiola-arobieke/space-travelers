import { useSelector } from 'react-redux';
import RocketItem from './RocketItem';
import { addReservation, cancelReservation } from '../redux/rockets/rocketsSlice';

const RocketList = () => {
  const { rocketsItem } = useSelector((store) => store.rockets);

  return (
    <div>
      {rocketsItem.map((rocket) => (
        <RocketItem
          key={rocket.id}
          rocket={rocket}
          reservation={addReservation}
          cancelReservation={cancelReservation}
        />
      ))}
    </div>
  );
};

export default RocketList;
