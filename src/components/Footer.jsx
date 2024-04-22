import logo from "../assets/images/logo (11).png"

const Footer = () => {
  const currYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 bg-indigo-500">
      <div className="flex flex-col space-y-10 items-center lg:flex-row lg:space-y-0 lg:justify-between text-gray-200 font-semibold text-lg">
        <img src={logo} className="w-16" alt="" />
        <div>ReactJobs &copy; {currYear}. All Rights Reserved. </div>
      </div>
    </footer>
  )
}

export default Footer
