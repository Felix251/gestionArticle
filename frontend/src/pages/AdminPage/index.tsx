import { Menu } from "../../components/Menu";
import "../../styles/style.css";
function AdminPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gestion des utilisateurs</h1>
      </header>
      <Menu></Menu>
    </div>
  );
}

export default AdminPage;
