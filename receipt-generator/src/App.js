import Header from "./components/Header";
import FormContainer from "./containers/FormContainer";

function App() {
  return (
    <div className="container" style={{padding:10, display:'flex'}}>
      <div className="card bg-light mb-3 w-75">
        <div class="card-body">
        <Header/>
        <FormContainer />
        </div>
      </div>
    </div>
      
  );
}

export default App;
