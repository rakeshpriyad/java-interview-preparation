import React from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteEmployeeAction, retrieveEmployeeEditAction } from '../../actions/employees-actions'
import './index.css'

const Employee = (employee) => {
  const history = useHistory()
  const { firstName, lastName, emailId, id } = employee

  const confirmDeleteEmployee = id => {
    // ask the user for confirmation
    Swal.fire({
      title: 'Are you sure you want to delete the employee?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#62a086',
      cancelButtonColor: '#f66b61',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      result.value && deleteEmployeeAction(id)
    })
  }

  // function that redirects automátically, is better than 'Link'
  const redirectionEdition = employee => {
    retrieveEmployeeEditAction(employee)
    history.push(`employees/edit/${id}`)
  }

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName} </td>
      <td>{emailId} </td>
      <td className='button-container'>
        <button
          className='button button--edit'
          type='button'
          onClick={() => redirectionEdition(employee)}
        >Edit</button>
        <button
          className='button button--delete'
          type='button'
          onClick={() => confirmDeleteEmployee(id)}
        >Delete</button>
      </td>
    </tr>
  )
}

export default Employee