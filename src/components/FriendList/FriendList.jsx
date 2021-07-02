import React from 'react';
import PropTypes from "prop-types";
import { FriendContainer, FriendItem, Online, Offline, FriendImg, FriendName } from './FriendList.styles';



function FriendList({ friends }) {
    return (
        <FriendContainer>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendItem key={id}>
                    {isOnline ? <Online /> : <Offline />}
                    <FriendImg src={avatar} alt={name} width="48" />
                    <FriendName>{name}</FriendName>
                </FriendItem>
            ))}
        </FriendContainer>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
}

export default FriendList
