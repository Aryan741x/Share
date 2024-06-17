import Link from 'next/link'
export default function About() {
  return (
    <div>
      <Link href={'./workspace'}><h1>Back</h1></Link>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  )
}