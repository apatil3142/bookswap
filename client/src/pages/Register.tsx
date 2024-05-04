import InputField from '../components/InputField';
import Button from '../components/Button';
import { Container, Form, Header, LeftBox, Para, RightBox, Span, Wrapper } from '../components/CommonStyles';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <RightBox>
          <Header>Sign Up</Header>
          <Form>
            <InputField label='Username' />
            <InputField label='Email' />
            <InputField type='password' label='Password' />
            <Button>Sign Up</Button>
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
