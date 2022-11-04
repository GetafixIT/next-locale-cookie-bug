import Link from "next/link";
import cookies from "js-cookie";

export default function Home() {

  const myCookieName = 'PATH-COOKIE'

  const setACookie = () => {
    cookies.set(myCookieName, 'something here stored in a cookie', {expires: 7, path: '/ie/'})
  }

  return (
    <div style={{padding: '20px'}}>

      <h1>Path based cookie error on route change</h1>

      <p>This demonstrates that changing the route (using Next Link) to a new, locale based page doesn't show cookies
        set for that path</p>

      <p>My client has different cookie policies for different markets / locales and therefore any cookies set need to
        use the path attribute.</p>

      <p>Click the button below to set a cookie with a path defined.</p>

      <button onClick={() => setACookie()}>Set a path based cookie</button>

      <p style={{color: 'yellow'}}><strong>N.B. You will not see the cookie on this path. It was set for the /ie/ path</strong></p>

      <Link href={'/page/'} locale="ie" style={{textDecoration: 'underline', color: 'pink'}}>
        Click to go to /ie/ locale (with Next Link)
      </Link>
    </div>
  )
}
