import ProfilePhoto from "./components/Profile/ProfilePhoto";
import Address from "./components/Profile/Address";
import FullName from "./components/Profile/FullName";
import AppCss from "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <FullName />
      <Address />
      <ProfilePhoto />
    </div>
  );
}
export default App;
