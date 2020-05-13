

export const signupValidator = ({
  firstName,
  lastName,
  email,
  pass,
  confirmPass,
  address,
  phone
}) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const phonePattern = /^[0-9]*$/
  let errArray = []
  if (
    !firstName.length
    || !lastName.length
    || !address.length
    || !email.length
    || !phone.length
    || !confirmPass.length
    || !pass.length
    || !address.length
  ) {
    errArray.push('All fields requried')
  }
  if (email.length && !emailPattern.test(email)) {
    errArray.push('Email not valid.')
  }
  if (pass.length && pass.length < 6) {
    errArray.push('Password must be of 6 characters')
  }
  if (confirmPass.length && confirmPass !== pass) {
    errArray.push('Confirm password and password must be same')
  }
  if (phone.length && (!phonePattern.test(phone))) {
    errArray.push('Phone number must be a number')
  }
  if (phone.length && phone.length < 7) {
    errArray.push('Phone number have greater than 7 digits')
  }
  return errArray
}

export const loginValidator = ({ email, password }) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  let errArray = []

  if (!email.length) {
    errArray.push('Email requried')
  }
  if (email.length && !emailPattern.test(email)) {
    errArray.push('Email not valid.')
  }
  if (!password.length) {
    errArray.push('Password requried')
  }
  if (password.length && password.length < 6) {
    errArray.push('Password not valid')
  }

  return errArray
}