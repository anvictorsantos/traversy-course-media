import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex-grow bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="m-4 mb-4 px-6 py-24 md:m-0">
          <div className="flex justify-center">
            <FaExclamationTriangle className="mb-4 text-6xl text-yellow-500" />
          </div>
          <div className="text-center">
            <h1 className="mt-4 mb-2 text-3xl font-bold">Page Not Found</h1>
            <p className="mb-10 text-xl text-gray-500">
              The page you are looking for does not exist.
            </p>
            <Link
              to="/"
              className="rounded bg-blue-700 px-6 py-4 font-bold text-white hover:bg-blue-800"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </section>
  );
};

export default NotFoundPage;
