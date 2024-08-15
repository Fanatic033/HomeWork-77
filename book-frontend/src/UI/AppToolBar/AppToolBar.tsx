import {AppBar, createTheme, styled, ThemeProvider, Toolbar, Typography} from '@mui/material';

const StyledLink = styled('p')({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const AppToolbar = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="sticky" sx={{mb: 2}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <StyledLink>Contact Book</StyledLink>
        </Typography>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

export default AppToolbar;
