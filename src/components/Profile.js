import '../styles/Profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { rocketsItem } = useSelector((store) => store.rockets);

  return (
    <div className="ds-flex mar-t-1">
      <div className="mid-screen-6">
        <h3 className="profile-title">Mission</h3>
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
