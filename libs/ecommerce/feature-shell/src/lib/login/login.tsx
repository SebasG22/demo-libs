import { Card } from '@novaventa/ecommerce/ui';
/* eslint-disable-next-line */
export interface LoginProps {
  message: string;
}

export function Login(props: LoginProps) {
  return (
    <div>
      <h1>Welcome to Login {props.message}!</h1>
      <Card />
    </div>
  );
}

export default Login;
