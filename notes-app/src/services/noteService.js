import axios from "axios";
const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}

const create = async (content) => {
  const newNote = {
    content: content,
    important: false
  }

  const response = await axios.post(baseUrl, newNote);
  return response.data;
}

const deleteNote = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

const changeImportance = async (id) => {
  const { data } = await axios.get(`${baseUrl}/${id}`)
  const newNote = {
    ...data, important: !data.important
  }
  const response = await axios.put(`${baseUrl}/${id}`, newNote)
  return response.data
}

export default { getAll, create, deleteNote, changeImportance }