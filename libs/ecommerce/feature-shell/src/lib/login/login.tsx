import { Card } from '@novaventa/ecommerce/ui';
import { useProduct } from '@novaventa/ecommerce/data-access';
export interface LoginProps {
  message: string;
}

export function Login(props: LoginProps) {
  const { product } = useProduct();
  console.log(product);
  return (
    <div>
      <h1>Welcome to Login {props.message}!</h1>
      <Card />
    </div>
  );
}

export default Login;
