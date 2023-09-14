/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { UilTrashAlt } from '@iconscout/react-unicons';

import IconWrapper from '../IconWrapper';
import {
    StyledImgWrapper,
    StyledUserImg,
    StyledUserCard,
    StyledBackgroundSection,
    StyledLine,
} from './UserCard.styled';

function UserCard({ data, imgData }) {
    const [showTrashIcon, setShowTrashIcon] = useState(false);
    const { firstName, lastName, email, phone, country, city, school, experience } = data;
    const { previewUrl, isImageSelected, clearImage } = imgData;

    // czy jest takie rozwiązanie dopuszczalne?
    const iconWrapperStyle = {
        position: 'absolute',
        backgroundColor: 'var(--background-color)',
        transform: 'scale(0.8)',
        top: '45%',
    };

    const renderListItems = (items) => items.map(({ value, id }) => <li key={id}>{value}</li>);

    const handleIconVisibility = () => {
        if (!isImageSelected) return;
        setShowTrashIcon((prevState) => !prevState);
    };

    const trashIconJSX = (
        <IconWrapper
            variant="fill"
            style={iconWrapperStyle}
            onClick={() => {
                clearImage();
                setShowTrashIcon(false);
            }}
        >
            <UilTrashAlt />
        </IconWrapper>
    );

    const userProfileImage = isImageSelected ? (
        <StyledUserImg src={previewUrl} alt="selected" />
    ) : (
        <h2>{firstName.slice(0, 1)}</h2>
    );

    return (
        <StyledUserCard>
            <header>
                <StyledImgWrapper onMouseOver={handleIconVisibility} onMouseOut={handleIconVisibility}>
                    {isImageSelected && showTrashIcon && trashIconJSX}
                    {userProfileImage}
                </StyledImgWrapper>
                <div>
                    <h3>
                        {firstName} {lastName}
                    </h3>
                    <h5>📧 {email}</h5>
                    <p>📱 {phone}</p>
                    <p>
                        📍 {city}, {country}
                    </p>
                </div>
            </header>
            <StyledBackgroundSection>
                <div>
                    <p>🏫</p>
                    <h6>Education</h6>
                    <ul>{renderListItems(school)}</ul>
                </div>
                <StyledLine />
                <div>
                    <p>💼</p>
                    <h6>Experience</h6>
                    <ul>{renderListItems(experience)}</ul>
                </div>
            </StyledBackgroundSection>
        </StyledUserCard>
    );
}

export default UserCard;
