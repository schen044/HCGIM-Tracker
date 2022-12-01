import sendRequest from './send-request'
import getAPI from './get-api'

const BASE_URL = '/api/users'

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export async function login(userData) {
    return sendRequest(`${BASE_URL}/login`, 'POST', userData)
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}

export function getInfo(username) {
    return getAPI(`${BASE_URL}/info/${username}`)
}