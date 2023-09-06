import useStore from "../store";
import './message.scss';

function Message() {
    const { message, setMessage } = useStore();
    return (
        <div className="messageContainer">
            <div className="message">
                {message}
                <button onClick={() => { setMessage('') }}>Ok</button>
            </div>
        </div>

    )
}
export default Message;