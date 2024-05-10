'use client'
import { Box, styled } from "@mui/material";

export const StyledContainer = styled(Box)`
  max-width: 32rem;
  margin: auto;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
  overflow: hidden;
  padding: 1rem;

  @media (min-width: 768px) {
    max-width: 42rem;
    margin: 0.75rem;
  }
`

export const StyledContent = styled(Box)`
  padding: 1rem;
`

export const StyledInfoHeader = styled(Box)`
  text-transform: uppercase;
  font-size: 0.875rem;
  color: '#4f46e5';
  font-weight: 600;
  margin-bottom: 0.5rem;
`

export const StyledInfoItem = styled(Box)`
  margin-top: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 500;
  color: #000000;
`