import { Link } from "react-router-dom"

export const IndexPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">Welcome to APPEASE</h1>
      <Link to={'/register'}>
        <h1 className="text-2xl mx-5 animate-bounce">Please register to continue    {`>`}</h1>
      </Link>
    </div>
  )
}
