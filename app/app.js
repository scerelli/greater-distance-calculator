import {
  customersInRange,
} from './customersHelper'

function updateCustomersInDOM () {
  const maxRange = document.getElementById('max-range').value || 100
  const customersContainer = document.getElementById('customers-in-range')

  const filteredCustomers = customersInRange(maxRange)
  const fragment = document.createRange()
  fragment.selectNodeContents(customersContainer)
  fragment.deleteContents()

  filteredCustomers.forEach(fragmentToDOM)

  function fragmentToDOM (customer) {
    const customerNode = document.createElement('li')
    customerNode.className = 'customer'
    const customerTextNode = document.createTextNode(`
      User name: ${customer.name}, 
      User id: ${customer.user_id}
    `)
    customerNode.appendChild(customerTextNode)
    fragment.insertNode(customerNode)
  }
}

document.getElementById('refresh-results').onclick = updateCustomersInDOM
