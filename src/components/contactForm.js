/* eslint-disable jsx-a11y/label-has-associated-control */
// this code renders a form based on the category chosen in the select element
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/modalForm.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xqkrlzlq');
  if (state.succeeded) {
    return <p className="message">Tack för ditt meddelande! Jag kommer att kontakta dig snart.</p>;
  }

  return (
    <div className="webbForm">
      <form onSubmit={handleSubmit} className="enkelForm">
        <div className="kontaktSektion">
          <label htmlFor="namn">Namn:</label>
          <input type="text" id="namn" name="namn" />
          <ValidationError prefix="Namn" field="namn" errors={state.errors} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="telefon">Telefon:</label>
          <input type="tel" id="telefon" name="telefon" />
          <ValidationError prefix="Telefon" field="telefon" errors={state.errors} />
        </div>

        <div className="paketSektion">
          <h2>Välj Paket:</h2>
          <label>
            <input type="checkbox" name="paket" value="paket1" />
           Rådgivning
          </label>
          <label>
            <input type="checkbox" name="paket" value="paket2" />
           Tappning
          </label>
          <label>
            <input type="checkbox" name="paket" value="paket3" />
           Gratis konsultation 20 min
          </label>
            <label htmlFor="paket1">
              <input type="checkbox" name="paket" value="paket1" id="paket1" />
           Övrigt
            </label>
        </div>
        <div className="övrigtSektion">
          <h2>Övriga frågor eller kommentarer eller vilket seminarie du anmäler dig till</h2>
          <textarea id="ovrigt" name="ovrigt" />
          <ValidationError prefix="Kommentar" field="ovrigt" errors={state.errors} />
        </div>

        <button className="sendBtn" type="submit" disabled={state.submitting}>Skicka</button>
      </form>
    </div>
  );
};

function contact() {
  return (
    <ContactForm />
  );
}
export default contact;