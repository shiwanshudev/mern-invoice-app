export default function Table(props) {
  let total = 0;
  return (
    <div className="col-md-4" style={props.wrapperStyles}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {props.itemsArr.map((itemObj, index) => {
            let subTotal = itemObj.quantity * itemObj.price;
            total += subTotal;
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{itemObj.name}</td>

                <td>{itemObj.price}</td>
                <td>{itemObj.quantity}</td>
                <td>{subTotal.toFixed(2)}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <th>Total</th>
            <td>{total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      {total !== 0 && (
        <div className="no-print text-right">
          <button className="btn btn-primary" onClick={props.onPrint}>
            Print
          </button>
        </div>
      )}
    </div>
  );
}
