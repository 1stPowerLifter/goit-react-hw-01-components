import styled from "@emotion/styled";

export const Table = styled.table`
    margin-top: 100px;
    width: 30%;
    min-width: 600px;
    background-color: #ccc9c3;
    text-align: center;
`;

const height = "50px"

export const Head = styled.thead`
    background: #0408ff;
    color: white;
    height: ${height};
    th{
        width: 30%;
       &:first-of-type{
        width: 40%;
       }
    }
`
export const Body = styled.tbody`
    color: #2f2d2d;
    tr{
        height: ${height};
        background-color:white;
        &:nth-of-type(2n){
            background-color: #397b7f;
        }
        td:first-of-type{
        text-align: start;
        padding-left: 80px;
        }
    }
    
`