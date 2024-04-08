import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import type { GetServerSideProps,GetServerSidePropsContext } from 'next'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const session = await getServerSession(context.req, context.res, authOptions);
    
    return {
        props: { user: session?.user ?? null }
    }
}

function meow({ user }) {
    const { data: session, status } = useSession()

    return (
        <div>
            {status === "loading" && <div>Loading...</div>}
            {status === "authenticated" && <div>Meow, {session.user.email}</div>}
            {user && <div>Meow, {user.email}</div>}
            {status === "unauthenticated" && <div>Meow, stranger</div>}
        </div>
    )
}

export default meow