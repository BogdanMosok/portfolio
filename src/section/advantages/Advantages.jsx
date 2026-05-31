import { useRef, useState } from 'react';
import Button from '../../components/button/Button';
import videoFile from '../../assets/video.mp4';
import rmenu from '../../assets/rmenu1.svg';
import cookr from '../../assets/cookr.svg';
import timerr from '../../assets/timerr.svg';

const advantagesItem = [
  { id: 1, icon: rmenu, title: 'Multi Cuisine', descr: 'In the new era of technology we look in the future with certainty life.' },
  { id: 2, icon: cookr, title: 'Easy To Order', descr: 'In the new era of technology we look in the future with certainty life.' },
  { id: 3, icon: timerr, title: 'Fast Delivery', descr: 'In the new era of technology we look in the future with certainty life.' },
];

export default function Advantages() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);



  const handleToggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="advantages">
      <div className="video__block">

        <video
          ref={videoRef}
          className='advantages__video'
          src={videoFile}
          muted
          loop
          preload='metadata'
        />


        <Button
          className={`video__block-btn ${isPlaying ? 'is-playing' : ''}`}
          onClick={handleToggleVideo}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >

          {!isPlaying && <span className="play-icon"></span>}
        </Button>


        <h2 className="advantages__video-title">
          Feel the authentic & original taste from us
        </h2>
      </div>
      <div className="advantages__container container">
        <ul className="advantages__list list-reset">
          {advantagesItem.map((item) => (
            <li key={item.id} className='advantages__item'>
                <img src={item.icon} alt={item.alt} />
                <div className="advantages__box">
                <h3 className='advantages__title'>{item.title}</h3>
                <p className='advantages__descr'>{item.descr}</p>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}