import './RecentWorks.css';
import wine from '../../images/wine.svg';
import coffee from '../../images/coffee.svg';
import gin from '../../images/gin.svg';
import gummies from '../../images/gummies.svg';
import skincare from '../../images/skincare.svg';
import skinclub from '../../images/skinclub.svg';

const RecentWorks = () => {
  return (
    <section>
      <h2 className='recent__title'>Recent work</h2>
      <div>
        <div>
          <div>
            <img className='recent__image' src={wine} alt='слайд'></img>
            <p className='image__title'>Rockfront Wine</p>
            <p className='image__subtitle'>
              Packaging/ Digital Content/ Website/
            </p>
          </div>
          <div>
            <img className='recent__image' src={gin} alt='слайд'></img>
            <p className='image__title'>Miami Gin</p>
            <p className='image__subtitle'>
              Website/ Illustration/ Art Direction/
            </p>
          </div>
          <div>
            <img className='recent__image' src={gummies} alt='слайд'></img>
            <p className='image__title'>Batch Gummies</p>
            <p className='image__subtitle'>Illustration/ Visual Identity/</p>
          </div>
        </div>
        <div>
          <div>
            <img className='recent__image' src={coffee} alt='слайд'></img>
            <p className='image__title'>Better Coffee Co</p>
            <p className='image__subtitle'>
              Art Direction/ Packaging/ Illustration/
            </p>
          </div>
          <div>
            <img className='recent__image' src={skincare} alt='слайд'></img>
            <p className='image__title'>Lumin Skincare</p>
            <p className='image__subtitle'>
              Website/ Visual Identity/ Packaging/ Illustration/
            </p>
          </div>
          <div>
            <img className='recent__image' src={skinclub} alt='слайд'></img>
            <p className='image__title'>Good Skin Club</p>
            <p className='image__subtitle'>
              Packaging/ Art Direction/ Digital Content/ Illustration/
            </p>
          </div>
        </div>
      </div>
      <button>See all work</button>
    </section>
  );
};

export default RecentWorks;
