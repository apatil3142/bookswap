import InputField from '../components/InputField';
import Button from '../components/Button';
import { Container, Form, Header, LeftBox, Para, RightBox, Span, Wrapper } from '../components/CommonStyles';
import { Link, useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { ISignInPayload } from '../interface';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import { signin } from '../services/authService';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Login = () => {
  const [userDetails, setUserDetails] = useState<ISignInPayload>({name: '', password: ''});
  const {loading} = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = useCallback( async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginStart());
    try{
      const res = await signin({...userDetails});
      if(res.data){
        dispatch(loginSuccess(res.data))
        navigate('/');
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err: any){
      dispatch(loginFailure());
    }
  },[userDetails, dispatch, navigate]);

  return (
    <Container>
      <Wrapper>
        <LeftBox>
          <Header>Welcome Back!</Header>
          <Para>Dive into a world where second-hand books find new homes and stories continue to inspire. Join us in our mission to make the joy of reading accessible to all, one book at a time. Happy swapping!</Para>
        </LeftBox>
        <RightBox>
          <Header>Sign In</Header>
          <Form onSubmit={handleSignIn}>
            <InputField label='Username' value={userDetails.name} onChange={(e) => setUserDetails(prev => ({...prev, name: e.target.value}))} />
            <InputField type='password' label='Password' value={userDetails.password} onChange={(e) => setUserDetails(prev => ({...prev, password: e.target.value}))} />
            <Button type='submit'>Sign In</Button>
            {loading && <Span>Loading ... </Span>}
          </Form>
          <Span>OR</Span>
          <Span size='lg'>Don't have an account? <Link to={'/signup'}>Sign Up.</Link></Span>

        </RightBox>
      </Wrapper>
    </Container>
  )
}

export default Login
