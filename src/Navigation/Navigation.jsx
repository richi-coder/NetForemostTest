import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='flex flex-row gap-x-7'>
        <Link to={'/timer'}>Go to timer!</Link>
        <Link to={'/blog'}>Go to blog</Link>
        <Link to={'/table'}>Go to table</Link>
        <Link to={'/uselayout'}>Go to useLayout</Link>
        <Link to={'/usememo'}>Go to useMemo</Link>
    </div>
  )
}

export default Navigation;
