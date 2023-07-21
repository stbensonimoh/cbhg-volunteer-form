import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App bg-slate-50 flex flex-col justify-center items-center">
      <section
        id="logo"
        className="flex flex-col justify-center items-center my-8"
      >
        <img src={logo} className="App-logo" alt="logo" width={150} />
        <h1 className="text-3xl my-4">Volunteer Application Form</h1>
      </section>
      <section id="form" className="flex flex-col justify-center items-center bg-white w-2/5 h-60 rounded-md shadow-md">
        <p>Hello</p>
      </section>
      <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-8 my-8 rounded">Submit</button>
      <p className="my-12">Copyright &copy; {new Date().getFullYear()} CuisineByHG </p>
    </div>
  );
}

export default App;
