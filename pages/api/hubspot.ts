import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

const HUBSPOT_API_KEY = 'eu1-2b63-8e1d-461d-beaf-b240a1607b23'

type Response = {
  success: any
}

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  //  const { email } = req.body
  try {
    const response = await fetch(
      `https://api.hubapi.com/contacts/v1/contact?hapikey=${HUBSPOT_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties: [
            { property: 'email', value: 'testingapis@hubspot.com' },
            { property: 'firstname', value: 'test' },
            { property: 'lastname', value: 'testerson' },
            { property: 'website', value: 'http://hubspot.com' },
            { property: 'company', value: 'HubSpot' },
            { property: 'phone', value: '555-122-2323' },
            { property: 'address', value: '25 First Street' },
            { property: 'city', value: 'Cambridge' },
            { property: 'state', value: 'MA' },
            { property: 'zip', value: '02139' },
          ],
        }),
      },
    )
    console.log(response)
    res.status(200).json({ success: response })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false })
  }
}
