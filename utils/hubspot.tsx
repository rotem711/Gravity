/* eslint-disable operator-linebreak */
export const submitForm = async (data, lightForm = false) => {
  let url =
    'https://api.hsforms.com/submissions/v3/integration/submit/22078414/c82f3d3d-1e0c-4e41-8572-70b1c80babd6'

  if (lightForm) {
    url =
      'https://api.hsforms.com/submissions/v3/integration/submit/22078414/8c43c381-ae29-4f00-810b-6c52b1eb2e19'
  }

  const body = {
    legalConsentOptions: null,
    fields: lightForm
      ? [{ name: 'email', value: data.email }]
      : [
        { name: 'firstname', value: data.firstName },
        { name: 'lastname', value: data.lastName },
        { name: 'email', value: data.email },
        { name: 'company', value: data.companyName },
      ],
  }

  if (!lightForm) {
    body.legalConsentOptions = {
      consent: {
        // Include this object when GDPR options are enabled
        consentToProcess: true,
        text: 'I agree to allow Example Company to store and process my personal data.',
        communications: [
          {
            value: data.checkbox,
            subscriptionTypeId: 999,
            text: 'I agree to receive marketing communications from Example Company.',
          },
        ],
      },
    }
  }

  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log('Error:', error)
    })
}

export default submitForm
