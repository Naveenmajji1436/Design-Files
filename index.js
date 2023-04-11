const Notification = (props) => {
  const { className, messageText } = props;
  return <p className={className}>{messageText}</p>;
};

const element = (
  <div className="mainBg">
    <h1 className="heading">Notifications</h1>
    <div className="InformationContainer">
      <img
        className="Icon"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification className="Text" messageText="Information Message" />
    </div>

    <div className="SuccessContainer">
      <img
        className="Icon"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification className="Text" messageText="Success Message" />
    </div>

    <div className="WarningContainer">
      <img
        className="Icon"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification className="Text" messageText="Warning Message" />
    </div>

    <div className="ErrorContainer">
      <img
        className="Icon"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
      <Notification className="Text" messageText="Error Message" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
