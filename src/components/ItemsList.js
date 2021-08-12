import axios from "axios";
import { useEffect, useState } from "react";
const apiURI = 'https://sales-invoice-mern.herokuapp.com';
export default function ItemsList(props) {
  const [itemsArr, setItemsArr] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiURI}/items`)
      .then((res) => {
        setItemsArr(res.data);
      })
      .catch((err) => console.log("Error: " + err));
  }, []);

  const handleDelete = (e) => {
    const itemIndex = e.target.dataset.index;
    const itemToDelete = itemsArr[itemIndex];
    axios
      .delete(`${apiURI}/items`+ itemToDelete._id)
      .then((res) => {
        console.log(res);
        const updatedItems = itemsArr.filter(
          (itemObj) => itemObj._id !== itemToDelete._id
        );

        setItemsArr(updatedItems);
      })
      .catch((err) => console.log("Error: " + err));
  };

  return (
    <div className="container">
      {itemsArr.map((itemObj, index) => {
        return (
          <div
            className="btn-group"
            role="group"
            aria-label="Item Button"
            style={{ margin: 10 }}
            key={itemObj._id}
          >
            <button type="button" className="btn btn-outline-primary">
              {itemObj.name}
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              data-index={index}
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
