import './Header.scss'

interface HeaderProps {
  currentPage: 'accueil' | 'prestations' | 'mentions-legales'
  onNavigate: (page: 'accueil' | 'prestations' | 'mentions-legales') => void
}

export const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo' onClick={() => onNavigate('accueil')}>
          <img
            src='/logo.png'
            alt='Logo Jessica FEDER'
            className='header__logo-image'
          />
        </div>

        <nav className='header__nav'>
          <button
            className={`header__nav-item ${currentPage === 'accueil' ? 'header__nav-item--active' : ''}`}
            onClick={() => onNavigate('accueil')}
          >
            Accueil
          </button>
          <button
            className={`header__nav-item ${currentPage === 'prestations' ? 'header__nav-item--active' : ''}`}
            onClick={() => onNavigate('prestations')}
          >
            Prestations
          </button>
        </nav>
      </div>
    </header>
  )
}