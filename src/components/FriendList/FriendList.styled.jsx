import styled from "@emotion/styled";

export const Container = styled.ul`
    margin-top: 100px;
    width: 30%;
    min-width: 500px;
    background: #378992;
`;
const isOnline = props => props.isOnline? "#01fa01;" : "red;"

export const Item = styled.li`
    height: 150px;
    padding: 10px 0 10px 70px;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 30px;
    font-weight: 900;
    background: #ffffff;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 5px 7px 3px rgba(0,0,0,0.43);
    position: relative;
    img {
        height: 130px;
        width: 130px;
        border-radius: 10px;
        background: #aea8a865;
        margin-right: 50px;
    }
    &::before{
        content: "";
        width: 20px;
        height: 20px;
        background: ${isOnline};
        position: absolute;
        border-radius: 10px;
        top: 65px;
        left: 25px;
    }
`;