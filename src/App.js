import "./App.css";
import Profile from "./Profile/Profile";
import Navigationbar from "./Navigationbar";
function App() {
  const alertMyInput = (name) => alert(name);

  return (
    <div className="App">
      <Navigationbar />
      <Profile
/*         alertMyInput={alertMyInput}
 */        Fullname="Paolo coelho"
        Profession="Web Developper"
        Bio="Quisque sollicitudin lacus accumsan tincidunt potenti primis nullam scelerisque lectus"
      >
        photo
      </Profile>
      {/*       <User data={getData("Rakia Toumia")} />
       */}{" "}
    </div>
  );
}
export default App;
