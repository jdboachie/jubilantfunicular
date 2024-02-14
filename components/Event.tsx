import Link from 'next/link'

const Event = () => {
  return (
    <div className="text-neutral-500 py-2">
      <p className="">Sunday, 18th February, 2024</p>
      <Link href={'#'} className="text-blue-600 hover:underline hover:underline-offset-4">Assignment One</Link>
      <p>MATH351:NUMERICAL ANALYSIS:COE:3736</p>
    </div>
  )
}

export default Event