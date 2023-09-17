import MarioAndAdrien1 from '../assests/MarioAndAdrien1.jpg';
import MarioAndAdrien2 from '../assests/MarioAndAdrian2.jpg';

function About() {
  return (
    <section className='about'>
      <div className='container'>
        <article className='about-text'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure facere id ab, dolores tenetur eveniet reprehenderit, exercitationem optio voluptate, ex laboriosam praesentium. Aliquid omnis voluptates doloremque? Fugiat ipsam impedit omnis!</p>
        </article>
        <div className='about-imgs'>
          <img id='img1' src={MarioAndAdrien1} alt='Mario and Adrien' />
          <img id='img2' src={MarioAndAdrien2} alt='Mario and Adrien' />
        </div>
      </div>
    </section>
  );
}

export default About;
