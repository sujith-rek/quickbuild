import React from 'react'
import { useSession } from 'next-auth/react'

function meow() {
    const { data: session, status } = useSession()

    return (
        <div>
            {status === "loading" && <div>Loading...</div>}
            {status === "authenticated" && <div>Meow, {session.user.email}</div>}
            {status === "unauthenticated" && <div>Meow, stranger</div>}
        </div>
    )
}

export default meow