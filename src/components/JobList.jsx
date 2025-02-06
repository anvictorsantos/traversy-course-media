import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Job from './Job';
import Spinner from './Spinner';

const JobList = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? 'http://localhost:8000/jobs?_limit=4' : 'http://localhost:8000/jobs';
      try {
        const response = await fetch(apiUrl);
        const jobs = await response.json();
        setJobs(jobs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 pt-6 pb-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'All Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

JobList.propTypes = {
  isHome: PropTypes.bool
};

export default JobList;
