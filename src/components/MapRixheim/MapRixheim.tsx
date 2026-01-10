import './MapRixheim.scss'

interface MapRixheimProps {
  onClick?: (mapUrl: string) => void
  showLegend?: boolean
}

export const MapRixheim = ({ onClick, showLegend = false }: MapRixheimProps) => {
  // Image statique pour éviter les appels API
  const staticMapUrl = '/carte-rixheim-zones.png'

  const handleClick = () => {
    if (onClick) {
      onClick(staticMapUrl)
    }
  }

  return (
    <div className='map-rixheim' onClick={handleClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <img
        src={staticMapUrl}
        alt='Carte des déplacements - 20km et 50km autour de Rixheim'
        className='map-rixheim__image'
      />
      {showLegend && (
        <div className='map-rixheim__legend'>
          <div className='map-rixheim__legend-item'>
            <span className='map-rixheim__legend-color map-rixheim__legend-color--green'></span>
            <span>20 km - Déplacement gratuit</span>
          </div>
          <div className='map-rixheim__legend-item'>
            <span className='map-rixheim__legend-color map-rixheim__legend-color--blue'></span>
            <span>50 km - Supplément de 10€</span>
          </div>
        </div>
      )}
    </div>
  )
}
