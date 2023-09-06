import useStore from "../../store";
function CreateTestPageHeader() {
    const { userInfo } = useStore();
    return (
        <header>
            <h1>Test create</h1>
            <button onClick={()=>{window.location.href = 'http://localhost:3000';}}>Cancel</button>
        </header>
    )
}
export default CreateTestPageHeader;