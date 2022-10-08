// @ts-nocheck
import { useState } from 'react'
import styled from 'styled-components'
import { CenterComponent } from '../Components/CenterComponent'
import SidebarLink from '../Components/SidebarLink'

const HelpComponent = ({ data, removeSidebarLink }) => {
  const [readMore, setReadMore] = useState(true)

  const loremTwentyFive =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, voluptatum tempora rem nobis velit nisi blanditiis quae sunt neque accusamus. Fugiat quo distinctio repellat ratione.'

  const loremHundred =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid ducimus consectetur fugit, asperiores adipisci nemo optio, soluta beatae sunt nisi esse iure blanditiis deserunt deleniti dolores possimus necessitatibus quas reprehenderit non sapiente distinctio mollitia? Tenetur fuga minus ipsa neque quos facere rem natus perspiciatis, laudantium repudiandae voluptatem quas dolorum deleniti accusantium iste laborum, enim culpa, inventore dolor autem maiores sunt. Provident recusandae qui ea nulla dolor facere quae, et quod voluptate in eaque pariatur nobis architecto quasi, eveniet officiis, at unde facilis soluta rerum itaque deserunt! Odio, doloremque unde ad numquam molestias iure dolores autem nihil eaque, sit facere.'

  return (
    <Wrapper>
      <div className='sidebar'>
        {data.map((item) => {
          const { id, title } = item
          return (
            <SidebarLink
              key={id}
              id={id}
              title={title}
              removeSidebarLink={removeSidebarLink}
            />
          )
        })}
      </div>
      <div className='content'>
        <h3>{loremTwentyFive}</h3>
        <h3>Hej Hej</h3>
        <h5>
          {readMore ? loremHundred : `${loremHundred.substring(0, 200)}...  `}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Vis mindre' : 'Vis resten'}
          </button>
        </h5>
      </div>
    </Wrapper>
  )
}

export default HelpComponent

const Wrapper = styled(CenterComponent)`
  min-height: 100vh;
  margin-bottom: 3rem;
  gap: 0 3rem;
  display: block;

  button {
    background-color: transparent;
    border: none;
    font-weight: 900;
    transition: var(--transition);
    color: darkblue;
  }

  button:hover {
    transform: scale(1.05);
  }

  h1 {
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  h5 {
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.75rem;
  }

  .sidebar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .sidebar {
      display: block;
      flex-basis: 30%;
      padding: 1rem;
      border: 2px solid black;
    }
    display: flex;
    justify-content: flex-start;
  }

  .content {
    flex-basis: 70%;
    padding: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
`
