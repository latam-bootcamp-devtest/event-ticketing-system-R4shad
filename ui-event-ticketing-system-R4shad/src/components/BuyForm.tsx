import { useEffect, useState } from 'react'
import {
  APPLICATION_ID,
  emptyForm,
  FormValues,
  PostEvent,
  USER_ID,
} from '../types'

import './BuyForm.css'
import { postOneEvent } from '../functions'

export const BuyForm = ({
  price,
  paramId,
}: {
  price: number
  paramId: string | undefined
}) => {
  const [formValues, setFormValues] = useState<FormValues>(emptyForm)
  const [error, setError] = useState('complete form')

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (formValues.quantity) {
      setTotalPrice(parseInt(formValues.quantity) * price)
    }

    if (formValues.quantity !== '') {
      const transformedQuantity = parseInt(formValues.quantity)
      if (
        transformedQuantity > 10 ||
        transformedQuantity < 0 ||
        formValues.quantity === ''
      ) {
        setError('quantity must be 1-10')
      } else {
        setError('')
      }
    } else {
      setError('complete quantity')
    }
  }, [formValues.quantity, price])

  useEffect(() => {
    if (formValues.name === '') {
      setError('complete name')
    } else {
      setError('')
    }
  }, [formValues.name])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formValues.quantity) {
      if (
        parseInt(formValues.quantity) > 10 ||
        parseInt(formValues.quantity) < 0
      ) {
        setError('quantity must be 1-10')
      } else {
        if (formValues.name !== '' && paramId) {
          const postEvent: PostEvent = {
            applicationId: APPLICATION_ID,
            userId: USER_ID,
            eventId: paramId,
            ticketQuantity: +formValues.quantity,
            customerName: formValues.name,
          }
          const response = await postOneEvent(postEvent)
          if (response) {
            alert('Success')
          } else {
            alert('Error')
          }
        }
      }
    }
  }

  return (
    <form
      className="buy-form"
      onSubmit={(e) => {
        handleSubmit(e)
      }}
    >
      {error !== '' && <span className="error">{error}</span>}
      <span className="span-line">
        the customer's name:{' '}
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={(e) => handleInputChange(e)}
        />
      </span>
      <span className="span-line">
        ticket quantity:{' '}
        <input
          type="text"
          name="quantity"
          value={formValues.quantity}
          onChange={(e) => handleInputChange(e)}
        />
      </span>

      {error === '' && <button>Book now</button>}
      {error !== '' && <button disabled>Book now</button>}
      <p>“Total Price”: {totalPrice} $</p>
    </form>
  )
}
