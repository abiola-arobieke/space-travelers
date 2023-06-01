import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllMissions } from '../redux/missions/missionSlice';

const Missions = () => {
  const state = useSelector((state) => state);
  const { missions } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMissions('https://api.spacexdata.com/v3/missions'));
  }, [dispatch]);

  return (
    <>
      <h2>Missions</h2>
      <br />
      {missions.data?.map((mission) => (
        <div key={mission.mission_id}>
          <h3>{mission.mission_name}</h3>
          <p>{mission.description}</p>
          <br />
        </div>
      ))}
    </>
  );
};

export default Missions;
