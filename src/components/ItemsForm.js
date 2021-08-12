import { useState } from "react";
import axios from "axios";
const apiURI = 'https://sales-invoice-mern.herokuapp.com';
function ItemsForm(props) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [description, setDescription] = useState("");
  const handleItemSubmit = (e) => {
    e.preventDefault();
    const item = { name: itemName, description: description, price: itemPrice };
    axios
      .post(`${apiURI}/items/add`, item)
      .then((res) => {
        console.log(res);
        window.location = "/";
      })
      .catch((err) => console.log("Error: " + err));
  };
  return (
    <div className="container">
      <form onSubmit={handleItemSubmit}>
        <div className="form-group">
          <label>Item Name</label>
          <input
            className="form-control"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Item Price</label>
          <input
            className="form-control"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Save Item" />
        </div>
      </form>
    </div>
  );
}

export default ItemsForm;
