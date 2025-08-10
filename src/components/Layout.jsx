import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="app-wrap">
      <aside className="sidebar">
        <h2 className="brand">GoJAPAN</h2>
        <nav className="nav">
          <NavLink to="/" end>Dashboard</NavLink>
          <NavLink to="/reports">Reports</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </aside>

      <main className="content">
        <header className="topbar">
          <h1 className="title">Mini Dashboard</h1>
        </header>
        <section className="page">
          <Outlet />
        </section>
        <footer className="footer">© {new Date().getFullYear()} pond</footer>
      </main>
    </div>
  );
}
