import React, { useRef, useState, useEffect } from 'react'
import '../style/Shortner.css'
import Link_shortner from '../assets/link_shortner.png'

const Shortner = () => {
  const url = useRef()
  const [shortUrl, setShortUrl] = useState(null)
  const [loading, setLoading] = useState(false)
  const [btnState,setBtnState]=useState("Copy")

  useEffect(() => {

  }, [shortUrl])

  const handleSubmit = async (e) => {
    setLoading(true)
    setBtnState('Copy')
    setShortUrl(null)

    e.preventDefault()
    const originalUrl = url.current.value

    try {
      const response = await fetch('https://url-shortner-server-xi.vercel.app/api/urlshortner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl }),
      })
      const data = await response.json();
      setShortUrl(data.data.shortUrl)
      setLoading(false)

    } catch (error) {
      console.log(error.message)
    }
  }


  const handleCopy = async (e) => {
    e.preventDefault()

    await navigator.clipboard.writeText(shortUrl)
    setBtnState('Copied')
  }



  return (
    <>
      <header className="hero">
        <div className="hero-inner">

          <div className="hero-text">
            <h2>Hi There ! Welcome to Url Shortner</h2>
            <br />
            <br />
            <p>Step -1 Copy your Long URL from anywhere</p>
            <p>Step -2 Paste your Long URL in first input field and press submit</p>
            <p>Step -3 copy Short URL from second input field</p>
            <form className="hero-form" onSubmit={handleSubmit}>
              <div className="hero-form-input">
                <input className="hero-email-input" type="url" ref={url} placeholder="eg:- https://www.example.com/xyz...." required />
                <input className="hero-form-submit" type="submit" value="Submit" />

              </div>
            </form>
          {loading && <p>loading...</p>}
            <form className="hero-form" onSubmit={handleCopy}>
              <div className="hero-form-input">
                <input className="hero-email-input" type="text" value={shortUrl} required />
                <input className="hero-form-copy" type="submit" value={btnState} />

              </div>
            </form>
          </div>

          <div className="hero-image">

            <img src={Link_shortner} alt='link image' />
          </div>

        </div>
      </header>
    </>
  )
}

export default Shortner