import React from 'react'
import "./styles/body.css"

const Body = () => {
  return (
    <article className='article'>
        <header className='article__header'>
            <h1 className='article__title'>
                Wait! Your Order In Progress.
            </h1>
            <p className='article__description'>
                Lorem Ipsum Dolor Sit Amet, Consectetur
            </p>
        </header>

    <section className='article__status'>
        <div><img src="" alt="" /> <p>Cart Review</p></div>
        <div><img src="" alt="" /> <p>Checkout</p></div>
        <div><img src="" alt="" /> <p>Special Offer</p></div>
        <div><img src="" alt="" /> <p>Confirmation</p></div>

    </section>

    </article>
  )
}

export default Body