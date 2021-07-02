import React from 'react';
import PropTypes from "prop-types";
import Rating from '../Rating/Rating';
import { Avatar, Name, Tag, Location, Menuinfo, Menu } from "./Profile.styles";

function Profile({ avatar, name, tag, location }) {
    return (
        <Menu>
            <Menuinfo>
                <Avatar src={avatar} alt="Аватар пользователя" />
                <Name>{name}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Menuinfo>
            <Rating />
        </Menu>
    );
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
}
export default Profile;


