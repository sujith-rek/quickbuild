import { useState } from "react"
import { Input, Button, FormControl, FormLabel, Container } from "@chakra-ui/react";
import { signIn } from "next-auth/react"

function signin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await signIn('credentials', { email, password })
        console.log(response)
    }


    return (
        <Container maxW="xl">
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button colorScheme="blue" onClick={handleSubmit}>Sign In</Button>
        </Container>
    )
}

export default signin