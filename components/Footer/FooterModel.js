import { 
  Telegram, 
  Twitter,
  Youtube,
  Discord,
} from '../../public/variables'
import star from '../../public/star.png'

const FooterModel = {
  getFooterData: () => ({
    title: 'Overstar',
    subtitle: 'Subscribe for our vacancies Make your vision real',
    text: 'Copyright ⓒ 2023 Overstars All rights reserved.',
  }),
  getIconStarSrc: () => star,
  getIconsForLinks: () => [
    Telegram,
    Youtube,
    Twitter,
    Discord
  ],
  getLinks: () => [
    'telegramLink',
    'youtubeLink',
    'twitterLink',
    'discordLink'
  ],
  getSubscribe: (id, email) => ({
    'id': id,
    'email': email,
  }),

}

export { FooterModel }