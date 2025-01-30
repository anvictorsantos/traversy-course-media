import Footer from './components/Footer';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobList from './components/JobList';
import Navbar from './components/Navbar';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>
      <Navbar />

      <Hero title="Become a React Dev" description="Find the React job that fits your skill set" />

      <HomeCards />

      <JobList />

      <ViewAllJobs />

      <Footer />
    </>
  );
};

export default App;
