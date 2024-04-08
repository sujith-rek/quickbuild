export async function signIn(credentials: { email: string; password: string }) {
    const response = await fetch("/api/auth/callback/credentials", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    return response.json();
}

export async function signOut() {
    const response = await fetch("/api/auth/signout", {
        method: "POST",
    });
    return response.json();
}

export async function signUp(user: { name: string; email: string; password: string; phone: string }) {
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    return response.json();
}