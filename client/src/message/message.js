import useStore from "../store";
import './message.scss';
const clientUrl = process.env.REACT_APP_CLIENT_URL;
function Message() {
    const { message, setMessage, isGoBack, setIsGoBack } = useStore();
    function buttonHandler() {
        if (isGoBack) {
            window.location.href = `${clientUrl}`;
        } else {
            setMessage('');
        }
    }
    return (
        <div className="messageContainer">
            <div className="message">
                {message}
                <button onClick={buttonHandler}>Ok</button>
            </div>
        </div>

    )
}
export default Message;
