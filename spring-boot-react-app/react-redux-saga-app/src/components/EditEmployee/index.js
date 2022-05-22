import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { editEmployeeAction } from '../../actions/employees-actions'
import { useHistory } from 'react-router-dom'
import './index.css'

const EditEmployee = () => {
  const history = useHistory()
  const employeeEdit = useSelector(state => state.employees.editEmployee)
  const [employee, setEmployee] = useState({
    name: '',
    price: ''
  })

  // fill state
  useEffect(() => {
    setEmployee(employeeEdit)
  }, [employeeEdit])


  const submitEditEmployee = event => {
    event.preventDefault()
    editEmployeeAction(employee)
    history.push('/')
  }

  // read data from form
  const onChangeForm = event => {
    setEmployee({
      ...employee,
      [event.target.name] : event.target.value
    })
  }

  const goBack = () => {
    history.push('/')
  }

  return (
    <div>
       <h2 className='table__title'>Edit employee</h2>
      <form
        className='form'
        onSubmit={submitEditEmployee}
      >
        <section className='form__section'>
          <label>First Name</label>
          <input
            type='text'
            name='firstName'
            value={employee.firstName}
            onChange={onChangeForm}
          />
        </section>
        <section className='form__section'>
          <label>Last Name</label>
          <input
            type='text'
            name='lastName'
            
            value={employee.lastName}
            onChange={onChangeForm}
          />
        </section>
        <section className='form__section'>
          <label>Last Name</label>
          <input
            type='text'
            name='emailId'
           
            value={employee.emailId}
            onChange={onChangeForm}
          />
        </section>
        <div className='button__container'>
          <button
            type='button'
            className='button button--cancel'
            onClick={goBack}
           >Cancel</button>
          <button className='button button--confirm'>Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default EditEmployee