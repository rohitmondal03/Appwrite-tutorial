import { useState } from "react"
import { Account, ID } from "appwrite"


import client from "../server/appwrite"


export default function Signup() {
    const [email, setEmail] = useState<string | undefined>('')
    const [password, setPassword] = useState<string | undefined>('')


    function signUpUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const account = new Account(client);

        // Register User
        account.create(
            ID.unique(),
            email,
            password,
        ).then((response: string) => {
            console.log(response);
        }, (error: string) => {
            console.log(error);
        });
    }

    return (
        <>
            <h1>Signup</h1>

            <form
                onSubmit={signUpUser}
            >
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="e.g : john123Doe@example.com"
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />

                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="e.g : john123Doe@example.com"
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                />

                <button
                    type="submit"
                    title="submit"
                >
                    Submit
                </button>
            </form>
        </>
    )
} 