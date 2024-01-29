import { styled } from "styled-components";
import { Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Country from "./Country";
import Steper from "./Stepper";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "./Yup/Yup";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { changeTableFunction } from "./Redux/Slices/TableSlice";
import { AppContext } from "./context/Context";
import DataList from "./DataList";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

const Label = styled.label`
  font-size: 1.5rem;
`;

const Input = styled.input``;

const Select = styled.select``;
const Option = styled.option``;
const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 5rem;
  .inputs {
    width: 40rem;
    height: 4rem;

    .input {
      width: 100%;
      height: 100%;
      font-size: 1.2rem;
      padding: 1rem 2rem;
      outline: none;
      border: none;
      border: 1px solid #34343457;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`;
const Div = styled.div``;

const Home = () => {
  const { handleInputChange } = useContext(AppContext);

  const dispatch = useDispatch();
  const tableData = useSelector((state: any) => {
    return state.table;
  });

  const navigate = useNavigate();
  const [govt, setGovt] = useState("");
  const handleInput = (e: any) => {
    e.preventDefault();
    setGovt(e.target.value);
  };

  const handleSubmit = () => {
    navigate("/secondStep");
  };
  return (
    <>
      <Container>
        <Steper />
        <Div>
          <Typography variant="h3">Personal Details</Typography>
        </Div>
        <Div className="main-box">
          <Item>
            <Label htmlFor="username">
              Username
              <Box className="inputs">
                <Input
                  className="input"
                  type="text"
                  name="username"
                  id="username"
                  value={tableData.username}
                  onChange={handleInputChange}
                ></Input>
              </Box>
            </Label>

            <Label htmlFor="mobile">
              Mobile
              <Box className="inputs">
                <Input
                  className="input"
                  type="text"
                  name="mobile"
                  id="mobiule"
                  value={tableData.mobile}
                  onChange={handleInputChange}
                  required
                ></Input>
              </Box>
            </Label>

            <Label htmlFor="dob">
              Date of Birth or Age
              <Box className="inputs">
                <Input
                  className="input"
                  type="text"
                  name="dob"
                  id="dob"
                  value={tableData.dob}
                  onChange={handleInputChange}
                  required
                ></Input>
              </Box>
            </Label>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Label htmlFor="sex">Sex</Label>

              <Select
                className="inputs"
                id="sex"
                name="sex"
                style={{
                  border: "1px solid #34343457",
                  borderRadius: "0.5rem",
                }}
                value={tableData.sex}
                onChange={handleInputChange}
                onClick={handleInputChange}
                required
                
              >
                <Option
                  value={"male"}
                  className="input"
                  style={{ fontSize: "1.2rem" }}
                >
                  male
                </Option>
                <Option
                  value={"female"}
                  className="input"
                  style={{ fontSize: "1.2rem" }}
                >
                  female
                </Option>
                <Option
                  value={"others"}
                  className="input"
                  style={{ fontSize: "1.2rem" }}
                >
                  others
                </Option>
              </Select>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Label htmlFor="govtId">Govt issued Id</Label>

              <Select
                className="inputs"
                id="govtId"
                name="govtId"
                style={{
                  border: "1px solid #34343457",
                  borderRadius: "0.5rem",
                }}
                onClick={handleInput}
              >
                <Option
                  value={"pan"}
                  className="input"
                  style={{ fontSize: "1.2rem" }}
                >
                  Pan
                </Option>
                <Option
                  value={"adhaar"}
                  className="input"
                  style={{ fontSize: "1.2rem" }}
                >
                  Adhaar
                </Option>
              </Select>
            </Box>
            {govt === "adhaar" ? (
              <Box sx={{ marginTop: "2.2rem" }}>
                <Box className="inputs">
                  <Input
                    className="input"
                    type="number"
                    name="govtId"
                    id="govtId"
                    placeholder="Enter Adhaar Number"
                    value={tableData.govtId}
                    onChange={handleInputChange}
                  ></Input>
                </Box>
              </Box>
            ) : (
              <Box sx={{ marginTop: "2.2rem" }}>
                <Box className="inputs">
                  <Input
                    className="input"
                    type="text"
                    name="govtId"
                    id="govtId"
                    placeholder="PAN"
                    value={tableData.govtId}
                    onChange={handleInputChange}
                  ></Input>
                </Box>
              </Box>
            )}
          </Item>
        </Div>
        <Div>
          <Box sx={{ display: "flex", alignItems: "center", gap: "3rem" }}>
            <Button
              variant="contained"
              sx={{ fontSize: "1.5rem", width: "25rem" }}
              onClick={handleSubmit}
            >
              Next
            </Button>
          </Box>
        </Div>
      </Container>
      <DataList />
    </>
  );
};

export default Home;
