import { useState } from 'react'
import { ImageViewer, Tarifs } from '../../components'
import { contactService } from '../../services'
import type { ContactFormData } from '../../types/api'
import './Home.scss'

export const Home = () => {
  const [viewerImage, setViewerImage] = useState<{src: string, title: string} | null>(null)
  const [contactForm, setContactForm] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const openImageViewer = (imageSrc: string, title: string) => {
    console.log('Opening image viewer with:', imageSrc, title)
    setViewerImage({src: imageSrc, title})
  }

  const closeImageViewer = () => {
    setViewerImage(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const resetForm = () => {
    setContactForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      await contactService.submitContact(contactForm)
      setSubmitStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès ! Je vous recontacterai bientôt.'
      })
      resetForm()
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi de votre message.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='home'>
      <section className='main'>
        <div className='main__container'>
          <div className='presentation-card'>
            <div className='presentation-card__image'>
              <div className='presentation-card__photo'>
                <img
                  src='/jessica.jpg'
                  alt='Portrait professionnel de Jessica FEDER'
                  onClick={() => openImageViewer('/jessica.jpg', 'Jessica FEDER')}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
            <div className='presentation-card__content'>
              <h1 className='presentation-card__title'>Jessica FEDER</h1>
              <p className='presentation-card__subtitle'>Kinésiologie & Reiki</p>
              <div className='presentation-card__social'>
                <p>Sur Facebook : jessica feder pro</p>
                <p>25 ans d'expérience</p>
              </div>
              <div className='presentation-card__contact'>
                <p className='presentation-card__email'>contact@jessica-feder.com</p>
                <p className='presentation-card__phone'>+33 6 52 50 25 66</p>
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
                Je suis infirmière diplômée d'état depuis plus de 25 ans. J'ai principalement travaillé en milieu hospitalier dans des services de médecine physique et rééducation mais également dans un service de soins palliatifs. J'ai aussi travaillé dans le secteur médico-social auprès de personnes en situation de handicap. J'ai délivré des soins techniques et relationnels tout en ayant à cœur de toujours personnaliser mon approche : chacun étant unique.
              </p>
              <p>
                Mon expérience personnelle, ainsi que mon parcours en tant qu'infirmière et encadrante d'équipes soignantes, m'ont permis de constater que, quel que soit l'état de santé, le soutien, la capacité à gérer le stress et les émotions, ainsi qu'une présence bienveillante, sont essentiels pour mener une vie épanouissante.
              </p>
              <p>
                J'ai également pris conscience que les animaux, tout comme les êtres humains, ont besoin de bienveillance, d'écoute et de soutien pour vivre en équilibre. C'est pourquoi j'ai à cœur de les accompagner eux aussi, avec la même attention et la même présence.
              </p>
              <p>
                C'est au fil du temps que l'évidence de développer des soins individuels à la personne comme à l'animal, en utilisant des techniques de médecine douce, s'est imposée à moi.
              </p>
              <p>
                Je suis aujourd'hui kinésiologue animalier certifiée, après avoir suivi une formation professionnelle à l'école EKIVIE à Strasbourg.
              </p>
              <p>
                <strong>Formations additionnelles hors kinésiologie :</strong>
              </p>
              <ul>
                <li>REIKI niveau II (Formatrice Maitre Reiki Alicia Constantin)</li>
                <li>Harmonisation globale (Formatrice Fancello Cécile)</li>
                <li>Points gâchettes ou de relâchement (Formatrice Charlotte Welsch)</li>
              </ul>
              <p>
                <strong>Aujourd'hui, je propose des soins :</strong>
              </p>
              <div className='about-card__services'>
                <div className='about-card__skills'>
                  <div className='skill'>
                    <h4>Pour les humains</h4>
                    <p>Soin énergétique Reiki (niveau II), pratique d'Harmonisation globale</p>
                  </div>
                  <div className='skill'>
                    <h4>Pour les animaux</h4>
                    <p>Kinésiologie animale</p>
                  </div>
                </div>
              </div>
              <p>
                <em>Ces pratiques sont des compléments d'accompagnement et ne remplacent en aucun cas l'avis médical ou vétérinaire.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='schedule'>
        <div className='schedule__container'>
          <div className='schedule__content-box'>
            <h2 className='schedule__title'>Horaires d'accompagnement</h2>
            <div className='schedule__content'>
              <p>📅 Du lundi au vendredi : 8h - 20h</p>
              <p>📅 Et samedi matin sur demande</p>
            </div>
          </div>
        </div>
      </section>

      <section className='tarifs-locations-section'>
        <div className='tarifs-locations-section__container'>
          <div className='tarifs-locations-section__locations'>
            <div className='location'>
              <div className='location__image'>
                <img
                  src='/jessica.jpg'
                  alt='Cabinet Jessica FEDER Rixheim'
                  onClick={() => openImageViewer('/jessica.jpg', 'Au cabinet')}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className='location__info'>
                <h3>Au cabinet</h3>
                <p>🏢 7 rue de Habsheim 68170 Rixheim</p>
              </div>
            </div>
            <div className='location'>
              <div className='location__image'>
                <img
                  src='/carte-rixheim.svg'
                  alt='Carte déplacements 50km Rixheim'
                  onClick={() => openImageViewer('/carte-rixheim.svg', 'Chez vous')}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className='location__info'>
                <h3>Chez vous</h3>
                <p>🏠 Je me déplace jusqu'à 50km autour de Rixheim</p>
              </div>
            </div>
          </div>

          <div className='tarifs-locations-section__tarifs'>
            <Tarifs />
          </div>
        </div>
      </section>

      <section className='contact'>
        <div className='contact__container'>
          <h2 className='contact__title'>Me contacter</h2>

          {submitStatus.type && (
            <div className={`contact__status contact__status--${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <form className='contact__form' onSubmit={handleContactSubmit}>
            <div className='form__row'>
              <div className='form__group'>
                <input
                  type='text'
                  name='firstName'
                  placeholder='Prénom'
                  value={contactForm.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='form__group'>
                <input
                  type='text'
                  name='lastName'
                  placeholder='Nom'
                  value={contactForm.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className='form__group'>
              <input
                type='email'
                name='email'
                placeholder='Votre email'
                value={contactForm.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form__group'>
              <input
                type='tel'
                name='phone'
                placeholder='Téléphone (optionnel)'
                value={contactForm.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className='form__group'>
              <textarea
                name='message'
                placeholder='Votre message'
                rows={5}
                value={contactForm.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='btn btn-primary'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </section>

      {viewerImage && (
        <ImageViewer
          imageSrc={viewerImage.src}
          altText={viewerImage.title}
          onClose={closeImageViewer}
        />
      )}
    </div>
  )
}
