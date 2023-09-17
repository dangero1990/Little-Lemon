const cardData = [
  {
    id: 'Greek Salad',
    description: 'The famous greek salad of crispy lettuc, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons',
    img: require('../assests/greek salad.jpg'),
    price: 9.99,
  },
  {
    id: 'Brushetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with salt and olive oil',
    img: require('../assests/bruscetta2.jpg'),
    price: 7.99,
  },
  {
    id: 'Lemon Dessert',
    description: "This comes straight from grandma's book, every last ingredient has been sourced and is as authentic as can be imagined",
    img: require('../assests/lemon dessert.jpg'),
    price: 5.99,
  },
];

function Card({ image, title, description, price }) {
  return (
    <div className='card'>
      <img src={image} alt={title} />
      <div className='card-body'>
        <div className='card-heading'>
          <h4 className='card-title'>{title}</h4>
          <span>${price}</span>
        </div>
        <p className='card-p'>{description}</p>
        <a href='#'>Order delivery</a>
      </div>
    </div>
  );
}

const cards = cardData.map((card) => <Card key={card.id} image={card.img} title={card.id} description={card.description} price={card.price} />);

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
