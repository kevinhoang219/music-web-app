const UnauthenticatedView = () => {
    return (
        <div className="min-h-screen flex flex-col">
  
        {/* Main Content */}
        <main className="flex-1 px-6 py-8 bg-white">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-extrabold bg-white text-orange-700">Leaderboard</h2>
              <p className="text-black mt-1">
                Search up any artist and see what users are their biggest fans!
              </p>
              <div className="relative mt-4 w-full max-w-md">
                <input
                  type="text"
                  placeholder="Chappell Roan"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg pl-10"
                />
              </div>
            </div>
            <div className="max-w-xs text-center bg-white p-4 rounded-xl">
              <p className="font-semibold text-black">
                Sign up today to connect with these users and create playlists
              </p>
              <button className="bg-orange-500 text-white hover:bg-orange-300 hover:text-white px-3 py-2 rounded mt-3">
                Sign Up
              </button>
            </div>
          </div>
  
          {/* Artist Info */}
          <section className="mt-10 flex flex-col md:flex-row gap-8 items-center justify-center text-center md:text-left">
            <img
              src="https://images.unsplash.com/photo-1741091750011-f0fb9b8400cc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DY"
              alt="Chappell Roan"
              className="w-48 h-48 rounded-full object-cover"
            />
            <div>
              <h4 className="text-3xl font-bold">Chappell Roan</h4>
              <p className="text-sm text-gray-700 mt-2 break-words">
                ARTIST BIO<br/>
                Artist's description on Spotify<br/>
                <a href="#" className="text-blue-600 underline">More...</a>
              </p>
            </div>
          </section>
  
          {/* Top Listeners */}
          <section className="mt-10 flex flex-col items-center justify-center">
            <h4 className="text-2xl font-bold">Top Listeners:</h4>
            <ol className="list-decimal ml-6 mt-4 space-y-1 text-lg">
              <li>Bob - <a className="text-orange-600 underline" href="#">@bobiscool63</a></li>
              <li>Nancy - <a className="text-orange-600 underline" href="#">@nancyiscooler238</a></li>
              <li>Angela - <a className="text-orange-600 underline" href="#">@angelarocks72</a></li>
              <li>Olivia - <a className="text-orange-600 underline" href="#">@liv258</a></li>
              <li>Dean - <a className="text-orange-600 underline" href="#">@meandean739</a></li>
            </ol>
          </section>
  
          {/* Divider */}
          <div className="border-t-4 border-orange-500 my-10 w-3/4 mx-auto"></div>
  
          {/* Popular Songs */}
          <section>
            <h4 className="text-xl font-bold mb-4">Popular Songs:</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "HOT-TO-GO", img: "https://images.unsplash.com/photo-1741091750011-f0fb9b8400cc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DY" },
                { title: "Good Luck, Babe", img: "https://images.unsplash.com/photo-1741091750011-f0fb9b8400cc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DY" },
                { title: "The Giver", img: "https://images.unsplash.com/photo-1741091750011-f0fb9b8400cc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DY" },
              ].map((song) => (
                <div key={song.title} className="bg-white rounded-xl shadow overflow-hidden">
                  <img src={song.img} alt={song.title} className="w-full h-60 object-cover"/>
                  <div className="p-4">
                    <p className="font-semibold">{song.title}</p>
                    <p className="text-sm text-gray-600">Chappell Roan</p>
                    <button className="mt-2 bg-orange-700 text-white px-3 py-1 rounded hover:bg-orange-800">
                      Add to playlist +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
    </div>              
    );
}

export default UnauthenticatedView;