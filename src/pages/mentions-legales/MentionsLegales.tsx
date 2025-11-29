import './MentionsLegales.scss'

export const MentionsLegales = () => {
  return (
    <div className='mentions-legales'>
      <div className='mentions-legales__container'>
        <h1 className='mentions-legales__title'>Mentions Légales</h1>

        <section className='mentions-legales__section'>
          <h2>1. Informations légales</h2>
          <div className='mentions-legales__content'>
            <p><strong>Raison sociale :</strong> Jessica FEDER - Infirmière Diplômée d'État</p>
            <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
            <p><strong>Adresse :</strong> 7 rue de Habsheim, 68170 Rixheim, France</p>
            <p><strong>Téléphone :</strong> +33 6 52 50 25 66</p>
            <p><strong>Email :</strong> contact@jessica-feder.fr</p>
            <p><strong>SIRET :</strong> [À compléter]</p>
            <p><strong>Numéro ADELI :</strong> [À compléter]</p>
          </div>
        </section>

        <section className='mentions-legales__section'>
          <h2>2. Directeur de publication</h2>
          <div className='mentions-legales__content'>
            <p>Jessica FEDER, en sa qualité de propriétaire du site.</p>
          </div>
        </section>

        <section className='mentions-legales__section'>
          <h2>3. Hébergement</h2>
          <div className='mentions-legales__content'>
            <p><strong>Hébergeur :</strong> [À compléter selon l'hébergeur choisi]</p>
            <p><strong>Adresse :</strong> [À compléter]</p>
            <p><strong>Téléphone :</strong> [À compléter]</p>
          </div>
        </section>

        <section className='mentions-legales__section'>
          <h2>4. Propriété intellectuelle</h2>
          <div className='mentions-legales__content'>
            <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
            <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de publication.</p>
          </div>
        </section>

        <section className='mentions-legales__section'>
          <h2>5. Protection des données personnelles (RGPD)</h2>
          <div className='mentions-legales__content'>
            <h3>Responsable du traitement</h3>
            <p>Jessica FEDER est responsable du traitement des données personnelles collectées sur ce site.</p>

            <h3>Données collectées</h3>
            <p>Les données personnelles collectées sont :</p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Message de contact</li>
            </ul>

            <h3>Finalité du traitement</h3>
            <p>Les données sont collectées dans le but de :</p>
            <ul>
              <li>Répondre aux demandes de contact</li>
              <li>Fournir des informations sur les prestations</li>
            </ul>

            <h3>Base légale</h3>
            <p>Le traitement est basé sur le consentement de la personne concernée.</p>

            <h3>Durée de conservation</h3>
            <p>Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact.</p>

            <h3>Droits des personnes</h3>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
            <p>Pour exercer ces droits, contactez-nous à : contact@jessica-feder.fr</p>
            <p>Vous avez également le droit d'introduire une réclamation auprès de la CNIL.</p>
          </div>
        </section>

        <section className='mentions-legales__section'>
          <h2>6. Cookies</h2>
          <div className='mentions-legales__content'>
            <p>Ce site n'utilise pas de cookies de suivi ou de mesure d'audience.</p>
            <p>Seuls des cookies techniques nécessaires au bon fonctionnement du site peuvent être utilisés.</p>
          </div>
        </section>

        <section className='mentions-legales__section'>
          <h2>7. Responsabilité</h2>
          <div className='mentions-legales__content'>
            <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.</p>
            <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à contact@jessica-feder.fr</p>
          </div>
        </section>

        <section className='mentions-legales__section'>
          <h2>8. Liens hypertextes</h2>
          <div className='mentions-legales__content'>
            <p>Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Jessica FEDER.</p>
          </div>
        </section>

        <section className='mentions-legales__section'>
          <h2>9. Litiges</h2>
          <div className='mentions-legales__content'>
            <p>Les présentes conditions sont régies par la loi française. En cas de litige, les tribunaux français sont seuls compétents.</p>
          </div>
        </section>

        <section className='mentions-legales__section'>
          <h2>10. Contact</h2>
          <div className='mentions-legales__content'>
            <p>Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :</p>
            <ul>
              <li>Par email : contact@jessica-feder.fr</li>
              <li>Par téléphone : +33 6 52 50 25 66</li>
              <li>Par courrier : 7 rue de Habsheim, 68170 Rixheim</li>
            </ul>
          </div>
        </section>

        <p className='mentions-legales__date'>
          Dernière mise à jour : 18 octobre 2025
        </p>
      </div>
    </div>
  )
}