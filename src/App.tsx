import { Route, Routes } from "react-router-dom";
import { UserList } from "./pages/user-list";
import UserProfile from "./pages/user-profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:id" element={<UserProfile />} />
    </Routes>
  );
}
export default App;
