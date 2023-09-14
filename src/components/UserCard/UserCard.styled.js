import styled from 'styled-components';

const StyledUserCard = styled.div`
    border-radius: var(--outer-radius);
    padding: 20px 35px;
    box-shadow: var(--box-shadow-convex);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & > * {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2em;
    }

    header {
        margin-bottom: 1em;

        h2 {
            margin: 0;
            font-size: 3rem;
        }
    }
`;

const StyledImgWrapper = styled.div`
    height: 100px;
    width: 100px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--color-4);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--box-shadow-convex);
    background-color: var(--color-3);
    margin-bottom: 0.6em;
    position: relative;
`;

const StyledUserImg = styled.img`
    height: 100%;
`;

const StyledBackgroundSection = styled.section`
    display: flex;
    justify-content: space-around;
    text-align: center;
    gap: 2em;
    padding: 20px 10px;
    border-radius: 10px;
    box-shadow: var(--box-shadow-concave-light);

    h6 {
        margin-bottom: 1em;
        font-family: 'SFProBold';
        font-size: 1.2em;
    }

    li {
        margin-bottom: 10px;
    }

    p {
        font-size: 2em;
    }
`;

const StyledLine = styled.div`
    height: 150px;
    background-color: rgba(250, 250, 250, 0.5);
    box-shadow: var(--box-shadow-flat);
    width: 1.5px;
`;

export { StyledUserCard, StyledImgWrapper, StyledUserImg, StyledBackgroundSection, StyledLine };
