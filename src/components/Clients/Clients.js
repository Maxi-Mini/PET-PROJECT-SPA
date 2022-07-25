import './Clients.css';
import carded from '../../images/Clients/carded.svg';
import emerald from '../../images/Clients/emerald.svg';
import etro from '../../images/Clients/etro.svg';
import focusfox from '../../images/Clients/focusfox.svg';
import nowintech from '../../images/Clients/nowintech.svg';
import optimer from '../../images/Clients/optimer.svg';

const Clients = () => {
  return (
    <section className='clients'>
      <h2 className='clients__header'>
        Some of our <span className='clients__header_span'>recent clients</span>
      </h2>
      <div className='clients__container'>
        <div className='clients__stroke'>
          <img className='clients__logo link' src={carded} alt='logo'></img>
          <img className='clients__logo link' src={nowintech} alt='logo'></img>
          <img className='clients__logo link' src={focusfox} alt='logo'></img>
          <img className='clients__logo link' src={optimer} alt='logo'></img>
        </div>
        <div className='clients__stroke'>
          <img className='clients__logo link' src={etro} alt='logo'></img>
          <img className='clients__logo link' src={emerald} alt='logo'></img>
          <img className='clients__logo link' src={carded} alt='logo'></img>
          <img className='clients__logo link' src={nowintech} alt='logo'></img>
        </div>
      </div>
    </section>
  );
};

export default Clients;
