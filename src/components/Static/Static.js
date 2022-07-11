import './Static.css';

const Static = () => {
  return (
    <section className='static'>
      <h2 className='static__title'>Built to last. Always growing.</h2>
      <div className='static__containeer'>
        <p className='static__subtitle'></p>
        <div className='static__paragraphs'>
          <div className='static__paragraph'>
            <div>
              <h3 className='static__description_title'>127</h3>
              <p className='static__description_subtitle'>Projects done</p>
            </div>
            <div>
              <h3 className='static__description_title'>24</h3>
              <p className='static__description_subtitle'>Team members</p>
            </div>
          </div>
          <div className='static__paragraph'>
            <div>
              <h3 className='static__description_title'>87%</h3>
              <p className='static__description_subtitle'>Chance of coffee</p>
            </div>
            <div>
              <h3 className='static__description_title'>4.7</h3>
              <p className='static__description_subtitle'>Average rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Static;
