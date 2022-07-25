import './RecentWorks.css';
import wine from '../../images/wine.svg';
import coffee from '../../images/coffee.svg';
import gin from '../../images/gin.svg';
import gummies from '../../images/gummies.svg';
import skincare from '../../images/skincare.svg';
import skinclub from '../../images/skinclub.svg';

const RecentWorks = () => {
  return (
    <section className='recent'>
      <h2 className='recent__title'>
        Recent <span className='recent__title_span'>work</span>
      </h2>
      <div className='recent__content_box'>
        <div className='recent__content'>
          <div className='recent__slide'>
            <img className='recent__image' src={wine} alt='слайд'></img>
            <p className='recent__image-title'>Rockfront Wine</p>
            <p className='recent__image-subtitle'>
              Packaging / Digital Content / Website /
            </p>
          </div>
          <div>
            <img className='recent__image' src={gin} alt='слайд'></img>
            <p className='recent__image-title'>Miami Gin</p>
            <p className='recent__image-subtitle'>
              Website / Illustration / Art Direction /
            </p>
          </div>
          <div>
            <img className='recent__image' src={gummies} alt='слайд'></img>
            <p className='recent__image-title'>Batch Gummies</p>
            <p className='recent__image-subtitle'>Illustration / Visual Identity /</p>
          </div>
        </div>
        <div className='recent__content'>
          <div>
            <img className='recent__image' src={coffee} alt='слайд'></img>
            <p className='recent__image-title'>Better Coffee Co</p>
            <p className='recent__image-subtitle'>
              Art Direction / Packaging / Illustration /
            </p>
          </div>
          <div>
            <img className='recent__image' src={skincare} alt='слайд'></img>
            <p className='recent__image-title'>Lumin Skincare</p>
            <p className='recent__image-subtitle'>
              Website / Visual Identity / Packaging / Illustration /
            </p>
          </div>
          <div>
            <img className='recent__image' src={skinclub} alt='слайд'></img>
            <p className='recent__image-title'>Good Skin Club</p>
            <p className='recent__image-subtitle'>
              Packaging / Art Direction / Digital Content / Illustration /
            </p>
          </div>
        </div>
      </div>
      <button className='recent__button link'>See all work</button>
    </section>
  );
};

export default RecentWorks;
