import '../styles/Profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { rocketsItem } = useSelector((store) => store.rockets);
  const missions = useSelector((store) => store.missions) || [];
  const joinedMissions = missions.data?.filter((mission) => mission.reserved);

  return (
    <div className="d-flex mt-1">
      <div className="md-6">
        <h3 className="profile-title">Missions</h3>
        <ul className="list-container">
          {joinedMissions?.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
      <div className="mid-screen-6 mar-s-1">
        <h3 className="profile-title">Rockets</h3>
        <ul className="list-container">
          {rocketsItem
            ?.filter((rocket) => rocket.reserved === true)
            .map((reserved) => (
              <li key={reserved.id}>{reserved.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
