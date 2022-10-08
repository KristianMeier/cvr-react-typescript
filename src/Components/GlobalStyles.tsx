import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --border: 1px solid black;
    --border-shadow: 0 0 10px 0 #888888;
    --transition: all 0.2s linear;
    --transform: scale(1.1);
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
