import Header from "./components/Header";
import FormContainer from "./containers/FormContainer";

function App() {
  return (
    <div className="container" style={{padding:10, display:'flex'}}>
      <div className="card bg-light border-dark w-100">
        <div class="card-body">
        <Header/>
        <FormContainer />
        </div>
      </div>
    </div>
      
  );
}

export default App;
