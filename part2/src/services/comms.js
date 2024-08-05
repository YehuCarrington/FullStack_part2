import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

//We need to add functionality for the following
/**
    Retrival
    Creation
    Deletion
    Updating
*/ 

const getEntries = () => {
    return (
        axios.get(baseUrl)
              .then(response => response.data)
              .catch(error => {
                console.log('Failed to get phonebox entries', error)
                throw error
            })
    )
}

const createEntry = newEntry => {
    return(
        axios.post(baseUrl, newEntry)
               .then(response => response.data)
               .catch(error => {
                console.log('Failed to create the entry', error)
                throw error
            })
    )
}

const updateEntry = (id, entry) => {
    return(
        axios.patch(`${baseUrl}/${id}`,entry)
               .then(response => response.data)
               .catch(error => {
                console.log('Failed to update entry', error)
                throw error
            })
    )
}

const deleteEntry = id => {
    return (
        axios.delete(`${baseUrl}/${id}`)
              .then(response => response.data)
              .catch(error => {
                console.log('Failed to delete entry', error)
                throw error
              })
    )
}

export default {getEntries, createEntry, updateEntry, deleteEntry}