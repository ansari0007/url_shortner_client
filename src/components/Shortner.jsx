import React,{useRef,useState,useEffect} from 'react'
import '../style/Shortner.css'
import Link_shortner from '../assets/link_shortner.png'

const Shortner = () => {
    const url=useRef()
    const [shortUrl,setShortUrl]=useState(null)

    useEffect(()=>{
        
    },[shortUrl])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const originalUrl=url.current.value

        try {
            const response=await fetch('https://url-shortner-server-xi.vercel.app/api/urlshortner',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ originalUrl }),
            })
            const data = await response.json();
            setShortUrl(data.data.shortUrl)
        } catch (error) {
            console.log(error.message)
        }
    }


    const handleCopy=async()=>{
        e.preventDefault()

        await navigator.clipboard.writeText(shortUrl)
    }



  return (
    <>
      <header className="hero">
        <div className="hero-inner">

          <div className="hero-text">
            <h2>Hi There ! Welcome to Url Shortner</h2>
            <br/>
            <br/>
            <p>Step -1 Copy your Long URL from anywhere</p>
            <p>Step -2 Paste your Long URL in first input field and press submit</p>
            <p>Step -3 copy Short URL from second input field and you are good to go</p>
            <form className="hero-form" onSubmit={handleSubmit}>
              <div className="hero-form-input">
                <input className="hero-email-input" type="url" ref={url} placeholder="eg:- https://www.example.com/xyz...." required/>
                <input className="hero-form-submit" type="submit" value="Submit"/>
                
              </div>
            </form>

            <form className="hero-form" onSubmit={handleCopy}>
              <div className="hero-form-input">
                <input className="hero-email-input" type="text" value={shortUrl} required/>
                <input className="hero-form-copy" type="submit" value="Copy"/>
                
              </div>
            </form>
          </div>

          <div className="hero-image">
           
            <img src={Link_shortner} alt='link image'/>
          </div>

        </div>
      </header>
    </>
  )
}

export default Shortner