import './Home.scss'
import { Input } from '../../components/input'
import { useSiret, cleanSiretInput } from '../../hooks'

export const Home = () => {
  const { siret, formattedSiret, error, updateSiret, validate, isValid } = useSiret()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      console.log('SIRET valide:', formattedSiret)
      // Ici vous pouvez traiter le SIRET valide
    }
  }

  return (
    <div className='home'>
      <div className='home__container'>
        <h1 className='home__title'>Jess</h1>
        <p className='home__subtitle'>Bienvenue sur l'application Jess</p>

        <form onSubmit={handleSubmit} className='home__form'>
          <Input
            label='SIRET'
            value={siret}
            onChange={updateSiret}
            placeholder='Saisissez votre numéro SIRET'
            type='tel'
            maxLength={14}
            error={error}
            onValidate={(value) => cleanSiretInput(value) === value}
          />

          {isValid && (
            <div className='home__siret-preview'>
              <strong>SIRET formaté :</strong> {formattedSiret}
            </div>
          )}

          <button type='submit' className='btn btn-primary home__submit' disabled={!isValid}>
            Valider
          </button>
        </form>
      </div>
    </div>
  )
}
