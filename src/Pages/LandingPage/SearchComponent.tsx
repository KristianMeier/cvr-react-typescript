import styled from 'styled-components'
import { Data } from '../../Fixtures/Data'
import { Icon } from '../../Components/Icon'
import { PageComponenet } from '../../Components/PageComponent'
import { SearchInput } from '../../Components/SearchInput'

const SearchComponent = () => {
  const {
    search: { title, textIcons },
  } = Data

  return (
    <Wrapper>
      <div>
        <h1>{title}</h1>
        <SearchInput />
        {textIcons.map((item) => (
          <Icon {...item} key={item.id} />
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(PageComponenet)`
  justify-content: right;
  align-items: center;
  height: 220px;

  h1 {
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

export default SearchComponent
