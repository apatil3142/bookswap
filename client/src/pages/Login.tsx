import InputField from '../components/InputField';
import Button from '../components/Button';
import { Container, Form, Header, LeftBox, Para, RightBox, Span, Wrapper } from '../components/CommonStyles';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <LeftBox>
          <Header>Welcome Back!</Header>
          <Para>Dive into a world where second-hand books find new homes and stories continue to inspire. Join us in our mission to make the joy of reading accessible to all, one book at a time. Happy swapping!</Para>
        </LeftBox>
        <RightBox>
          <Header>Sign In</Header>
          <Form>
            <InputField label='Username' />
            <InputField type='password' label='Password' />
            <Button type='submit'>Sign In</Button>
          </Form>
          <Span>OR</Span>
          <Span size='lg'>Don't have an account? <Link to={'/signup'}>Sign Up.</Link></Span>
        </RightBox>
      </Wrapper>
    </Container>
  )
}

export default Login
