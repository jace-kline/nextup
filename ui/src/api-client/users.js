import { API_URL } from './apiConfig'
// import axios ??

// const fakeUser = {
//     id: 0,
//     firstName: 'John',
//     lastName: 'Smith',
//     email: 'johnsmith@gmail.com',
//     bio: ''
// }

export async function signup(userInfo) {
    let res;
    setTimeout(() => {
        res = { data: userInfo } ;
    }, 3000);
    return res;
}

export async function login(loginInfo) {
    let res;
    setTimeout(() => {
        res = { data: loginInfo } ;
    }, 3000);
    return res;
}

export async function logout(user) {
    let res;
    setTimeout(() => {
        res = { data: true };
    }, 3000);
    return res;
}