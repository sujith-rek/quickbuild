import { useState } from "react"
import { Input, Button, FormControl, FormLabel, Container } from "@chakra-ui/react";
import { signUp } from "@/operations/auth.fetch";
import { useRouter } from "next/router";

function signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (password === confirmPassword) {
            const response = await signUp({ email, password, name, phone })
            if (response.status === 201) {
                alert("User created successfully")
                router.push("/auth/signin")
            } else {
                alert("Error creating user");
                console.log(response)
            }

        } else {
            alert("Passwords do not match")
        }
    }

    return (
        <Container maxW="xl">
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </FormControl>
            <Button colorScheme="blue" onClick={handleSubmit}>Sign Up</Button>
        </Container>
    )
}

export default signup