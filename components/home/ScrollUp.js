import React from 'react';
import {useState, useEffect} from 'react';
import {FaAngleUp} from 'react-icons/fa';

export default function ScrollUp() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  // useEffect(() => {
  //     // 👇️ scroll to top on page load
  //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  // }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {' '}
      {showTopBtn && (
        <FaAngleUp className='icon-position icon-style' onClick={goToTop}  style={{right:0,bottom:'15px'}}/>
      )}{' '}
    </div>
  );
}
