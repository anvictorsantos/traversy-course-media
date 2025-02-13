const AddJobPage = () => {
  return (
    <>
      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0">
            <form>
              <h2 className="mb-6 text-center text-3xl font-semibold">Add Job</h2>

              <div className="mb-4">
                <label htmlFor="type" className="mb-2 block font-bold text-gray-700">
                  Job Type
                </label>
                <select id="type" name="type" className="w-full rounded border px-3 py-2" required>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="mb-2 block font-bold text-gray-700">Job Listing Name</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mb-2 w-full rounded border px-3 py-2"
                  placeholder="eg. Beautiful Apartment In Miami"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="mb-2 block font-bold text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full rounded border px-3 py-2"
                  rows="4"
                  placeholder="Add any job duties, expectations, requirements, etc"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="type" className="mb-2 block font-bold text-gray-700">
                  Salary
                </label>
                <select
                  id="salary"
                  name="salary"
                  className="w-full rounded border px-3 py-2"
                  required
                >
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">$50K - $60K</option>
                  <option value="$60K - 70K">$60K - $70K</option>
                  <option value="$70K - 80K">$70K - $80K</option>
                  <option value="$80K - 90K">$80K - $90K</option>
                  <option value="$90K - 100K">$90K - $100K</option>
                  <option value="$100K - 125K">$100K - $125K</option>
                  <option value="$125K - 150K">$125K - $150K</option>
                  <option value="$150K - 175K">$150K - $175K</option>
                  <option value="$175K - 200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="mb-2 block font-bold text-gray-700">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="mb-2 w-full rounded border px-3 py-2"
                  placeholder="Company Location"
                  required
                />
              </div>

              <h3 className="mb-5 text-2xl">Company Info</h3>

              <div className="mb-4">
                <label htmlFor="company" className="mb-2 block font-bold text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full rounded border px-3 py-2"
                  placeholder="Company Name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="company_description" className="mb-2 block font-bold text-gray-700">
                  Company Description
                </label>
                <textarea
                  id="company_description"
                  name="company_description"
                  className="w-full rounded border px-3 py-2"
                  rows="4"
                  placeholder="What does your company do?"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="contact_email" className="mb-2 block font-bold text-gray-700">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="w-full rounded border px-3 py-2"
                  placeholder="Email address for applicants"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contact_phone" className="mb-2 block font-bold text-gray-700">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="w-full rounded border px-3 py-2"
                  placeholder="Optional phone for applicants"
                />
              </div>

              <div>
                <button
                  className="focus:shadow-outline w-full rounded-full bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-indigo-600 focus:outline-none"
                  type="submit"
                >
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddJobPage;
