import BioSection from '../components/BioSection';

const AuthenticatedView = () => {
    return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-5xl mx-auto mt-8 px-4 grid md:grid-cols-2 gap-8 items-center border border-orange-500 p-4 rounded border-3">
        <img
            src="https://images.unsplash.com/photo-1741091750011-f0fb9b8400cc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DY"
            alt="Profile"
            className="rounded-full w-60 h-60 object-cover mx-auto"
        />

        <div>
            <h1 className="text-2xl font-bold">Bob Jones</h1> 
            <span className="text-gray-600">@bobiscool63</span>
            <span> has listened to... </span>
            <div className="mt-1">
                <span className="font-semibold">175 songs</span>
                <span className="font-semibold"> & </span>
                <span className="font-semibold">50 artists</span>
                <span> in the past 30 days</span>
            </div>
            <div className="mt-4 text-m text-black">
                <BioSection/>
            </div>
            {/*
            <div className="mt-4 text-sm text-black">
                <p className="font-semibold">Public notes:</p>
                <p>@nancyscooler238 - hey bob</p>
                <p>@liv258 - i love beyonce too!</p>
            </div>
            */}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-10 mb-5 ">
        <h2 className="text-xl font-bold mb-4">Artists</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
          { name: "Beyonce", img: "https://images.unsplash.com/photo-1741091750011-f0fb9b8400cc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DY" },
          { name: "boygenius", img: "https://images.unsplash.com/photo-1741091750011-f0fb9b8400cc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DY" },
          { name: "Kendrick Lamar", img: "https://images.unsplash.com/photo-1741091750011-f0fb9b8400cc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DY" },
          ].map((artist, idx) => (
          <div key={idx} className="border border-gray-400 shadow hover:shadow-lg transition duration-300 rounded-md px-3 py-3">
            <img src={artist.img} alt={artist.name} className="bg-white w-80 h-70 rounded-xl shadow overflow-hidden" />
            <p className="mt-2 font-semibold">{artist.name}</p>
            <p className="text-sm text-gray-500">bio</p>
          </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-5 mb-10">
        <h2 className="text-xl font-bold mb-4">Playlists</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
          { name: "chill vibes", img: "https://images.unsplash.com/photo-1741091750011-f0fb9b8400cc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DY" },
          { name: "dance party", img: "https://images.unsplash.com/photo-1741091750011-f0fb9b8400cc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DY" },
          { name: "study time", img: "https://images.unsplash.com/photo-1741091750011-f0fb9b8400cc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DY" },
          ].map((playlist, idx) => (
          <div key={idx} className="border border-gray-400 shadow hover:shadow-lg transition duration-300 rounded-md px-3 py-3">
            <img src={playlist.img} alt={playlist.name} className="bg-white w-80 h-70 rounded-xl shadow overflow-hidden" />
            <p className="mt-2 font-semibold">{playlist.name}</p>
            <p className="text-sm text-gray-500">bio</p>
          </div>
        ))}
        </div>
      </div>
    </div>
);
}

export default AuthenticatedView;