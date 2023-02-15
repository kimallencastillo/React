import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { baseUrl } from '../shared';
import AddCustomer from '../components/AddCustomer';

export default function Customers() {
    const [customers, setCustomers] = useState()
    useEffect(() => {
        console.log('Fetching....');
        fetch( baseUrl + 'api/customers/')
        //fetch('http://localhost:8000/api/customers/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setCustomers(data.customers)
        })
        .catch((error) => console.error(error))
    }, []); 
    function newCustomer(name, industry) {
        const data = {name: name, industry: industry};
        const url = baseUrl + 'api/customers/'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            if(!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json();
        })
        .then((data) => {
            // assume the add was succesful
            // hide modal
            // make suyre the list is updated appropriately
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <>
        <h1>Here our Customers:</h1>
        <ul>
        {customers ? customers.map((customer) => {
            return (
            <li key={customer.id} >
                <Link to={"/customer/" + customer.id}>
                    {customer.name}
                </Link>
            </li>
        )}) 
        : null }
        </ul>
        <AddCustomer newCustomer={newCustomer}/>
        </>
    )
}