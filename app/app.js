import customersRaw from './resources/gistfile1.txt';
import DistanceCalculator from './distanceCalculator';

const calculator = new DistanceCalculator(
    53.339428, 
    -6.257664
);

export function customersRawToJSON(customersTxt) {
    if(!customersTxt) {
        throw 'No customers txt provided'; 
    }

    const customersToString = customersTxt.split('\n').join(',');
    return JSON.parse(`[${customersToString}]`);
}

export function customersInRange(maxRange) {
    const customers = customersRawToJSON(customersRaw);

    return customers.filter(function(customer) {
        return calculator.circularDistance(
            customer.latitude,
            customer.longitude
        ) <= Number(maxRange);
    })
    .sort(function(a,b) {
        return b.user_id - a.user_id;
    });
}

function updateCustomersInDOM() {
    const maxRange = document.getElementById("max-range").value || 100;
    const customersContainer = document.getElementById('customers-in-range');

    const filteredCustomers = customersInRange(maxRange);
    const fragment = document.createRange();
    fragment.selectNodeContents(customersContainer);
    fragment.deleteContents();

    filteredCustomers.forEach(function(customer) {
        console.log(customer)
        const customerNode = document.createElement("li");
        customerNode.className = 'customer'
        const customerTextNode = document.createTextNode(`
            User name: ${customer.name}, 
            User id: ${customer.user_id}
        `);
        customerNode.appendChild(customerTextNode);
        fragment.insertNode(customerNode);
    });
}

document.getElementById("refresh-results").onclick = updateCustomersInDOM;