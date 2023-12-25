'use client';

const IconLink = ({
  svg,
  alt,
  href
}) => {
  return (
    <a className='link' href={href}>
      {svg || alt}
    </a>
  )
};

export default IconLink;