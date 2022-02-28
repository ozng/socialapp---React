import "./rightbar.css";
import { Users } from "../../dummy-data";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" />
          <span className="birthdayText">
            <b>Scarlett Johansson</b> and <b>3 other</b> friends.
          </span>
        </div>
        <img src="/assets/ad.jpg" alt="" className="rightBarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
