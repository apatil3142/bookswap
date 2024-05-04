import InputField from '../components/InputField';
import Button from '../components/Button';
import { Container, Form, Header, LeftBox, Para, RightBox, Span, Wrapper } from '../components/CommonStyles';
import { Link, useNavigate } from 'react-router-dom';
import { ISignUpPayload } from '../interface';
import { useCallback, useState } from 'react';
import { signup } from '../services/authService';

const Register = () => {
  const [userDetails, setUserDetails] = useState<ISignUpPayload>({name: '', password: '', email: ''});
  const navigate = useNavigate();

  const handleSignUp = useCallback( async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const res = await signup({...userDetails});
      if(res.data){
        console.log(res.data);
        navigate('/signin');
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err: any){
      console.log(err);
    }
  },[userDetails, navigate]);

  return (
    <Container>
      <Wrapper>
        <RightBox>
          <Header>Sign Up</Header>
          <Form onSubmit={handleSignUp}>
            <InputField label='Username' value={userDetails.name} onChange={(e) => setUserDetails(prev => ({...prev, name: e.target.value}))} />
            <InputField label='Email' value={userDetails.email} onChange={(e) => setUserDetails(prev => ({...prev, email: e.target.value}))} />
            <InputField type='password' label='Password' value={userDetails.password} onChange={(e) => setUserDetails(prev => ({...prev, password: e.target.value}))} />
            <Button type='submit'>Sign Up</Button>
          </Form>
          <Span>OR</Span>
          <Span size='lg'>Already have an account? <Link to={'/signin'}>Sign In.</Link></Span>
        </RightBox>
        <LeftBox>
          <Header>Welcome to BookSwap!</Header>
          <Para>Dive into a world where second-hand books find new homes and stories continue to inspire. Join us in our mission to make the joy of reading accessible to all, one book at a time. Happy swapping!</Para>
        </LeftBox>
      </Wrapper>
    </Container>
  )
}

export default Register
