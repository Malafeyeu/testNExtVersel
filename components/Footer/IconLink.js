

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
}

export { IconLink }