import { SearchInput } from '../../Styles/SearchInput'
import { Data } from '../../Fixtures/Data'
import styled from 'styled-components'

import { ComponentContainer } from '../Design/ComponentContainer'

const SearchComponent = () => {
  const {
    search: { title },
  } = Data

  return (
    <Wrapper>
      <h1>{title}</h1>
      <SearchInput />
    </Wrapper>
  )
}

export default SearchComponent

const Wrapper = styled(ComponentContainer)`
  justify-content: right;
  align-items: center;

  h1 {
    text-align: center;
    font-weight: 300;
  }
`
