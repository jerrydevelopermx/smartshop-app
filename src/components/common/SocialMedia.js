import React from "react";

function SocialMedia(props) {
  return (
    <div>
      {props.networks.length > 0 &&
        props.networks.map((network, index) => (
          <img
            key={"netw-" + index}
            src={`${process.env.PUBLIC_URL}/imgs/icons/${network}-icon.png`}
            alt={network}
            className={props.styles}
          />
        ))}
    </div>
  );
}

export default SocialMedia;
