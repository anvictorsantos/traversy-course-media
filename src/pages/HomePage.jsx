import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobList from '../components/JobList';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero title="Become a React Dev" description="Find the React job that fits your skill set" />
      <HomeCards />
      <JobList isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
