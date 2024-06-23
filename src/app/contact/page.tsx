import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 text-gray-800 p-6">
      <Link href="./workspace">
        <h1 className="text-white hover:text-gray-200 text-lg font-semibold cursor-pointer">
          &larr; Back to Workspace
        </h1>
      </Link>
      <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Contact Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We’d love to hear from you! Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Information</h2>
          <ul className="list-none text-gray-700 space-y-2">
            <li><strong>Email</strong>: support@WorkFlowGenie.com</li>
            <li><strong>Phone</strong>: (123) 456-7890</li>
            <li><strong>Address</strong>: 1234 Your Street, Your City, Your State, Your Country</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
