import InputFloatingLabel from "./components/inputs/InputFloatingLabel";

function App() {
  return (
    <div className="w-full h-screen grid place-items-center bg-gray-600">
      <div className="w-64 h-64 bg-white rounded-2xl shadow-lg p-4">
        <InputFloatingLabel
          id="email"
          type="email"
          placeholder="Email Address"
        />
      </div>
    </div>
  );
}

export default App;
