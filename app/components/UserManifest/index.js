import React from 'react'
import UserManifestFilter from '../UserManifestFilter'
import { Manifest } from 'redux-manifest'
import definition from './manifest.def'
import { USERS as NAME } from '../../constants/manifestNames'
import 'redux-manifest/dist/styles.css'

const Users = () =>
  <div className='mt-2'>
    <UserManifestFilter />
    <Manifest name={NAME} definition={definition} />
  </div>

export default Users
