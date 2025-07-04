import { useState } from "react";
import axios from "axios";
import { Search as SearchIcon } from "lucide-react";
import "../index.css";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setUser(res.data);
    } catch {
      setError("User not found. Please try another username.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-6 mt-12">

      {/* ✅ Centered GitHub Logo */}
      <div className="flex justify-center mb-8">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
          className="w-16 h-16"
        />
      </div>

      {/* ✅ Search Bar */}
      <div className="flex shadow-md rounded-lg overflow-hidden border border-gray-300">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchUser()}
          placeholder="Enter GitHub username..."
          className="flex-grow px-4 py-3 bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
        />
        <button
          onClick={fetchUser}
          className="bg-blue-500 px-4 hover:bg-blue-600 flex items-center justify-center"
        >
          <SearchIcon size={20} className="text-white" />
        </button>
      </div>

      {/* ✅ Feedback Messages */}
      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* ✅ User Info Display */}
      {user && (
        <div className="mt-8 bg-white rounded-lg shadow-md border p-6 text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-2xl font-semibold mt-3 text-gray-800">
            {user.name || user.login}
          </h2>
          <p className="text-gray-600">{user.bio || "No bio available."}</p>
          <div className="mt-4 text-gray-700">
            <p>Repos: <strong>{user.public_repos}</strong></p>
            <p>Followers: <strong>{user.followers}</strong> | Following: <strong>{user.following}</strong></p>
          </div>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
