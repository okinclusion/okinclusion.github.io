import React from "react";
import Footer from '../Footer';
import { TypeAnimation } from 'react-type-animation';  

export default function Login() {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // function validateForm() {
    //     return email.length > 0 && password.length > 0;
    // }
    // function handleSubmit(event) {
    //     event.preventDefault();
    // }
    return <> 
    <div className='main-all'>
        <div className='responsive-type-animation'>
          <TypeAnimation className='name' sequence={["Staff Login", 1000]} speed={20} style={{ fontSize: '12vmin', fontFamily: 'Montserrat', textShadow: '3px 2px #6C3092', color: '#fff'}}/>
        </div> 
    </div>
    {/* <div className='main'>
		<Box textAlign="center" margin="40px 0 0 0" fontFamily="Montserrat" fontSize="1.25rem" p={1} padding={"50px 30px"}>
            <div className="Login">
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>Login</Button>
                </Form>
            </div>
		</Box>
    </div> */}
    <Footer/>
</>;
}

/*  
arrow: Down arrow icons created by th studio - Flaticon

*/

