import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemsForm from "./components/ItemsForm";
import Sales from "./components/Sales";
import ItemsList from "./components/ItemsList";
import Invoice from "./components/Invoice";
import InvoiceView from "./components/InvoiceView";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Sales} />
      <Route path="/add" component={ItemsForm} />
      <Route path="/list" component={ItemsList} />
      <Route path="/invoice/:id" component={InvoiceView} />
      <Route exact path="/invoice" component={Invoice} />
    </BrowserRouter>
  );
}
export default App;
