const Notification = ({message, type}) => {
    if(message === null)
        {
            return (
                null
            )
        }

    if(type === 'notification'){
        return (
            <div className='notif'>
                {message}
            </div>
        )
    } else if (type === 'error'){
        return (
            <div className='error'>
                {message}
            </div>
        )
    } else {
        console.log(`The message: "${message}" was not shown`)
        return(
            null
        )
    }
}

export default Notification