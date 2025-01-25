
const DEV_URL = `http://localhost:3000/`
const PROD_URL = `https://hackathon-backend-kappa.vercel.app`


export const BASE_URL = PROD_URL

export const ApiRoutes = {
    login: BASE_URL + 'auth/login',
    register: BASE_URL + 'auth/register',
    getTask: BASE_URL + 'task',
    postTask: BASE_URL + 'task',
}