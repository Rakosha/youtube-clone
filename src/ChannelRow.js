import React from "react";
import "./channelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlineSharpIcon from "@material-ui/icons/CheckCircleOutlineSharp";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} alt={channel} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineSharpIcon />}
        </h4>
        <p>
          {subs} subscribers <b>&middot;</b> {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
