import HomeCard from "./HomeCard"

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <HomeCard
            title="For Developers"
            backgroundColor="bg-gray-100"
            button={{
              btnContent: "Browse Jobs",
              btnBgColor: "bg-black",
              btnHover: "hover:bg-gray-700",
            }}
          >
            Browse our React jobs and start your career today
          </HomeCard>
          <HomeCard
            title="For Employers"
            backgroundColor="bg-indigo-100"
            button={{
              btnContent: "Add Job",
              btnBgColor: "bg-indigo-500",
              btnHover: "hover:bg-indigo-600",
            }}
          >
            List your job to find the perfect developer for the role
          </HomeCard>
        </div>
      </div>
    </section>
  )
}

export default HomeCards
