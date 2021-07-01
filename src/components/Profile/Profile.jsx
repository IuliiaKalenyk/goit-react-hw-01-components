import React from 'react';
import PropTypes from "prop-types";
import Paper from '../Paper/Paper';
import { PaperContainer } from "../Paper/Paper.styles";
import cardConfig from "../../utils/cardConfig";
import { Avatar, Name, Tag, Location, Stats, StatsItem, Menu } from "./Profile.styles";


function Profile() {
    return (<Paper gap={40}>
        <Menu>
            {cardConfig.map(({ name, tag, location, avatar, followers, views, likes }) =>
            (<Avatar key={name} src={avatar} alt="Аватар пользователя" />
          <Name>{name}</Name>
          <Tag>{tag}</Tag>
          <Location>{location}</Location>
          <Stats>
              <StatsItem>{followers}</StatsItem>
              <StatsItem>{views}</StatsItem>
              <StatsItem>{likes}</StatsItem>
           </Stats>))}
        </Menu>
    </Paper>)
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


