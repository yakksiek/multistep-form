/* eslint-disable no-unused-vars */
import React from 'react';

function UserCard({ data, imgData }) {
    const { firstName, lastName, email, phone, country, state, city, school, experience } = data;
    const { previewUrl, isImageSelected } = imgData;

    // eslint-disable-next-line no-shadow
    const renderListItems = (items) => items.map(({ value, id }) => <li key={id}>{value}</li>);

    return (
        <div>
            {isImageSelected && <img src={previewUrl} alt="selected" />}
            <div>
                <header>
                    <h3>
                        {firstName} {lastName}
                    </h3>
                    <h5>{email}</h5>
                    <p>{phone}</p>
                    <p>
                        {country} {state} {city}
                    </p>
                    <div>
                        <h6>Education</h6>
                        {renderListItems(school)}
                    </div>
                    <div>
                        <h6>Experience</h6>
                        {renderListItems(experience)}
                    </div>
                </header>
            </div>
        </div>
    );
}

export default UserCard;
