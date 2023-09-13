/* eslint-disable no-unused-vars */
import React from 'react';

import {
    StyledImgWrapper,
    StyledUserImg,
    StyledUserCard,
    StyledBackgroundSection,
    StyledLine,
} from './UserCard.styled';

import userImg from '../../assets/user.png';

function UserCard({ data, imgData }) {
    const { firstName, lastName, email, phone, country, state, city, school, experience } = data;
    const { previewUrl, isImageSelected } = imgData;

    const renderListItems = (items) => items.map(({ value, id }) => <li key={id}>{value}</li>);

    return (
        <StyledUserCard>
            <header>
                <StyledImgWrapper>
                    <StyledUserImg src={userImg} alt="selected" />
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
