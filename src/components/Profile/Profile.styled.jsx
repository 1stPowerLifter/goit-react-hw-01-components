import styled from "@emotion/styled";

export const Container = styled.div`
    width: 30%;
    min-width: 500px;
    background: white;
`;

export const Description = styled.div`
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Avatar = styled.img`
    width: 150px;
    border-radius: 50%;
    margin-bottom: 30px;
`;

export const Info = styled.p`
    font-size: 20px;
    color: grey;
    margin-bottom: 10px;
    &:nth-of-type(1){
       font-size: 25px; 
       color: black;
       font-weight: 700;
    }
`;

export const Stats = styled.ul`
    background: rgb(134, 198, 255);
    display: flex;
`;

export const Stat = styled.li`
    height: 100px;
    flex-basis:${100 / 3}%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    .label{
        color:gray;
    }
    .quantity{
        font-weight: 700;
    }
`;