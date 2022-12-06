const ErrorMessage = ({ message }) => {
    console.log(message.message)
    return (
        <div>{message.message}</div>
    );
}

export default ErrorMessage;