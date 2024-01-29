import React, { useContext } from "react";
import { styled } from "styled-components";
import { AppContext } from "./context/Context";
import { Box } from "@mui/material";

const Container = styled.div`
  padding: 5rem;
  background-color: #fff;
  height: 40rem;
  overflow: scroll;
`;
const Div = styled.div`
  .table {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 2rem;
    margin-top: 1rem;
  }
`;
const Item = styled.div``;
const Span = styled.span``;
const Main = styled.div``;

const DataList = () => {
  const { tableList } = useContext(AppContext);
  return (
    <>
    
      <Container>
      <h1 style={{textAlign:"center",fontSize:"4rem"}}>Data Table</h1>
        <Div>
          <Div className="table">
            <Item>
              <Box sx={{ fontSize: "2rem", fontWeight: "500" }}>UserName</Box>
            </Item>
            <Item>
              <Box sx={{ fontSize: "2rem", fontWeight: "500" }}>Mobile</Box>
            </Item>
            <Item>
              <Box sx={{ fontSize: "2rem", fontWeight: "500" }}>DOB</Box>
            </Item>
            <Item>
              <Box sx={{ fontSize: "2rem", fontWeight: "500" }}>Sex</Box>
            </Item>
            <Item>
              <Box sx={{ fontSize: "2rem", fontWeight: "500" }}>Govt Id</Box>
            </Item>
            <Item>
              <Box sx={{ fontSize: "2rem", fontWeight: "500" }}>Address</Box>
            </Item>
            <Item>
              <Box sx={{ fontSize: "2rem", fontWeight: "500" }}>State</Box>
            </Item>
            <Item>
              <Box sx={{ fontSize: "2rem", fontWeight: "500" }}>City</Box>
            </Item>
            <Item>
              <Box sx={{ fontSize: "2rem", fontWeight: "500" }}>Country</Box>
            </Item>
            <Item>
              <Box sx={{ fontSize: "2rem", fontWeight: "500" }}>Pincode</Box>
            </Item>
          </Div>
          <hr />
        </Div>
        {tableList
          ? tableList.map((Ele: any) => {
              return (
                <Div>
                  <Div className="table">
                    <Item>
                      <Box sx={{ fontSize: "1.5rem", fontWeight: "400" }}>
                        {Ele.username}
                      </Box>
                    </Item>
                    <Item>
                      <Box sx={{ fontSize: "1.5rem", fontWeight: "400" }}>
                        {Ele.mobile}
                      </Box>
                    </Item>
                    <Item>
                      <Box sx={{ fontSize: "1.5rem", fontWeight: "400" }}>
                        {Ele.dob}
                      </Box>
                    </Item>
                    <Item>
                      <Box sx={{ fontSize: "1.5rem", fontWeight: "400" }}>
                        {Ele.sex}
                      </Box>
                    </Item>
                    <Item>
                      <Box sx={{ fontSize: "1.5rem", fontWeight: "400" }}>
                        {Ele.govtId}
                      </Box>
                    </Item>
                    <Item>
                      <Box sx={{ fontSize: "1.5rem", fontWeight: "400" }}>
                        {Ele.address}
                      </Box>
                    </Item>
                    <Item>
                      <Box sx={{ fontSize: "1.5rem", fontWeight: "400" }}>
                        {Ele.state}
                      </Box>
                    </Item>
                    <Item>
                      <Box sx={{ fontSize: "1.5rem", fontWeight: "400" }}>
                        {Ele.city}
                      </Box>
                    </Item>
                    <Item>
                      <Box sx={{ fontSize: "1.5rem", fontWeight: "400" }}>
                        {Ele.country}
                      </Box>
                    </Item>
                    <Item>
                      <Box sx={{ fontSize: "1.5rem", fontWeight: "400" }}>
                        {Ele.pincode}
                      </Box>
                    </Item>
                  </Div>
                  <hr />
                </Div>
              );
            })
          : ""}
      </Container>
    </>
  );
};

export default DataList;
