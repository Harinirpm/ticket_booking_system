import { Button, Dialog, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import styles from "../authentication/LoginForm.module.css";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledDialog = styled(Dialog)<{ $bgColor: string; $borderColor: string }>`
  .MuiPaper-root {
    width: 100%;
    padding: 20px;
    border-radius: 12px;
    background-color: ${(props) => props.$bgColor};
    border: 2px solid ${(props) => props.$borderColor};
  }
`;
const StyledTypography = styled(Typography)`
  font-size: 23px !important;
  font-family: 'Poppins' !important;
  margin-bottom: 30px !important;
`;
const StyledButton = styled(Button)`
  background-color: rgb(185, 4, 4) !important;
  text-transform: none !important;
  font-family: 'Poppins' !important;
  width: 100%;
  padding: 4px !important;
  margin-top: 20px !important;
  font-size: 21px !important;
  border-radius: 8px;
  color: white;
  &:hover {
    background-color: rgb(150, 0, 0) !important;
  }
`;
const StyledForm = styled("form")<{ $bgColor: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.$bgColor};
  width: 100%;
`;

const StyledInput = styled("input")<{ $inputBg: string; $textColor: string }>`
  padding: 10px;
  border-radius: 8px;
  border: 2px solid rgb(255, 7, 7);
  background-color: ${(props) => props.$inputBg};
  width: 100%;
  color: ${(props) => props.$textColor};
  font-family: 'Poppins';
  font-size: 16px;
  &:focus {
    border-color: rgb(255, 7, 7);
    outline: none;
  }
`;

const StyledLabel = styled("label")<{ $textColor: string }>`
  color: ${(props) => props.$textColor};
  font-family: 'Poppins';
  margin-bottom: 8px;
`;

const LoginForm: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", formData);
      console.log("User Saved", response.data);
      navigate("/home");
    } catch (error: any) {
      console.error("Login failed:", error);
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <Box>
      <StyledDialog
        open={open}
        $bgColor={isDarkMode ? "rgb(75, 75, 75)" : "#fff"}
        $borderColor={isDarkMode ? "rgb(255, 7, 7)" : "rgb(185, 4, 4)"}
      >
        <Box sx={{ padding: "40px", backgroundColor: isDarkMode ? "rgb(75, 75, 75)" : "#fff" }}>
          <StyledTypography style={{ color: isDarkMode ? "aliceblue" : "#1c1c1c" }}>
            Login / Signin
          </StyledTypography>

          <StyledForm onSubmit={handleSubmit} $bgColor={isDarkMode ? "rgb(75, 75, 75)" : "#fffff"}>
  <StyledLabel $textColor={isDarkMode ? "aliceblue" : "#1c1c1c"}>Email</StyledLabel>
  <StyledInput
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    $inputBg={isDarkMode ? "rgb(128, 128, 128)" : "#ffffff"}
    $textColor={isDarkMode ? "aliceblue" : "#1c1c1c"}
  />

  <StyledLabel $textColor={isDarkMode ? "aliceblue" : "#1c1c1c"}>Username</StyledLabel>
  <StyledInput
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    $inputBg={isDarkMode ? "rgb(128, 128, 128)" : "#ffffff"}
    $textColor={isDarkMode ? "aliceblue" : "#1c1c1c"}
  />

  <StyledLabel $textColor={isDarkMode ? "aliceblue" : "#1c1c1c"}>Password</StyledLabel>
  <StyledInput
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    required
    $inputBg={isDarkMode ? "rgb(128, 128, 128)" : "#ffffff"}
    $textColor={isDarkMode ? "aliceblue" : "#1c1c1c"}
  />

  {errorMessage && (
    <Typography
      sx={{
        color: "rgb(255, 85, 85)",
        fontSize: "14px",
        fontFamily: "Poppins",
        marginTop: "10px",
      }}
    >
      {errorMessage}
    </Typography>
  )}

  <StyledButton type="submit" variant="contained">
    Login
  </StyledButton>
</StyledForm>

        </Box>
      </StyledDialog>
    </Box>
  );
};

export default LoginForm;
