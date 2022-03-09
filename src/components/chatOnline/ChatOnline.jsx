import "./chatOnline.css";

export default function chatOnline() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg" src={PF + "./user/4.jpg"} alt="" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineNAme">Kenny Mccormick</span>
      </div>
    </div>
  );
}
