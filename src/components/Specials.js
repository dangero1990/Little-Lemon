const cardData = [
  {
    id: 'Greek Salad',
    description: 'The famous greek salad of crispy lettuc, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons',
    img: require('../assests/greek salad.jpg'),
  },
  {
    id: 'Brushetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with salt and olive oil',
    img: require('../assests/bruscetta2.jpg'),
  },
  {
    id: 'Lemon Dessert',
    description: "This comes straight from grandma's book, every last ingredient has been sourced and is as authentic as can be imagined",
    img: require('../assests/lemon dessert.jpg'),
  },
];

function Card({ image, title, description }) {
  return (
    <div className='card'>
      <img src={image} alt={title} />
      <div className='card-body'>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>Order delivery</p>
      </div>
    </div>
  );
}

const cards = cardData.map((card) => <Card key={card.id} image={card.img} title={card.id} description={card.description} />);

function Specials() {
  return (
    <section>
      <div className='container'>
        <div className='specials-heading'>
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <div className='card-grid'>{cards}</div>
      </div>
    </section>
  );
}

export default Specials;
