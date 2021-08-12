import { useState, useEffect } from "react";
import Table from "../components/Table";
import axios from "axios";
const apiURI = 'https://sales-invoice-mern.herokuapp.com';
export default function Sales(props) {
  const [displayName, setDisplayName] = useState("Select Item");
  const [displayDescription, setDisplayDescription] = useState("Select Item");
  const [displayPrice, setDisplayPrice] = useState("Select Item");
  const [displayQty, setDisplayQty] = useState(0);
  const [items, setItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const wrapperStyles = { margin: "15px 0 15px 0" };
  
  useEffect(() => {
    axios
      .get(`${apiURI}/items`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.log("Error: " + err));
  }, []);
  const handleItemDetail = (e) => {
    const itemIndex = e.target.dataset.index;
    setDisplayName(items[itemIndex].name);
    setDisplayDescription(items[itemIndex].description);
    setDisplayPrice(items[itemIndex].price);
  };

  const handleQty = (e) => {
    setDisplayQty(e.target.value);
  };
  const handleAddItem = (e) => {
    if (displayName !== "Select Item" && displayQty > 0) {
      setAddedItems([
        ...addedItems,
        { name: displayName, price: displayPrice, quantity: displayQty },
      ]);
    }
  };
  const handleClear = (e) => {
    setDisplayName("Select Item");
    setDisplayDescription("Select Item");
    setDisplayPrice("Select Item");
    setDisplayQty(0);
  };
  const handlePrint = (e) => {
    // check
    axios
      .post(`${apiURI}/invoice`, { invoice: addedItems })
      .then((res) => console.log(res))
      .catch((err) => console.log("Error: " + err));
    // check
    window.print();
  };

  return (
    <div className="container" style={{ fontSize: "1.2rem" }}>
      <div className="row">
        <div className="col-md-4 no-print" style={wrapperStyles}>
          <h3 className="text-center">Items</h3>
          {items.map((itemObj, index) => (
            <button
              style={{ margin: 10 }}
              className="btn btn-outline-primary"
              data-index={index}
              onClick={handleItemDetail}
              key={itemObj._id}
            >
              {itemObj.name}
            </button>
          ))}
        </div>
        <div className="col-md-4 no-print" style={wrapperStyles}>
          <h3 className="text-center">Details</h3>
          <h5>Name</h5>
          <p style={{ fontWeight: 100 }}>{displayName}</p>
          <h5>Description</h5>
          <p style={{ fontWeight: 100 }}>{displayDescription}</p>
          <h5>Price</h5>
          <p style={{ fontWeight: 100 }}>{displayPrice}</p>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              placeholder="99"
              className="form-control"
              value={displayQty}
              onChange={handleQty}
              min={0}
            />
            <div style={{ marginTop: 10 }}>
              <button
                className="btn btn-primary"
                style={{ marginRight: 10 }}
                onClick={handleAddItem}
              >
                Add Item
              </button>
              <button
                className="btn btn-primary"
                style={{ marginRight: 10 }}
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        <Table
          itemsArr={addedItems}
          onPrint={handlePrint}
          wrapperStyles={wrapperStyles}
        />
      </div>
    </div>
  );
}
