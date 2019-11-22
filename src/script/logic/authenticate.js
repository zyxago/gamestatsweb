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