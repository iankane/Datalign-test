import AdminApp from "./AdminApp";
import CustomerApp from "./CustomerApp";
import ViewButtons from "./components/ViewButtons";

function App() {
  return (
    <div>
      <ViewButtons></ViewButtons>
      <AdminApp />
      <CustomerApp />
    </div>
  );
}

export default App;
