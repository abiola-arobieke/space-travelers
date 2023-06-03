import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Missions.css';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    dispatch(joinMission(mission.mission_id));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(mission.mission_id));
  };

  return (
    <tr className="row-cell">
      <td className="mission-td mission-name">{mission.mission_name}</td>
      <td className="mission-td mission-description">{mission.description}</td>
      <td className="mission-td mission-member">
        {mission.reserved ? (
          <button type="button" className="btn btn-primary active-button">Active Member</button>
        ) : (
          <button type="button" className="btn btn-secondary member-button">NOT A MEMBER</button>
        )}
      </td>
      <td className="mission-td mission-join">
        {mission.reserved ? (
          <button
            type="button"
            className="btn btn-outline-danger leave-button"
            onClick={handleLeaveMission}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline-secondary join-button"
            onClick={handleJoinMission}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MissionItem;
