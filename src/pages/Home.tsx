import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow p-4">
        <h1 className="text-2xl font-bold">English Learning App</h1>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Your English Learning Dashboard</h2>
        <p className="text-lg text-center max-w-xl mb-8">
          Practice daily, review learned words, and track your language journey.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/daily"
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300 text-center"
          >
            Start Daily Practice
          </Link>
          <Link
            to="/review"
            className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300 text-center"
          >
            Go to Review List
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} English Learning App. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
