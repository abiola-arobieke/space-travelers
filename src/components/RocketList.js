import { useSelector } from 'react-redux';
import RocketItem from './RocketItem';

const RocketList = () => {
  const { rocketsItem } = useSelector((store) => store.rockets);

  return (
    <div>
      {rocketsItem?.map((rocket) => (
        <RocketItem key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

export default RocketList;
