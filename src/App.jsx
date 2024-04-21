import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"

import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import JobsPage from "./pages/JobsPage"
import JobPage from "./pages/JobPage"
import NotFoundPage from "./pages/NotFoundPage"
import AddJobPage from "./pages/AddJobPage"

const App = () => {
  const addJob = async (fields) => {
    const res = await fetch(`/api/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    })

    return res.json()
  }

  const deleteJob = async (id) => {
    try {
      const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" })

      if (res.status !== 200) {
        toast.error("Failed to delete the job")
        return
      }

      toast.success("Job Deleted")
      setIsDeleted(true)
      navigate("/jobs")
    } catch (error) {
      console.log("Failed to delete the job", error)
      toast.error("Failed to delete the job")
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/jobs">
            <Route index element={<JobsPage />} />
            <Route path=":id" element={<JobPage deleteJob={deleteJob} />} />
          </Route>
          <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default App
