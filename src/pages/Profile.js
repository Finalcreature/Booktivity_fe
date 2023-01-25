import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserProfile() {

  const { currentUser } = useContext(UserContext);

  return (
    profile && (
      <div className="profile-page-container">
        <div className="profile-title-container">
          <h1 className="profile-title">Booktivity Profile</h1>
        </div>

        <div className="profile-name-container">
          <h1 className="user-name-profile">{currentUser.username}</h1>
        </div>

        <div className="profile-repPoints-container">
          <h2 className="profile-repPoints">
            Your points: {currentUser.repPoints}
          </h2>
        </div>

        <div className="profile-books-container">
          <h3 className="profile-books">{currentUser.finished} books finished</h3>
          <h3 className="profile-books">
            {currentUser.currently} currently reading
          </h3>
          <h3 className="profile-books">{currentUser.wishlist} in your wishlist</h3>
        </div>
      </div>
    )
  );
}

export default UserProfile;
