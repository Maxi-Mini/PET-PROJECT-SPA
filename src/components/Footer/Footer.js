import './Footer.css';
import logo from '../../images/footer.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <a href='*' className='footer__homelink'>
          <img className='footer__image' src={logo} alt='логотип'></img>
        </a>
        <h3 className='footer__text'>Stay in the loop</h3>
      </div>
      <div className='footer__links'>
        <div className='footer__links_box'>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            Home
          </a>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            Our work
          </a>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            What we do
          </a>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            Recent news
          </a>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            About us
          </a>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            Get in touch
          </a>
        </div>
        <div className='footer__links_box'>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            Privacy policy
          </a>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            Style guide
          </a>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            Licenses
          </a>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            Instrictions
          </a>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            Password
          </a>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            404
          </a>
        </div>
        <div className='footer__links_box'>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            Dribble
          </a>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            Instagram
          </a>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            Behance
          </a>
          <a className='footer__link link' target='_blank' rel='noreferrer' href='*'>
            LinkedIn
          </a>
        </div>
      </div>
      <div className='footer__copyrights'>
        <p className='footer__copyright'>© Analogue 2021. All Rights Reserved.</p>
        <p className='footer__copyright'>Built by<span className='footer__copyright_span'> Maxim Tarakhov</span></p>
        <p className='footer__copyright'>Powered by<span className='footer__copyright_span'> Webflow</span></p>
      </div>
    </footer>
  );
};
export default Footer;
