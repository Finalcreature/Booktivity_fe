import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AppContext from "./context/AppContext";

function UserProfile() {
  const { headersConfig } = useContext(AppContext);

  const [profile, setProfile] = useState(null);

  async function fetchProfile() {
    const res = await axios.get("http://localhost:8080/user", {
      params: { id: currentUser.userId },
      headers: headersConfig,
    });
    console.log("fetchProfile", res.data);
    setProfile({ ...res.data.data });
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    profile && (
      <div className="profile-page-container">
        <div className="profile-title-container">
          <h1 className="profile-title">Booktivity Profile</h1>
        </div>

        <div className="profile-name-container">
          <h1 className="user-name-profile">{profile.userName}</h1>
        </div>

        <div className="profile-repPoints-container">
          <h2 className="profile-repPoints">
            Your points: {profile.repPoints}
          </h2>
        </div>

        <div className="profile-books-container">
          <h3 className="profile-books">{profile.finished} books finished</h3>
          <h3 className="profile-books">
            {profile.currently} currently reading
          </h3>
          <h3 className="profile-books">{profile.wishlist} in your wishlist</h3>
        </div>
      </div>
    )
  );
}

export default UserProfile;
