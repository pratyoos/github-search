import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import axios from "axios";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    if (!username.trim()) return;
    setLoading(true);
    setError(null);
    setUser(null);
    const apiUrl = 'https://api.github.com/users';
    try {
      const response = await axios.get(`${apiUrl}/${username}`);
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
    <div className="flex flex-col items-center mt-6">
      <div className="relative">
        <input
          type="text"
          className="p-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchUser()}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
          onClick={fetchUser}
        >
          <SearchIcon size={20} />
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

export default Search;