import cookies from 'js-cookie'
import {useEffect, useState} from "react";

export default function IEPage() {

  const myCookieName = 'PATH-COOKIE'

  const [mycookie, setMyCookie] = useState(null);
  const [docCookies, setDocCookies] = useState(null);

  useEffect(() => {
    setMyCookie(cookies.get(myCookieName))
    setDocCookies(document.cookie)
  })

  const style = {
    border: '1px solid yellow',
    padding: '10px',
    margin: '10px 0',
    display: 'block',
    width: 'auto'
  }

  const refreshPage = () => {
    window.location.reload()
  }
  const clearCookies = () => {
    cookies.remove(myCookieName, { path: '/ie/' })
    setMyCookie(null)
    setDocCookies(null)
  }

  return (
    <div style={{padding: '20px'}}>
      <h1>Path based cookie error on route change</h1>

      <p>You should now see cookies in the boxes below.</p>

      <p>The browser path is now /ie/ and we should be able to see viable cookies
      for this path.</p>

      <p>Cookie value:</p>
      <div style={style}>
        <p>{mycookie}</p>
      </div>

      <p>document.cookie:</p>
      <div style={style}>
        <pre>{docCookies}</pre>
      </div>

      <p>Now refresh the page:</p>

      <button onClick={() => refreshPage()}>Reload page</button> <button onClick={() => clearCookies()}>Clear cookies</button>

      <br /><br />

      <a href={'/'} style={{textDecoration: 'underline', color: 'pink'}}>
        Back to index page (normal link this time)
      </a>

    </div>
  )
}
