import footer from '../assests/footer.png';
import Nav from '../components/Nav';

function Footer() {
  return (
    <footer>
      <section className='container'>
        <img src={footer} className='logo' alt='logo' />
        <article>
          <h3>Doormat Navigation</h3>
          <Nav />
        </article>
        <article>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </article>
        <article>
          <h3>Social Media Links</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
