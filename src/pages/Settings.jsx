export default function Settings() {
  return (
    <>
      <h2>Settings</h2>
      <label className="row">
        <span>Theme</span>
        <select>
          <option>System</option>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </label>
      <label className="row">
        <span>Language</span>
        <select>
          <option>ไทย</option>
          <option>English</option>
          <option>日本語</option>
        </select>
      </label>
    </>
  );
}
