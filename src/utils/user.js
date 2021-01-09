/*
 *  Checks whether a user is currently
 *  logged in, fetching token in localstorage.
 */
export const isLogged = () => {
    const token = window.localStorage.getItem('token');
    if(token != null) {
        return true;
    } else {
        return false;
    }
}

