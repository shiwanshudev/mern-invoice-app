import Table from "./Table";
import { useState, useEffect } from "react";
import axios from "axios";

const apiURI = 'https://sales-invoice-mern.herokuapp.com';
export default function InvoiceView(props) {
  const wrapperStyles = { margin: "15px 0 15px 0" };
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiURI}/invoice/` + props.match.params.id)
      .then((res) => setInvoices(res.data.invoice))
      .catch((err) => console.log("Error: " + err));
  }, [props.match.params.id]);

  const handlePrint = (e) => {
    window.print();
  };
  return (
    <div className="container">
      <Table
        itemsArr={invoices}
        onPrint={handlePrint}
        wrapperStyles={wrapperStyles}
      />
    </div>
  );
}
