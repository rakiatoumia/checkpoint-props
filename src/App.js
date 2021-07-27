import "./App.css";
import Profile from "./Profile/Profile";
import Navigationbar from "./Navigationbar";
function App() {
  const handleName = (name) => alert(name);

  return (
    <div>
      <Navigationbar />
      <div className="App">
        <Profile
          handleName={handleName}
          Fullname="Paolo coelho"
          Profession="Web Developper"
          Bio="Quisque sollicitudin lacus accumsan tincidunt potenti primis nullam scelerisque lectus"
        >
          photo
        </Profile>
      </div>
    </div>
  );
}
export default App;
