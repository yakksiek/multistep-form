import React from 'react';

import { useImageUploaderContext } from '../../context/ImageUploaderContext';
import {
    StyledImgWrapper,
    StyledUserImg,
    StyledUserCard,
    StyledBackgroundSection,
    StyledLine,
} from './UserCard.styled';

function UserCard({ data }) {
    const { previewUrl, isImageSelected } = useImageUploaderContext();
    const { firstName, lastName, email, phone, country, city, school, experience } = data;

    const renderListItems = (items) => items.map(({ value, id }) => <li key={id}>{value}</li>);

    const userProfileImage = isImageSelected ? (
        <StyledUserImg src={previewUrl} alt="selected" />
    ) : (
        <h2>{firstName.slice(0, 1)}</h2>
    );

    return (
        <StyledUserCard>
            <header>
                <StyledImgWrapper>{userProfileImage}</StyledImgWrapper>
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
