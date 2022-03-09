import "./conversations.css";

export default function Conversation() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="conversation">
      <img src={PF + "./user/9.jpg"} alt="" className="conversationImg" />
      <span className="conversationName">Coffee Time</span>
    </div>
  );
}
