export default function Profile() {
  return (
    <div className="container mt-4">
      <h2>Profile – Rudra Parvate</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="profileName" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="profileName"
            className="form-control"
            defaultValue="Rudra Parvate"
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profileEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="profileEmail"
            className="form-control"
            defaultValue="rudra@parvate.com"
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profileSection" className="form-label">
            Section
          </label>
          <input
            type="text"
            id="profileSection"
            className="form-control"
            defaultValue="CS4550 Section 11597"
            readOnly
          />
        </div>
      </form>
    </div>
  );
}
