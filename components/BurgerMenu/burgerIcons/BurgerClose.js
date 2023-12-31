const BurgerClose = ({onChange}) => {
  return (
    <>
      <svg onClick={onChange} width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_209_5735)">
          <rect x="4.5752" y="18.0107" width="19" height="2" rx="1" transform="rotate(-45 4.5752 18.0107)" fill="white"/>
          <rect x="5.98975" y="4.5755" width="19" height="2" rx="1" transform="rotate(45 5.98975 4.5755)" fill="white"/>
        </g>
        <defs>
          <filter id="filter0_d_209_5735" x="-4" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_209_5735"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_209_5735" result="shape"/>
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default BurgerClose;