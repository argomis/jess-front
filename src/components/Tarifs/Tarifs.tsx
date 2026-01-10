import './Tarifs.scss'

export const Tarifs = () => {
  return (
    <div className='tarifs'>
      <h2 className='tarifs__title'>Tarifs</h2>

      <div className='tarifs__payment'>
        <p className='tarifs__payment-text'>Règlement en espèces ou par CB.</p>
        <p className='tarifs__payment-note'>Nota : Pas de règlement par chèque.</p>
      </div>

      <div className='tarifs__content'>
        <div className='tarifs__section'>
          <h3 className='tarifs__section-title'>Pour les humains : (1h)</h3>
          <div className='tarifs__items'>
            <div className='tarifs__item'>
              <span className='tarifs__item-label'>Soin Reiki</span>
              <span className='tarifs__item-price'>55 €</span>
            </div>
            <div className='tarifs__item'>
              <span className='tarifs__item-label'>Harmonisation globale</span>
              <span className='tarifs__item-price'>55 €</span>
            </div>
            <div className='tarifs__item tarifs__item--child'>
              <span className='tarifs__item-label'>Séance enfant (jusqu'à 15 ans)<br/>pour le Reiki et l'harmonisation globale</span>
              <span className='tarifs__item-price'>45 €</span>
            </div>
          </div>
        </div>

        <div className='tarifs__section'>
          <h3 className='tarifs__section-title'>Pour les animaux : (1h15 avec une restitution écrite de la séance)</h3>
          <div className='tarifs__items'>
            <div className='tarifs__item'>
              <span className='tarifs__item-label'>Kinésiologie animale</span>
              <span className='tarifs__item-price'>65 €</span>
            </div>
            <div className='tarifs__item'>
              <span className='tarifs__item-label'>Accompagnement soulagement et fin de vie</span>
              <span className='tarifs__item-price'>45 €</span>
            </div>
          </div>
        </div>

        <div className='tarifs__section tarifs__section--packages'>
          <h3 className='tarifs__section-title'>Forfaits :</h3>
          <div className='tarifs__items'>
            <div className='tarifs__item tarifs__item--package'>
              <span className='tarifs__item-label'>En duo : 1 soin Reiki ou Harmonisation globale + Kinésiologie animale (environ 2h30-2h45)</span>
              <span className='tarifs__item-price'>100 €</span>
            </div>
            <div className='tarifs__item tarifs__item--package'>
              <span className='tarifs__item-label'>Forfait Kinésiologie animale (3x)</span>
              <span className='tarifs__item-price'>165 €</span>
            </div>
          </div>
        </div>

        <div className='tarifs__extras'>
          <div className='tarifs__extra-item'>
            <p className='tarifs__extra-label'>🎁 Bon cadeau</p>
            <p className='tarifs__extra-description'>Possibilité de bon cadeau (paiement au cabinet ou par virement).</p>
          </div>
          <div className='tarifs__extra-item'>
            <p className='tarifs__extra-label'>🚗 Déplacement</p>
            <p className='tarifs__extra-description'>En cas de déplacement dans un périmètre supérieur à 20km autour de Rixheim (et ce jusque 50 km), forfait de 10 € additionnel).</p>
          </div>
        </div>
      </div>
    </div>
  )
}
