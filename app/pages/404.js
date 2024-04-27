
import Link from 'next/link'
import react, { useEffect } from 'react'

const Custom404 =()=> {
    useEffect(() => {
        console.log('This is working')

    }, [])
  return (
    <div className=''>
        <h1>Opps.....</h1>
        <h2>the page can not be found</h2>
        <p>Go back to the homePage <Link href={'/'}><a>Home</a></Link> </p>
        </div>
  )
}
export default Custom404;