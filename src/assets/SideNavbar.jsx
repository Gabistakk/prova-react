import React from 'react'

import { Home, Setting, User } from 'react-iconly';
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom';


export default function SideNavbar() {
  return (
    <div className='navbar'>
        <a href='/'>
            <Button
              size={'xl'}
              auto
              color="gradient"
              icon={<Home set="bold" primaryColor="White" size={'xlarge'}/>}
            >Home</Button>
            </a>
            <a href='/settings'>
            <Button
              size={'xl'}
              auto
              color="gradient"
              icon={<Setting set="bold" primaryColor="White" size={'xlarge'} />}
            >Config</Button>
            </a>
            <a href='/profile'>
            <Button
              size={'xl'}
              auto
              color="gradient"
              icon={<User set="bold" primaryColor="White" size={'xlarge'} />}
            >Perfil</Button>
            </a>

          </div>
  )
}
