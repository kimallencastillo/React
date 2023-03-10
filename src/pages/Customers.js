import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { baseUrl } from "../shared";
import AddCustomer from "../components/AddCustomer";
import { LoginContext } from "../App";
export default function Customers() {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [customers, setCustomers] = useState();
  const [show, setShow] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  function toggleShow() {
    setShow(!show);
  }

  useEffect(() => {
    console.log("Fetching....");
    const url = baseUrl + "api/customers/";
    const access = localStorage.getItem("access");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access}`,
      },
    })
      //fetch('http://localhost:8000/api/customers/')
      .then((response) => {
        if (response.status === 401) {
          setLoggedIn(false);
          navigate("/login", {
            state: {
              previousUrl: location.pathname,
            },
          });
        }
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setCustomers(data.customers);
      })
      .catch((error) => console.error(error));
  }, []);

  // Adding new Customer Function
  function newCustomer(name, industry) {
    const data = { name: name, industry: industry };
    const access = localStorage.getItem("access");
    const url = baseUrl + "api/customers/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        // assume the add was succesful
        // hide modal
        toggleShow();
        // make sure the list is updated appropriately
        //console.log(data)
        setCustomers([...customers, data.customer]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <h1>Here our Customers:</h1>

      {customers
        ? customers.map((customer) => {
            return (
              <div className="m-2" key={customer.id}>
                <Link to={"/customer/" + customer.id}>
                  <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    {customer.name}
                  </button>
                </Link>
              </div>
            );
          })
        : null}

      <AddCustomer
        newCustomer={newCustomer}
        show={show}
        toggleShow={toggleShow}
      />
    </>
  );
}
