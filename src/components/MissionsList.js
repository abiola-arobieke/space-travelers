import React from 'react';
import PropTypes from 'prop-types';
import MissionItem from './MissionItem';
import '../styles/Missions.css';

const MissionsList = ({ missions }) => (
  <table className="missions-table">
    <thead>
      <tr>
        <th className="mission-th column-1">Mission</th>
        <th className="mission-th column-2">Description</th>
        <th className="mission-th column-3">Status</th>
        <th className="mission-th column-4"> </th>
      </tr>
    </thead>
    <tbody>
      {missions.data?.map((mission) => (
        <MissionItem key={mission.mission_id} mission={mission} />
      ))}
    </tbody>
  </table>
);

MissionsList.propTypes = {
  missions: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        mission_id: PropTypes.string.isRequired,
        mission_name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default MissionsList;
