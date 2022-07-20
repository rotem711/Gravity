/* eslint-disable operator-linebreak */
export const submitForm = async (data) => {
  const url =
    'https://api.hsforms.com/submissions/v3/integration/submit/22078414/c82f3d3d-1e0c-4e41-8572-70b1c80babd6'

  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: [
        { name: 'firstname', value: data.firstName },
        { name: 'lastname', value: data.lastName },
        { name: 'email', value: data.email },
        { name: 'company', value: data.companyName },
        //  { name: 'marketing', value: data.checkbox },
      ],
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log('Error:', error)
    })
}

export default submitForm
