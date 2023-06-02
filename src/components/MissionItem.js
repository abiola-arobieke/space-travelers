import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Missions.css';

const MissionItem = ({ mission }) => (
  <tr className="row-cell">
    <td className="mission-td mission-name">{mission.mission_name}</td>
    <td className="mission-td mission-description">{mission.description}</td>
    <td className="mission-td">
      <button type="button" className="btn btn-secondary member-button">NOT A MEMBER</button>
    </td>
    <td className="mission-td">
      <button type="button" className="btn btn-outline-secondary join-button">Join Mission</button>
    </td>
  </tr>
);

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionItem;
