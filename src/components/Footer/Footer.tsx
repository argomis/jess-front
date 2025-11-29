import './Footer.scss'

interface FooterProps {
  onNavigate: (page: 'accueil' | 'prestations' | 'mentions-legales') => void
}

export const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__content'>
          <p>Copyright © 2025 | Made with ❤️ by Jessica FEDER</p>
          <button
            className='footer__link'
            onClick={() => onNavigate('mentions-legales')}
          >
            Mentions légales
          </button>
        </div>
      </div>
    </footer>
  )
}