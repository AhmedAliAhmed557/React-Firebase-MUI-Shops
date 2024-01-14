import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function Auth() {
	const [email, setEmail] = useState("");
	const [passward, setPassward] = useState("");

	const signIn = async () => {
		await createUserWithEmailAndPassword(auth, email, passward);
		setEmail("");
		setPassward("");
	};
	return (
		<>
			<input
				type='text'
				placeholder='Email...'
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type='passward'
				placeholder='Passward...'
				onChange={(e) => setPassward(e.target.value)}
			/>
			<button onClick={signIn}>Sign in</button>
		</>
	);
}

export default Auth;
