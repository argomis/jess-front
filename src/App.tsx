import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/home'
import { Prestations } from './pages/prestations'
import { MentionsLegales } from './pages/mentions-legales'
import './App.scss'

type PageType = 'accueil' | 'prestations' | 'mentions-legales'

export const App = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('accueil')

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Home />
      case 'prestations':
        return <Prestations />
      case 'mentions-legales':
        return <MentionsLegales />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="app__content">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}