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
import EditJobPage from "./pages/EditJobPage"

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
    await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    })
    return
  }

  const editJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      body: JSON.stringify(job),
    })

    return res.json()
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
          <Route
            path="/edit-job/:id"
            element={<EditJobPage updateJobSubmit={editJob} />}
          />
          <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default App
