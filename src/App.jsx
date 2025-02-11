import { useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";

export default function GitHubSearch() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    if (!username) return;
    setLoading(true);
    setError(null);
    setUser(null);
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } 
    catch (err) {
      setError("User not found. Please try again.");
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold mb-6">GitHub Profile Search</h1>
      
      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchUser()}
        />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          onClick={fetchUser}
        >
          <Search size={20} />
        </button>
      </div>
      
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      
      {user && (
        <div className="mt-6 p-6 bg-white shadow-lg rounded-lg w-full max-w-md text-center">
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mx-auto" />
          <h2 className="text-xl font-semibold mt-2">{user.name || user.login}</h2>
          <p className="text-gray-600">{user.bio || "No bio available"}</p>
          <p className="mt-2">Public Repos: <strong>{user.public_repos}</strong></p>
          <p>Followers: <strong>{user.followers}</strong> | Following: <strong>{user.following}</strong></p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}
