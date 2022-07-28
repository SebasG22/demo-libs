import { Input } from '@novaventa/ecommerce/ui';
/* eslint-disable-next-line */
export interface RegisterProps {
  name: string;
}

export function Register(props: RegisterProps) {
  return (
    <div>
      <h1>Welcome to Register! {props.name}</h1>
      <Input />
    </div>
  );
}

export default Register;
