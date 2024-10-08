// @ts-nocheck

import { TypographyOptions } from "@mui/material/styles/createTypography"

const appTypography = {
  fontFamily: ['Inria Sans', '-apple-system', 'Arial', 'sans-serif'].join(','),
  h1: {
    fontWeight: 800,
    fontSize: '50px',
    letterSpacing: '-1.5px',
    lineHeight: '85px',
  },
  h2: {
    fontWeight: 600,
    fontSize: '31px',
    lineHeight: '92px',
    letterSpacing: '-0.5px',
  },
  h3: {
    fontWeight: 500,
    fontSize: '25px',
    lineHeight: '74px',
  },
  h4: {
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '53px',
  },
  h5: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '36px',
  },
  h6: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '28px',
    letterSpacing: '0.15px',
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px',
  },
  subtitle2: {
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.1px',
  },
  body1: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
  body2: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.0025em',
  },
  caption: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.4px',
  },
  overline: {
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '15px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.5px',
    textTransform: 'initial',
  },
  button1: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.5px',
    textTransform: 'initial',
  },
} as TypographyOptions

export default appTypography
