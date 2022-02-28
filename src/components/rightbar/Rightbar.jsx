import "./rightbar.css";

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
        <img src="/assets/ad.jpeg" alt="" className="rightBarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/user/3.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Gemma Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
