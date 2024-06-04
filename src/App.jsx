import { useState } from 'react'
import './App.css'
import ImageCard from './components/ImageCard/ImageCard';
import {ThemeProvider} from "@mui/material/styles"
import { CssBaseline, createTheme } from '@mui/material/';

const theme = createTheme({
  palette: {
    background: {
      default: '#B3E5FC',
    },
  },
});



function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ImageCard/>
      </ThemeProvider>
    </>
  )
}

export default App
