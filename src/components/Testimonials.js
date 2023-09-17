const reviewers = [
  {
    name: 'John Smith',
    rating: 4,
    review: 'Little Lemon was a had excellent food and excellent service',
    img: require('../assests/man1.jpg'),
  },
  {
    name: 'Janet Smith',
    rating: 5,
    review: "Little Lemon is my favorite restaurant and I'm always recommending it to friend and family",
    img: require('../assests/woman1.jpg'),
  },
  {
    name: 'Jared Smith',
    rating: 4,
    review: 'My first time at Little Lemon was very memorable. I will be coming back',
    img: require('../assests/man2.jpg'),
  },
];

function TestimonialCard({ name, rating, review, img }) {
  return (
    <div className='testimonial-card'>
      <span>{rating}</span>
      <img src={img} alt={name} />
      <h4 className='card-title'>{name}</h4>
      <p className='card-p'>{review}</p>
    </div>
  );
}

const testimonialList = reviewers.map((review) => <TestimonialCard name={review.name} rating={review.rating} review={review.review} img={review.img} />);

function Testimonials() {
  return (
    <section className='testimonials'>
      <div className='container'>
        <h2>Testimonials</h2>
        <article className='testimonial-grid'>{testimonialList}</article>
      </div>
    </section>
  );
}

export default Testimonials;
