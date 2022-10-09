import { Icon } from '../../Components/Styles/Icon'
import { SearchInput } from '../../Components/Styles/SearchInput'
import { Data } from '../../Fixtures/Data'
import '../../Layout/scss/Search.css'

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
