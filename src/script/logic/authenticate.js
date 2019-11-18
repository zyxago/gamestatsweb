export async function verifyAuthentication(authToken) {
    const res = await fetch("/authenticate/token", {
        method: "GET",
        headers: {
            'Authorization': authToken
        }
    })
    const data = await res.status;
    if(data === 200){
        return true;
    }
    return false;
}

export async function getAuthToken(username, password) {
    const authString = `Basic ${btoa(username + ":" + password)}`;

    const res = await fetch("/authenticate", {
        method: "GET",
        headers: {
            'Authorization': authString
        }
    });
    const data = await res.text();
    console.log(data);
    return data;
}