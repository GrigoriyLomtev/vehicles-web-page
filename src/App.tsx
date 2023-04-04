import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import VehiclesGrid from './components/VehiclesGrid/VehiclesGrid';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VehiclesGrid />
    </ThemeProvider>
  );
}

export default App;
