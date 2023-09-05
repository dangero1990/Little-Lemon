import bruscetta from '../assests/bruscetta.jpg';

function Hero() {
  return (
    <section id='hero'>
      <div className='container'>
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolore quo earum reprehenderit non consectetur eos recusandae consequatur repellat atque dolores enim omnis sed, optio vero? Fugit facere omnis laudantium.</p>
          <button>Reserve a Table</button>
        </div>
        <img src={bruscetta} alt='bruscetta' />
      </div>
    </section>
  );
}

export default Hero;
