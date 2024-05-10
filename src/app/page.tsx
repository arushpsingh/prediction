"use client";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledForm = styled('form')`
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  border-radius: 0.5rem;
`;

export default function Home() {
  const [name, setName] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${name}`);
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Enter your name
        </Typography>
        <TextField
          size="small"
          variant="outlined"
          label="Enter your name"
          className="text-black"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Predict data
        </Button>
      </StyledForm>
    </StyledContainer>
  );
}
