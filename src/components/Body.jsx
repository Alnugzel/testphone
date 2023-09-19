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
    </article>
  )
}

export default Body