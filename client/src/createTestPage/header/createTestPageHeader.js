const clientUrl = process.env.REACT_APP_CLIENT_URL;
function CreateTestPageHeader() {
    return (
        <header>
            <h1>Test create</h1>
            <button onClick={() => { window.location.href = `${clientUrl}` }}>Cancel</button>
        </header>
    )
}
export default CreateTestPageHeader;