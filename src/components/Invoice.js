import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const apiURI = 'https://sales-invoice-mern.herokuapp.com';

export default function Invoice(props) {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiURI}/invoice`)
      .then((response) => setInvoices(response.data));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`${apiURI}/invoice${id}`)
      .then((res) => {
        const updatedInvoice = invoices.filter((item) => item._id !== id);
        setInvoices(updatedInvoice);
        console.log(res);
      })
      .catch((err) => console.log("Error: " + err));
  };
  const tabularData = invoices.map((item, index) => (
    <tr key={item._id}>
      <td>{index + 1}</td>
      <td>{new Date(item.createdAt).toLocaleDateString()}</td>
      <td>
        <Link className="btn btn-primary" to={"/invoice/" + item._id}>
          View
        </Link>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(item._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="row">Index</th>
            <th scope="row">Created At</th>
            <th scope="row">View Invoice</th>
            <th scope="row">Delete</th>
          </tr>
        </thead>
        <tbody>{tabularData}</tbody>
      </table>
    </div>
  );
}
