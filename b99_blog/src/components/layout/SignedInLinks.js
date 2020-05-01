import React from 'react'
import { NavLink} from 'react-router-dom'

export default function SignedInLinks() {
    return (
        <ul className='right'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>Log out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating blue darken-3'>ADR</NavLink></li>
        </ul>
    )
}
