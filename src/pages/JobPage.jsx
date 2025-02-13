import { useParams, useLoaderData, Link } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return (
    <>
      <section>
        <div className="container m-auto px-6 py-6">
          <Link to="/jobs" className="flex items-center text-indigo-500 hover:text-indigo-600">
            <FaArrowLeft className="mr-2" /> Back to Jobs
          </Link>
        </div>
      </section>
      <section className="bg-indigo-50">
        <div className="container m-auto px-6 py-10">
          <div className="md:grid-cols-70/30 grid w-full grid-cols-1 gap-6">
            <main>
              <div className="rounded-lg bg-white p-6 text-center shadow-md md:text-left">
                <div className="mb-4 text-gray-500">{job.type}</div>
                <h1 className="mb-4 text-3xl font-bold">{job.title}</h1>
                <div className="mb-4 flex justify-center align-middle text-gray-500 md:justify-start">
                  <FaMapMarker className="mr-1 text-orange-700" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-6 text-lg font-bold text-indigo-800">Job Description</h3>

                <p className="mb-4">{job.description}</p>

                <h3 className="mb-2 text-lg font-bold text-indigo-800">Salary</h3>

                <p className="mb-4">{job.salary} / Year</p>
              </div>
            </main>

            <aside>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-6 text-xl font-bold">{job.company.name}</h3>

                <h2 className="text-2xl">NewTek Solutions</h2>

                <p className="my-2">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactEmail}</p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactPhone}</p>
              </div>

              <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-6 text-xl font-bold">Manage Job</h3>
                <Link
                  to={`/jobs/${id}/edit`}
                  className="focus:shadow-outline mt-4 block w-full rounded-full bg-indigo-500 px-4 py-2 text-center font-bold text-white hover:bg-indigo-600 focus:outline-none">
                  Edit Job
                </Link>
                <button className="focus:shadow-outline mt-4 block w-full rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 focus:outline-none">
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobPage;
