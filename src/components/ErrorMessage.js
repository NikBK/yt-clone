const ErrorMessage = ({ message }) => {
    console.log("we are getting error", message)
    return (
        <div>Error: {message}</div>
    );
}

export default ErrorMessage;