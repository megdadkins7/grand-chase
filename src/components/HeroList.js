import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//data
import { heroes } from '../data'

//components
import Hero from './Hero'

const StyledHeroList = styled.div`
  display: flex;
  justify-content: center;
  .HeroContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px 150px;
  }
`;


function HeroList() {
  return (
    <StyledHeroList>
      <div className='HeroContainer'>
        {heroes.map(hero => (
          <Link key={hero.id} to={`/hero/${hero.id}`}>
            <Hero {...hero} />
          </Link>
        ))}
      </div>
    </StyledHeroList>
  )
}

export default HeroList

/*
media query sizes:

*/