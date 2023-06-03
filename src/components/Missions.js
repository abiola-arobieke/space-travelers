import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMissions } from '../redux/missions/missionSlice';
import MissionsList from './MissionsList';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMissions('https://api.spacexdata.com/v3/missions'));
  }, [dispatch]);

  return (
    <>
      <MissionsList missions={missions} />
    </>
  );
};

export default Missions;
