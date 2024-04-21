import { FaMapMarker } from "react-icons/fa"
import { useState } from "react"

const JobListing = ({ job }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">
          {showMore ? job.description : `${job.description.substring(0, 90)}...`}
        </div>
        <button
          className="text-indigo-500 mb-5 hover:text-indigo-800 text-sm"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {!showMore ? "Show More" : "Show Less"}
        </button>
        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3 flex">
            <FaMapMarker className="text-xl mr-1" />
            {job.location}
          </div>
          <a
            href={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default JobListing
