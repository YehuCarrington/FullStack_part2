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
    }

    if(type === 'error'){
        return (
            <div className='error'>
                {message}
            </div>
        )
    }
}

export default Notification