import './Reviews.css';

const Reviews = () => {
  return (
    <section className='reviews'>
      <div className='reviews__paragraphs'>
        <p className='reviews__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum. Ut enim ad minim veniam,
          quis nostrud.
        </p>
        <div className='reviews__containers'>
          <div className='reviews__conainer'>
            <h3 className='reviews__title'>Custom</h3>
            <p className='reviews__subtitle'>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div>
            <h3 className='reviews__title'>Beautiful</h3>
            <p className='reviews__subtitle'>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat.
            </p>
          </div>
        </div>
      </div>
      <div className='reviews__header'>
        <h2 className='reviews__header_title'>
          8 years in, stronger than ever.
        </h2>
        <p className='reviews__header_subtitle'>More about us</p>
      </div>
    </section>
  );
};

export default Reviews;
