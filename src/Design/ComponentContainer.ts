import styled from 'styled-components'
import { PageComponenet } from './PageComponent'

export const ComponentContainer = styled(PageComponenet)`
  justify-content: right;
  align-items: center;
  height: 220px;
  padding: 1rem;
  h3 {
    text-align: center;
    margin-top: 2.5rem;
    font-weight: 300;
  }
  p {
    display: inline;
  }
  .filter {
    margin-top: 1rem;
    text-align: right;
  }
`
