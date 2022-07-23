import styled from "@emotion/styled";

export const Container = styled.div`
    margin-top: 100px;
    width: 30%;
    min-width: 500px;
    background: white;
`;

export const Title = styled.h2`
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    padding: 30px 0;
`;

export const StatList = styled.ul`
  display: flex ;
  flex-wrap: wrap;
`;

const setWidthItem = props => {
    if (props.length >= 5) {
        return 100 / 5 +"%"
    } else {
        return 100 / props.length +"%"
    }
}

export const Item = styled.li`
    display: flex ;
    flex-direction: column;
    width: ${setWidthItem};
    align-items: center;
    justify-content: center;
    height: 100px;
    color: white;
    .label{
        font-size: 15px;
    }
    .percentage{
        margin-top: 15px;
        font-size: 25px;
        font-weight: 700;
    }
`;

