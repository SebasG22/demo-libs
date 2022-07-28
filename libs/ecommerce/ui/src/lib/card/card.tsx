import { useProduct } from '@novaventa/ecommerce/data-access';
/* eslint-disable-next-line */
export interface CardProps {
  title: string;
}

export function Card(props: CardProps) {
  const { message } = useProduct();
  console.log(message);
  return (
    <div>
      <h1>Welcome to Card! {props.title}</h1>
    </div>
  );
}

export default Card;
