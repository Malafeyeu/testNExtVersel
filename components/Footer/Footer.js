import styles from '../../styles/Footer.module.scss'
import { IconLink } from './IconLink';


const Footer = ({
  frame,
  data,
  icon,
  iconLinks,
  link,
  state,
  onChange,
  onClick
}) => {
  const { title, subtitle, text} = data
  return (
    <footer className={styles.container_footer}>
      <div className={styles.flex_block}>
        <div className={styles.upper_block}>
          <div className={styles.block_w_logo}>
            <img src={icon.src} alt="logo" className={styles.block_w_logo__logo} />
            <h2 className={styles.block_w_logo__title}>{title}</h2>
          </div>
          <span className={styles.upper_block__title}>{subtitle}</span>
          <div className={styles.form_email}>
            <input 
              className={styles.form_email__text}
              placeholder='Email address'
              value={state}
              onChange={(value) => onChange(value)}
              />
            <div className={styles.form_email__btn} onClick={() => onClick()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" viewBox="0 0 50 47" fill="none">
                <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H42C46.4183 0 50 3.58172 50 8V46.0784H0V8.00001Z" fill="#003E66"/>
                <path d="M22.1541 26.8485L25.9749 23.3273L22.1541 19.8062L23.3332 18.7195L28.3332 23.3273L23.3332 27.9352L22.1541 26.8485Z" fill="white"/>
              </svg>
            </div>
            
          </div>
          <div className={styles.border_bottom}/>
        </div>
        {frame > 840 ? (
          <div className={styles.bottom_block}>
            <span className={styles.bottom_block__info}>{text}</span>
            <nav className={styles.flex_block_w_links}>
              {iconLinks.map((img, index) => {
                const newArr = [];
                link.map(link => {
                  newArr.push(link)
                  return newArr
                })
                return (
                  <IconLink 
                    svg={img} 
                    href={newArr[index]} 
                    alt={newArr[index]} 
                    key={newArr[index]+index}
                  />
                )
              })}
            </nav>
          </div>
        ) : (
          <div className={styles.bottom_block}>
            <nav className={styles.flex_block_w_links}>
            {iconLinks.map((img, index) => {
                const newArr = [];
                link.map(link => {
                  newArr.push(link)
                  return newArr
                })
                return (
                  <IconLink 
                    svg={img} 
                    href={newArr[index]} 
                    alt={newArr[index]} 
                    key={newArr[index]+index}
                  />
                )
              })}
            </nav>
            <span className={styles.bottom_block__info}>{text}</span>
          </div>
        )}
      </div>
    </footer>
  )
}

export { Footer }