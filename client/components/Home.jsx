import React from 'react'
import quotes from '../../data/quotes.js'

function Home () {
  function getQuote () {
    // const q = quotes[0].quote
    const q = Math.floor(Math.random() * quotes.length)
    console.log(q)
    return (quotes[q].quote)
  }

  return (
    <>
      <div className='home'>
        <div className='img-wrapper'>
          <img className='hero-img' src='/images/Hedy_Lamarr.webp' alt="A picture of Hedy Lamarr" />
        </div>
        <div className='quote-wrapper'>
          <blockquote><strong>" </strong>
            {getQuote()}
            <strong>"</strong></blockquote>
        </div>
      </div>
    </>
  )
}

export default Home
