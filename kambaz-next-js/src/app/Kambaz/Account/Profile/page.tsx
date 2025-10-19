import "./profile.css";

export default function Profile() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Profile</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="wd-profile-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="wd-profile-name"
            className="form-control"
            defaultValue="Rudra Parvate"
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="wd-profile-email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="wd-profile-email"
            className="form-control"
            defaultValue="rudra@parvate.com"
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="wd-profile-section" className="form-label">
            Section
          </label>
          <input
            type="text"
            id="wd-profile-section"
            className="form-control"
            defaultValue="CS4550 Section 11597"
            readOnly
          />
        </div>
      </form>
    </div>
  );
}
