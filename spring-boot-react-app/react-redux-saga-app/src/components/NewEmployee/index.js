import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { addEmployeeAction } from '../../actions/employees-actions'
import { showAlert, hideAlertAction } from '../../actions/alert-actions'
import './index.css'

const NewEmployee = ({ history }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')

  // access the store state
  const loading = useSelector(state => state.employees.loading) // true o false
  const error = useSelector(state => state.employees.error) // true o false
  const alert = useSelector(state => state.alert.alert)

  const submitNewEmployee = async event => {
    event.preventDefault()
    // validate form
    if(firstName.trim() === '' || lastName.trim() === '' || emailId.trim() === '') {
      const alert = {
        msg: 'All fields are required.'
      }
      showAlert(alert)
      return
    }
    // if no errors
    hideAlertAction()
    // create new employee
    await addEmployeeAction({ firstName, lastName, emailId })
    // redirect to main component
    history.push('/')
  }

  const goBack = () => {
    history.push('/')
  }

  return (
    <div>
      <h2 className='table__title'>New Employee</h2>
      <form
        className='form'
        onSubmit={submitNewEmployee} >
        <section className='form__section'>
          <label>First Name</label>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />
        </section>
        <section className='form__section'>
          <label>Last Name</label>
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
        </section>
        <section className='form__section'>
          <label>Email Id</label>
          <input
            type='text'
            placeholder='Email Id'
            name='emailId'
            value={emailId}
            onChange={event => setEmailId(event.target.value)}
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
        { alert ? <p className='alert-message'>{alert.msg}</p> : null }
      </form>
      { loading ? <p>Loading...</p> : null }
      { error ? <p>Ups! An error ocurred.</p> : null }
    </div>
  )
}

export default NewEmployee