import { Icon } from '../Components/Styles/Icon'
import { SearchInput } from '../Components/Styles/SearchInput'
import { Data } from '../Fixtures/Data'
import styled from 'styled-components'
import { PageComponenet } from '../Design/PageComponent'

const SearchComponent = () => {
  const {
    search: { title, textIcons },
  } = Data

  return (
    <div className='search-wrapper'>
      <div>
        <h1>{title}</h1>
        <SearchInput />
        {textIcons.map((item) => (
          <Icon {...item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default SearchComponent

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
