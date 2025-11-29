import { useState } from 'react'
import './Prestations.scss'

interface FAQItem {
  question: string
  answer: string | string[]
}

const reikiFAQ: FAQItem[] = [
  {
    question: "Qu'est-ce que le Reiki et le soin énergétique ?",
    answer: [
      "Le Reiki est une pratique énergétique d'origine japonaise qui agit en douceur sur l'être dans sa globalité. Il s'agit d'un canal d'énergie universelle, transmis par les mains, qui permet de relancer la circulation de l'énergie du corps. Il vise à rétablir l'harmonie du corps, de l'esprit et des émotions. Plus globalement, un soin énergétique permet de rééquilibrer les centres énergétiques (chakras), de libérer les blocages et de stimuler la capacité naturelle d'auto-guérison du corps.",
      "Le soin ne remplace pas un traitement médical, mais il vient le soutenir en profondeur, en travaillant sur les plans émotionnel, mental et physique."
    ]
  },
  {
    question: "Pour quoi faire ?",
    answer: [
      "Nous traversons tous des périodes où le stress, la fatigue ou les émotions prennent trop de place.",
      "Le soin énergétique peut vous aider à :",
      "- Retrouver un apaisement intérieur",
      "- Soulager des douleurs ou tensions",
      "- Mieux dormir, mieux respirer, mieux vous recentrer",
      "- Traverser une période de changement ou de transition",
      "",
      "Ils favorisent un bien-être global, aussi bien sur le plan physique que mental et émotionnel."
    ]
  },
  {
    question: "Pour qui est-ce destiné ?",
    answer: [
      "Ce soin est accessible à tous :",
      "- Adultes, enfants, adolescents",
      "- Personnes âgées",
      "- Femmes enceintes (en fonction du stade de grossesse)",
      "- Personnes en suivi médical (en complément et sans se substituer aux soins médicaux)",
      "- Toute personne qui ressent le besoin d'un moment pour elle, d'un recentrage ou d'un accompagnement en douceur",
      "",
      "Aucune croyance ou expérience préalable n'est nécessaire. Vous venez tel que vous êtes."
    ]
  },
  {
    question: "Comment se déroule une séance ?",
    answer: [
      "Nous commençons toujours par un temps d'échange pour que je comprenne vos attentes ou ce que vous traversez.",
      "Ensuite, vous vous allongez (ou restez assis.e si besoin), habillé.e, dans un environnement calme. A l'aide de gestes doux, j'appose mes mains sur différentes zones du corps (sans pression ni manipulation physique) pour canaliser l'énergie.",
      "Vous n'avez rien à faire, juste à recevoir.",
      "Souvent, on ressent une profonde détente, de la chaleur, parfois des émotions qui remontent ; tout cela est normal.",
      "La séance se termine par un moment de retour pour partager les ressentis."
    ]
  },
  {
    question: "Quelle est l'organisation des séances ?",
    answer: [
      "Vous pouvez venir pour un soin unique, pour déposer ce qui pèse, pour réaligner votre énergie et apporter de la clarté.",
      "Mais si vous êtes dans une phase de transformation, un accompagnement régulier peut soutenir votre évolution intérieure.",
      "Je vous propose un cadre doux et libre, sans engagement, où le rythme se co-construit ensemble, selon vos besoins de l'instant et votre cheminement personnel."
    ]
  }
]

const harmonisationFAQ: FAQItem[] = [
  {
    question: "Qu'est-ce que l'Harmonisation globale ?",
    answer: [
      "L'Harmonisation Globale est une méthode douce et naturelle qui permet d'identifier et de libérer les blocages émotionnels, énergétiques ou inconscients à l'origine de certains déséquilibres.",
      "Elle s'appuie sur un test de résonance (comme un test musculaire) pour faire dialoguer le corps et accéder aux informations subtiles qu'il porte.",
      "L'idée est simple : le corps sait ce qui le perturbe et ce dont il a besoin pour retrouver l'équilibre. Mon rôle est de l'écouter et de l'accompagner dans ce retour à l'harmonie."
    ]
  },
  {
    question: "Pour quoi faire ?",
    answer: [
      "Lorsque vous vous sentez bloqué, épuisé, déconnecté ou en perte de repères, l'Harmonisation globale peut :",
      "- Libérer des peurs ou des empreintes du passé (traumas, croyances limitantes …)",
      "- Apaiser des douleurs physiques ou des troubles émotionnels",
      "- Mieux gérer le stress, l'anxiété",
      "- Dissoudre les blocages énergétiques ou relationnels",
      "- Accompagner des problématiques de sommeil, de confiance en soi ou de fatigue chronique",
      "- Favoriser un état de mieux-être général",
      "",
      "Elle agit en profondeur, en travaillant sur la cause plutôt que sur le symptôme.",
      "Elle ne soigne pas : elle révèle, elle libère, elle aligne."
    ]
  },
  {
    question: "Pour qui est-ce destiné ?",
    answer: [
      "Cette méthode est accessible à tous :",
      "- Adultes, enfants, adolescents",
      "- Personnes sensibles, hypersensibles, intuitives ou en transition de vie",
      "- Femmes enceintes (sans contre-indication)",
      "- Personnes en démarche de développement personnel ou thérapeutique"
    ]
  }
]

interface AccordionProps {
  items: FAQItem[]
}

const Accordion = ({ items }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className='accordion'>
      {items.map((item, index) => (
        <div key={index} className='accordion__item'>
          <button
            className={`accordion__question ${openItems.includes(index) ? 'accordion__question--open' : ''}`}
            onClick={() => toggleItem(index)}
          >
            {item.question}
            <span className={`accordion__icon ${openItems.includes(index) ? 'accordion__icon--open' : ''}`}>
              ▼
            </span>
          </button>
          {openItems.includes(index) && (
            <div className='accordion__answer'>
              {Array.isArray(item.answer) ? (
                item.answer.map((paragraph, pIndex) => (
                  <p key={pIndex} className={paragraph === '' ? 'accordion__answer-spacer' : ''}>
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>{item.answer}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export const Prestations = () => {
  return (
    <div className='prestations'>
      {/* Section Reiki */}
      <section className='prestations__section'>
        <div className='prestations__container'>
          <h1 className='prestations__title'>Soin énergétique Reiki</h1>

          <div className='prestations__images'>
            <div className='prestations__image-placeholder'>
              <span>📸</span>
              <p>Photo Reiki 1 à insérer</p>
            </div>
            <div className='prestations__image-placeholder'>
              <span>📸</span>
              <p>Photo Reiki 2 à insérer</p>
            </div>
          </div>

          <Accordion items={reikiFAQ} />
        </div>
      </section>

      {/* Section Harmonisation */}
      <section className='prestations__section prestations__section--alt'>
        <div className='prestations__container'>
          <h1 className='prestations__title'>Harmonisation globale</h1>

          <div className='prestations__images'>
            <div className='prestations__image-placeholder'>
              <span>📸</span>
              <p>Photo Harmonisation 1 à insérer</p>
            </div>
            <div className='prestations__image-placeholder'>
              <span>📸</span>
              <p>Photo Harmonisation 2 à insérer</p>
            </div>
          </div>

          <Accordion items={harmonisationFAQ} />
        </div>
      </section>
    </div>
  )
}