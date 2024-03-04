/* eslint-disable jsx-a11y/label-has-associated-control */
// this code renders a form based on the category chosen in the select element
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/modalForm.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xxxxx');
  if (state.succeeded) {
    return <p className="message">Tack för ditt meddelande! Vi kommer att kontakta dig snart.</p>;
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
           Paket1
          </label>
          <label>
            <input type="checkbox" name="paket" value="paket2" />
           Paket2
          </label>
          <label>
            <input type="checkbox" name="paket" value="paket3" />
          Paket3
          </label>
          <fieldset className="paketSektion">
            <label htmlFor="paket1">
              <input type="checkbox" name="paket" value="paket1" id="paket1" />
            Webbinarie
            </label>
          </fieldset>
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