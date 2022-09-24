import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`https://wa.me/message/V53RZSFW7T5LF1`}>
        <span type='button' className='btn btn--outline'>
          Whatsapp
        </span>
      </a>

    </section>
  )
}

export default Contact
