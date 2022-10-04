import React, { useRef, useState } from "react";

const ReferalBlock = () => {
  const emailRef = useRef();
  const [response, setResponse] = useState("");
  const referenceLink = "https://ratepunk.com/referral";

  function submitEmail() {
    const email = emailRef.current.value;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.length === 0) return setResponse("Enter an email");
    if (email.length <= 3) return setResponse("Invalid email");
    if (email.length > 255) return setResponse("invalid email");

    if (!email.match(validRegex)) return setResponse("Invalid email");

    setResponse("Your email is confirmed!");
    sendEmail();
  }

  function sendEmail() {
    const email = {
      emails: emailRef.current.value,
    };
    const emailJson = JSON.stringify(email);

    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };

    req.open(
      "PUT",
      "https://api.jsonbin.io/v3/b/633c4c980e6a79321e1ccb0f",
      true
    );
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader(
      "$2b$10$tYx7LITw7MFczS6vnze5nuhI9kOmfjEoHzNvVVMCjtANESFuurIYO",
      ""
    );
    req.send(emailJson);
  }

  function getReference() {
    if (response === "Enter an email" || response === "Invalid email") {
      return (
        <div className="emailInputWrapper">
          <span className="fail">{response}</span>
          <label>
            <input
              ref={emailRef}
              type="text"
              placeholder="Enter your email address"
            />
          </label>
          <button onClick={submitEmail}>Get Referal Link</button>
        </div>
      );
    }
    if (response === "Your email is confirmed!") {
      return (
        <div className="emailInputWrapper">
          <span className="success">{response}</span>
          <div className="copyWrapper">
            <input ref={emailRef} type="text" value={referenceLink} readOnly />
            <button onClick={() => {navigator.clipboard.writeText(referenceLink);}}>
              {window.innerWidth > 766? "Copy" : "Copy URL"}
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="emailInputWrapper">
        <label>
          <input
            ref={emailRef}
            type="text"
            placeholder="Enter your email address"
          />
        </label>
        <button onClick={submitEmail}>Get Referal Link</button>
      </div>
    );
  }

  return (
    <div className="referalWrapper">
      <div className="headerWrapper">
        <h1>REFER FRIENDS AND GET REWARDS</h1>
      </div>
      <div className="paragraphWrapper">
        <p>
          Refer your friends to us and earn hotel booking vouchers. We'll give
          you 1 coin for each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>
      </div>
      {getReference()}
      <div className="bottomWrapper">
        <span>Limits on max rewards apply.</span>
      </div>
    </div>
  );
};

export default ReferalBlock;
