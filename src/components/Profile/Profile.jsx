import React from 'react';
import PropTypes from "prop-types";
import Paper from '../Paper/Paper';
import { PaperContainer } from "../Paper/Paper.styles";
import user from "./data/user.json";
import { Avatar, Name, Tag, Location, Stats, StatsItem } from "./Profile.styles";


function Profile() {
    return <Paper gap={40}>
        {user.map(({ name, tag, location, avatar, stats, followers, views, likes }) =>
        (<Avatar key={name} src={avatar} alt={name} />
          <Name>{name}</Name> <Tag>{tag}</Tag> <Location>{location}</Location>
          <Stats>{stats}</Stats> <StatsItem>{followers}</StatsItem> <StatsItem>{views}</StatsItem>
           <StatsItem>{likes}</StatsItem>))}
    </Paper>;
}

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}


export default Profile;


