/* eslint-disable-next-line */
export interface CardProps {
  title: string;
}

export function Card(props: CardProps) {
  return (
    <div>
      <h1>Welcome to Card! {props.title}</h1>
    </div>
  );
}

export default Card;
