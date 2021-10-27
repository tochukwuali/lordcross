import "../App.css";

const MobileIcon = ({ toggle, openNav }) => {
  let attachedClasses = ["icon"];
  if (toggle) {
    attachedClasses = ["icon", "open"];
  }

  return (
    <div className="mobileIcon" onClick={openNav}>
      <div className={attachedClasses.join(" ")}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MobileIcon;
