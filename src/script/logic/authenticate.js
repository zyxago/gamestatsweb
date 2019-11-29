/**
 * Verifies the users authToken to the database
 * @param {String} authToken 
 * @param {function} setVerification if authToken is correct sets verification to TRUE else FALSE
 */
export async function verifyAuthentication(authToken, setVerification) {
    const res = await fetch("/api/authenticate/token", {
        method: "GET",
        headers: {
            'Authorization': authToken
        }
    })
    const data = await res.ok;
    setVerification(data);
}

/**
 * Called once to authenticate user with database and if correct username and password returns a token to use in future authentications
 * @param {String} username 
 * @param {String} password 
 * 
 * @returns {String} Token to be used in future authentications
 */
export async function getAuthToken(username, password) {
    const authString = `Basic ${btoa(username + ":" + password)}`;
    const res = await fetch("/api/authenticate", {
        method: "GET",
        headers: {
            'Authorization': authString
        }
    });
    const data = await res.text();
    return data;
}