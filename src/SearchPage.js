import React from "react";
import "./searchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon className="" />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"
        channel="Hryhorii Pertaia"
        verified
        subs="1M"
        noOfVideos={382}
        description="I am a description so be aware!"
      />
      <hr />

      <VideoRow
        views="200K"
        subs="300K"
        description="I am a description so be aware!"
        timestamp="2 months ago"
        channel="Hryhorii Pertaia"
        title="Hire Hryhorii Pertaia as a Lead Web Dev now!"
        image="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"
      />

      <VideoRow
        views="200K"
        subs="300K"
        description="I am a description so be aware!"
        timestamp="2 months ago"
        channel="Hryhorii Pertaia"
        title="Hire Hryhorii Pertaia as a Lead Web Dev now!"
        image="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"
      />

      <VideoRow
        views="200K"
        subs="300K"
        description="I am a description so be aware!"
        timestamp="2 months ago"
        channel="Hryhorii Pertaia"
        title="Hire Hryhorii Pertaia as a Lead Web Dev now!"
        image="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"
      />

      <VideoRow
        views="200K"
        subs="300K"
        description="I am a description so be aware!"
        timestamp="2 months ago"
        channel="Hryhorii Pertaia"
        title="Hire Hryhorii Pertaia as a Lead Web Dev now!"
        image="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"
      />

      <VideoRow
        views="200K"
        subs="300K"
        description="I am a description so be aware!"
        timestamp="2 months ago"
        channel="Hryhorii Pertaia"
        title="Hire Hryhorii Pertaia as a Lead Web Dev now!"
        image="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80"
      />
    </div>
  );
}

export default SearchPage;
