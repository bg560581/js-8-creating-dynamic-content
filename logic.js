// const warranty = document.createElement('header');
// warranty.id = 'warranty'
// document.body.appendChild(warranty)


const warranty = document.createElement('header')
    warranty.innerHTML = '<h1>Warranty Information</h1>'
    document.body.appendChild(warranty)

const firstName = document.createElement('text-input')
    firstName.innerHTML = '<h2>First Name</h2>'
    document.body.appendChild(firstName)

const firstNameBox = document.createElement('input')
    firstNameBox.setAttribute('value', '')
    document.body.appendChild(firstNameBox)
    

const lastName = document.createElement  ('text-input')
    lastName.innerHTML = '<h2>Last Name</h2>'
    document.body.appendChild(lastName)

const lastNameBox = document.createElement('input')
    lastNameBox.setAttribute('value', '')
    document.body.appendChild(lastNameBox)


const companyName = document.createElement('text-input')
    companyName.innerHTML = '<h2>Company Name</h2>'
    document.body.appendChild(companyName)

const companyNameBox = document.createElement('input')
    companyNameBox.setAttribute('value', '')
    document.body.appendChild(companyNameBox)


const email = document.createElement  ('text-input')
    email.innerHTML = '<h2>Email</h2>'
    document.body.appendChild(email)

const emailBox = document.createElement('input')
    emailBox.setAttribute('value', '')
    document.body.appendChild(emailBox)


const phoneNumber = document.createElement('text-input')
    phoneNumber.innerHTML = '<h2>Phone Number</h2>'
    document.body.appendChild(phoneNumber)

const phoneNumberBox = document.createElement('input')
    phoneNumberBox.setAttribute('value', '')
    document.body.appendChild(phoneNumberBox)


const faxNumber = document.createElement  ('text-input')
faxNumber.innerHTML = '<h2>Fax Number</h2>'
document.body.appendChild(faxNumber)

const faxNumberBox = document.createElement('input')
    faxNumberBox.setAttribute('value', '')
    document.body.appendChild(faxNumberBox)


const address = document.createElement('text-input')
    address.innerHTML = '<h2>Address</h2>'
    document.body.appendChild(address)

const addressBox = document.createElement('input')
    addressBox.setAttribute('value', '')
    document.body.appendChild(addressBox)


const city = document.createElement  ('text-input')
    city.innerHTML = '<h2>City</h2>'
    document.body.appendChild(city)

const cityBox = document.createElement('input')
    cityBox.setAttribute('value', '')
    document.body.appendChild(cityBox)

const state = document.createElement('text-input')
    state.innerHTML = '<h2>State</h2>'
    document.body.appendChild(state)

const stateBox = document.createElement('input')
    stateBox.setAttribute('value', '')
    document.body.appendChild(stateBox)


const zipCode = document.createElement  ('text-input')
zipCode.innerHTML = '<h2>ZipCode</h2>'
document.body.appendChild(zipCode)

const zipCodeBox = document.createElement('input')
    zipCodeBox.setAttribute('value', '')
    document.body.appendChild(zipCodeBox)


const country = document.createElement('text-input')
    country.innerHTML = '<h2>Country</h2>'
    document.body.appendChild(country)
    
const countryBox = document.createElement('input')
    countryBox.setAttribute('value', '')
    document.body.appendChild(countryBox)

const deviceInformation = document.createElement('header')
deviceInformation.innerHTML = '<h1>Device Information</h1>'
document.body.appendChild(deviceInformation)

const dateOfPurchase = document.createElement('text-input')
    dateOfPurchase.innerHTML = '<h2>Date of Purchase</h2>'
    document.body.appendChild(dateOfPurchase)

const dateOfPurchaseBox = document.createElement('input')
    dateOfPurchaseBox.setAttribute('value', '')
    document.body.appendChild(dateOfPurchaseBox)


const model = document.createElement  ('text-input')
    model.innerHTML = '<h2>Model</h2>'
    document.body.appendChild(model)

const modelBox = document.createElement('input')
    modelBox.setAttribute('value', '')
    document.body.appendChild(modelBox)


const warrantySerialNumber = document.createElement('text-input')
    warrantySerialNumber.innerHTML = '<h2>Warranty Serial Number</h2>'
    document.body.appendChild(warrantySerialNumber)
    
const warrantySerialNumberBox = document.createElement('input')
    warrantySerialNumberBox.setAttribute('value', '')
    document.body.appendChild(warrantySerialNumberBox)


const save = document.createElement  ('button')
    save.innerHTML = '<h2>Save</h2>'
    save.style.width = '100px'
    save.style.height = '40px'
    save.style.position = 'relative'
    save.style.top = '75px'
    save.style.right = '150px'

    document.body.appendChild(save)

const close = document.createElement  ('button')
    close.innerHTML = '<h2>Close</h2>'
    close.style.width = '100px'
    close.style.height = '40px'
    close.style.position = 'relative'
    close.style.top = '75px'
    close.style.right = '125px'
    close.style.marginBottom = '100px'
    document.body.appendChild(close)
