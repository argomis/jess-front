import { useState } from 'react'
import { ImageViewer, Tarifs } from '../../components'
import { MapRixheim } from '../../components/MapRixheim'
import { FloatingLeaves } from '../../components/FloatingLeaves'
import './Home.scss'

export const Home = () => {
  const [viewerImage, setViewerImage] = useState<{src: string, title: string, extraContent?: React.ReactNode} | null>(null)

  const openImageViewer = (imageSrc: string, title: string, extraContent?: React.ReactNode) => {
    console.log('Opening image viewer with:', imageSrc, title)
    setViewerImage({src: imageSrc, title, extraContent})
  }

  const closeImageViewer = () => {
    setViewerImage(null)
  }

  return (
    <div className='home'>
      <section className='main'>
        <div className='main__container'>
          <div className='main__left'>
            <div className='presentation-image-card'>
              <img
                src='/presentation.webp'
                alt='Présentation Jessica FEDER'
                onClick={() => openImageViewer('/presentation.webp', 'Présentation')}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          <div className='main__right'>
            <div className='presentation-card'>
              <div className='presentation-card__content'>
                <h1 className='presentation-card__title'>Jessica FEDER</h1>
                <p className='presentation-card__subtitle'>Kinésiologie & Reiki</p>
                <div className='presentation-card__contact'>
                  <p className='presentation-card__email'>
                    <a href='mailto:contact@jessica-feder.com'>contact@jessica-feder.com</a>
                  </p>
                  <p className='presentation-card__phone'>
                    <a href='tel:+33652502566'>+33 6 52 50 25 66</a>
                  </p>
                </div>
                <div className='presentation-card__locations'>
                  <p>Cabinet : 7 rue de Habsheim 68170 Rixheim</p>
                  <p>Déplacements à domicile</p>
                </div>
              </div>
            </div>

            <div className='about-card'>
            <h2 className='about-card__title'>Pour me connaître</h2>
            <div className='about-card__content'>
              <p>
                Infirmière diplômée d'État depuis plus de 25 ans, j'ai exercé principalement en milieu hospitalier (médecine physique et rééducation, soins palliatifs) ainsi que dans le secteur médico-social auprès de personnes en situation de handicap.
              </p>
              <p>
                Mon parcours en tant qu'infirmière et encadrante d'équipes soignantes m'a appris combien l'écoute, la bienveillance, ainsi que la gestion du stress et des émotions sont essentielles au bien-être, quel que soit l'état de santé.
              </p>
              <p>
                Cette conviction s'étend également aux animaux, qui, comme les êtres humains, ont besoin d'attention et de soutien pour vivre en équilibre.
              </p>
              <p>
                C'est ainsi qu'est née mon envie d'accompagner, de façon personnalisée, les personnes et les animaux à travers des soins individuels et des techniques de médecine douce.
              </p>
              <p>
                Aujourd'hui, je suis kinésiologue animalière certifiée, formée à l'école professionnelle EKIVIE à Strasbourg.
              </p>
              <p>
                <strong><u>Formations additionnelles :</u></strong>
              </p>
              <ul>
                <li><strong>REIKI</strong> niveau II (Formatrice Maître Reiki Alicia Constantin)</li>
                <li><strong>Harmonisation globale</strong> (Formatrice Fancello Cécile)</li>
                <li><strong>Points gâchettes ou de relâchement</strong> (Formatrice Charlotte Welsch)</li>
              </ul>
              <p>
                <br />
                Aujourd'hui, <strong>je propose des soins</strong> :
              </p>
              <div className='about-card__services'>
                <div className='about-card__skills'>
                  <div className='skill'>
                    <h4>Pour les humains</h4>
                    <p>Soin énergétique Reiki, pratique d'Harmonisation globale</p>
                  </div>
                  <div className='skill'>
                    <h4>Pour les animaux</h4>
                    <p>Kinésiologie animale</p>
                  </div>
                </div>
              </div>
              <p>
                Ces soins sont développés plus en détail dans l'onglet{' '}
                <a
                  href="#prestations"
                  onClick={(e) => {
                    e.preventDefault()
                    // Simuler un clic sur le bouton Prestations dans le header
                    const prestationsButton = document.querySelector('[class*="header__nav-item"]:nth-child(2)') as HTMLButtonElement
                    if (prestationsButton) {
                      prestationsButton.click()
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                  }}
                  style={{
                    color: 'var(--primary)',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  prestations
                </a>
                .
              </p>
              <p>
                Ces pratiques sont des compléments d'accompagnement et ne remplacent en aucun cas l'avis médical ou vétérinaire.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className='schedule'>
        <div className='schedule__container'>
          <div className='schedule__content-box'>
            <h2 className='schedule__title'>Horaires d'accompagnement :</h2>
            <div className='schedule__content'>
              <p>Du lundi au jeudi : 17h00-19h00</p>
              <p>Le vendredi : 9h00-19h00</p>
              <p>Le samedi : 09h00-14h00</p>
            </div>
          </div>
        </div>
      </section>

      <section className='tarifs-locations-section'>
        <div className='tarifs-locations-section__container'>
          <div className='tarifs-locations-section__locations'>
            <h2 className='locations-title'>Lieux de consultation :</h2>
            <div className='location'>
              <div className='location__image'>
                <img
                  src='/cabinet.webp'
                  alt='Cabinet Jessica FEDER Rixheim'
                  onClick={() => openImageViewer('/cabinet.webp', 'Au cabinet')}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className='location__info'>
                <h3>Au cabinet</h3>
                <p>7 rue de Habsheim 68170 Rixheim</p>
                <p>Ce lieu apaisant est fait pour vous permettre de vous exprimer, de laisser libre court à vos pensées et vous autoriser à exprimer vos émotions.</p>
              </div>
            </div>
            <div className='location'>
              <div className='location__image'>
                <MapRixheim
                  onClick={(mapUrl) => openImageViewer(
                    mapUrl,
                    'Zone de déplacement',
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
                  showLegend={true}
                />
              </div>
              <div className='location__info'>
                <h3>Chez vous</h3>
                <p>Je me déplace jusqu'à 50km autour de Rixheim.</p>
                <p>J'ai commencé par me rendre à domicile pour l'accompagnement en kinésiologie animale. En effet, les animaux ont besoin d'être dans un environnement familier pour se sentir à l'aise. Cela facilite l'expression de leurs émotions pour traiter ce qui ne va pas. Il arrive à cette occasion que le gardien humain ait lui aussi envie d'être accompagné. C'est pourquoi je propose des soins à domicile pour les humains, qu'il y ait un animal ou non. Cette souplesse permet de réunir des conditions favorables à l'échange.</p>
                <div className='location__legend'>
                  <div className='location__legend-item'>
                    <span className='location__legend-color location__legend-color--green'></span>
                    <span>20 km - Déplacement gratuit</span>
                  </div>
                  <div className='location__legend-item'>
                    <span className='location__legend-color location__legend-color--blue'></span>
                    <span>50 km - Supplément de 10€</span>
                  </div>
                </div>
              </div>
            </div>
            <p className='locations-subtitle'>Quel que soit le lieu, je vous invite à la rencontre</p>
          </div>

          <div className='tarifs-locations-section__tarifs'>
            <Tarifs />
          </div>
        </div>
      </section>

      {viewerImage && (
        <ImageViewer
          imageSrc={viewerImage.src}
          altText={viewerImage.title}
          onClose={closeImageViewer}
          extraContent={viewerImage.extraContent}
        />
      )}
    </div>
  )
}
