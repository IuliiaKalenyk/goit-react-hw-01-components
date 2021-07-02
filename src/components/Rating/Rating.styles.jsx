import styled from "@emotion/styled";

export const Ratinglist = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #c9c9c9;
    list-style: none;
    margin: 0;
    padding: 0;
` ;
export const Ratingitem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
     :not(:last-child) {
        border-right: 1px solid #c9c9c9;
    } 
`;
export const Ratinglabel = styled.span`
    margin-bottom: 8px;
    color: #adacac;
    font-size:12px;
`;

export const Ratingquantity = styled.span`
    font-weight: bold;
`;