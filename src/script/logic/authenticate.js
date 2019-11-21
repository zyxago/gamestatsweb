export async function verifyAuthentication(authToken, setVerification) {
    console.log("From verifier: " + authToken);
    const res = await fetch("/authenticate/token", {
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