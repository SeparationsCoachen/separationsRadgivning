// schemas/paket.js
export default {
    name: 'paket',
    title: 'Paket',
    type: 'document',
    fields: [
      {
        name: 'paketNamn',
        title: 'Paket Namn',
        type: 'string',
      },
      {
        name: 'pris',
        title: 'Pris',
        type: 'number',
      },
      {
        name: 'beskrivning',
        title: 'Beskrivning',
        type: 'array',
        of: [{ type: 'string' }], // Antag att varje punkt är en string
      },
      {
        name: 'bokningslank',
        title: 'Bokningslänk',
        type: 'url',
      },
    ]
  }
  