import './App.css';
import StyledButton, { FancyButton, SubmitButton } from './components/Button/Button';
import { AnimatedLogo, DarkButton } from './components/Button/Button.styles';
import logo from './logo.svg'
import './styles.css'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  dark: {
    primary: '#000',
    text: '#fff',
  },
  light: {
    primary: '#fff',
    text: '#000',
  }
}

const GlobalStyle = createGlobalStyle`
button {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className="App">
        {/* <img src={logo} className='App-logo' alt='logo'/> */}
        <AnimatedLogo src={logo} />
        <StyledButton>Styled</StyledButton>
        <br/>
        <StyledButton variant='outline'>Styled</StyledButton>
        <br/>
        <FancyButton>Fancy Button</FancyButton>
        <br/>
        <SubmitButton>Submit Button</SubmitButton>
        <br/>
        <DarkButton>Dark Theme Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
