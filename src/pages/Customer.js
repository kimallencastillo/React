import { useParams , Link , useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

import { baseUrl } from '../shared';

export default function Customer() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer , setCustomer] = useState();
    const [notFound , setNotFound] = useState();
    useEffect(() => {
        //console.log('useEffect')
        const url = baseUrl + 'api/customers/' + id;
        fetch(url)
        .then((response) => {
            if(response.status === 404) {
                //redirect to a 404 page ( new URL )
                setNotFound(true)
                //render a 404 component in this page
            }/*
            if(response.status === 500) {
                //redirect to a 404 page ( new URL )
                navigate('/404')
                //render a 404 component in this page
            }*/
            return response.json();
        })
        .then((data) => {
            setCustomer(data.customer)
        })
    }, [])

 
    return (
        <> { notFound ? <p>The customer with id {id} was not found</p> : null}
            { customer ? 
            <div>
                <p>{customer.id}</p>
                <p>{customer.name}</p>
                <p>{customer.industry}</p>
            </div> 
            : null }
            <button onClick={(e)=> {
                const url = baseUrl + 'api/customers/' + id;
                fetch(url, { method: 'DELETE', headers: {
                    'Content-Type': 'application/json'
                }})
                    .then((response) => {
                        if(!response.ok) {
                        throw new Error('Something went wrong');
                        }
                        navigate('/customers')
                        // assume things went well
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                    
            }}> Delete </button>
            <br/>
            <Link to='/customers'>Go Back</Link>
        </>
    )
}