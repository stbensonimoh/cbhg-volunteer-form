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
        <h1 className="text-3xl my-4 text-center">Volunteer Application Form</h1>
      </section>
      <section
        id="form"
        className="flex flex-col bg-white lg:w-2/5 py-8 rounded-md shadow-md"
      >
        <form className="flex flex-col justify-center items-center w-full px-8">
          <div className="row">
            <div className="column">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" required />
            </div>
            <div className="column">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" required />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="preferredName">Preferred Name</label>
              <input
                type="text"
                name="preferredName"
                id="preferredName"
                required
              />
            </div>
            <div className="column">
              <label htmlFor="gender">Gender</label>
              <select>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" required />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" required />
            </div>
            <div className="column">
              <label htmlFor="state">State</label>
              <input type="text" name="state" id="state" required />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                placeholder="e.g. +2348056180438"
                name="phoneNumber"
                id="phoneNumber"
                required
              />
            </div>
            <div className="column">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="preferredStartDate">Preferred Start Date</label>
              <input
                type="date"
                name="preferredStartDate"
                id="preferredStartDate"
                required
              />
            </div>
            <div className="column">
              <label htmlFor="numOfHours">
                Number of volunteer Hours per week
              </label>
              <input
                type="number"
                step={0.1}
                min={0.5}
                name="numOfHours"
                id="numOfHours"
                required
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col">
              <label htmlFor="areasOfInterest">Areas of Interest</label>
              <textarea
                rows="3"
                placeholder="List the areas you are interested in volunteering here"
                name="areasOfInterest"
                id="areasOfInterest"
                required
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col">
              <label htmlFor="reasonForVolunteering">Areas of Interest</label>
              <textarea
                rows="3"
                placeholder="What is your reason for volunteering?"
                name="reasonForVolunteering"
                id="reasonForVolunteering"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="emergencyContactName">
                Emergency Contact Name
              </label>
              <input
                type="text"
                name="emergencyContactName"
                id="emergencyContactName"
                required
              />
            </div>
            <div className="column">
              <label htmlFor="emergencyContactNumber">
                Emergency Contact Number
              </label>
              <input
                type="tel"
                step={0.1}
                min={0.5}
                name="emergencyContactNumber"
                id="emergencyContactNumber"
                required
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col">
              <label htmlFor="emergencyContactNumber">
                Emergency Contact Number
              </label>
              <input
                type="tel"
                placeholder="e.g. +2348056180438"
                name="emergencyContactNumber"
                id="emergencyContactNumber"
                required
              />
            </div>
          </div>
          <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-8 rounded mt-8">
            Submit
          </button>
        </form>
      </section>
      <p className="my-12">
        Copyright &copy; {new Date().getFullYear()} CuisineByHG{" "}
      </p>
    </div>
  );
}

export default App;
