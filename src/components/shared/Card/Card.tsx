import './Card.scss';

const Card = ({ style, Title, children }: { style?: any, Title: any, children: any}) => {
  const cardClassName = 'card';
  const cardHeaderClassName = 'card-header';
  const cardBodyClassName = 'card-body';

  return (
    <div style={style} className={cardClassName}>
      <div className={cardHeaderClassName}>
        <h3>{Title}</h3>
      </div>
      <div className={cardBodyClassName}>
        {children}
      </div>
    </div>
  )
}

export default Card;