import sendRequest from './send-request'

const BASE_URL = '/api/goals'

export function getAll() {
    return sendRequest(BASE_URL)
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export async function addGoal(formData) {
    return sendRequest(`${BASE_URL}/add`, 'POST', formData)
}

export async function editGoal(id, formData) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData)
}

export function deleteGoal(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}