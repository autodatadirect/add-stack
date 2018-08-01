import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ActiveCell = ({ row }) =>
  <td>
    <div>{row && row.active ? 'Yes' : 'No'}</div>
  </td>

ActiveCell.propTypes = {
  row: PropTypes.object.isRequired
}

const IdCell = ({ row }) =>
  <td>
    <div><strong><Link to={`/user/${row.uuid}`}>{row.id}</Link></strong></div>
  </td>

IdCell.propTypes = {
  row: PropTypes.object.isRequired
}

const definition = [{
  id: 'id',
  label: 'ID',
  sortable: true,
  cellComponent: IdCell
}, {
  id: 'userName',
  label: 'Username',
  sortable: true
}, {
  id: 'realName',
  label: 'Full Name',
  sortable: true
}, {
  id: 'emailAddress',
  label: 'Email Address',
  sortable: true
}, {
  id: 'active',
  label: 'Active',
  sortable: true,
  cellComponent: ActiveCell
}]

export default definition
