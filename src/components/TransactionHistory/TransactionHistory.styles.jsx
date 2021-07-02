import styled from "@emotion/styled";

export const TransactionTable = styled.table`
border-collapse: collapse;
  font-size: 18px;
  margin-top: 15px;
  background-color: #fff;
  width: 64%;
  margin: 20px;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
`;
export const TransactionThead = styled.thead`
color: #fff;
  font-size: 20px;
  background-color: #eb658e;
  border: 2px solid dimgray;
  `;
export const TransactionTr = styled.tr`
:nth-of-type(even) {
    background-color: #f5f5f5;
  }
`;
export const TransactionTh = styled.th`
 padding: 5px;
`;
export const TransactionTbody = styled.tbody`
border: 2px solid dimgray;
`;
export const TransactionTd = styled.td`
padding: 5px;
border-right: 2px solid dimgray;
`;