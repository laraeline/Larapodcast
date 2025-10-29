import { useState } from "react";
import imgChatGptImage27Okt20251526131 from "figma:asset/c6e5631e5261c9b2377d013a0c18e4c059c5e768.png";
import imgChatGptImage27Okt20251527431 from "figma:asset/f39db674c99a2877eaeaa116931033105620fab3.png";
import imgChatGptImage27Okt20251539361 from "figma:asset/88aab72ef20dd5f9c4d275061b7ac536aa7ffb96.png";
import imgChatGptImage28Okt20251518301 from "figma:asset/131153e7928e93219f65f9574425a6d67432cc24.png";
import Episode1 from "./components/Episode1";
import Episode2 from "./components/Episode2";
import Episode3 from "./components/Episode3";
import Episode4 from "./components/Episode4";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "episode1" | "episode2" | "episode3" | "episode4">("home");
  const episodes = [
    {
      id: 1,
      title: "Episode 1 - A quick intro",
      duration: "1 minute",
      description: "How design meets behaviour. What I learned at TU Delft and why listening to people's stories is where every product starts for me.",
      image: imgChatGptImage27Okt20251526131,
      buttonColor: "bg-[#ff6d43]",
    },
    {
      id: 2,
      title: "Episode 2 - Insight to impact",
      duration: "1 minute",
      description: "Turning research into decisions. How discovery, lean experiments, and cross-team collaboration led to +10% conversion and +8% ARPU at Emma Sleep.",
      image: imgChatGptImage27Okt20251527431,
      buttonColor: "bg-[#7566b4]",
    },
    {
      id: 3,
      title: "Episode 3 - Building Vi from scratch",
      duration: "1 minute",
      description: "From an open brief to a women's-health product. How insight, empathy, and iteration shaped Vi into something people could trust and use.",
      image: imgChatGptImage27Okt20251539361,
      buttonColor: "bg-[#e1b24a]",
    },
    {
      id: 4,
      title: "Episode 4 - How I connect to audio",
      duration: "1 minute",
      description: "Audio is the most personal interface. How listening becomes understanding, and why that aligns with the way I build digital experiences.",
      image: imgChatGptImage28Okt20251518301,
      buttonColor: "bg-[#cb434d]",
    },
  ];

  const handleStartClick = (episodeId: number) => {
    if (episodeId === 1) {
      setCurrentPage("episode1");
    } else if (episodeId === 2) {
      setCurrentPage("episode2");
    } else if (episodeId === 3) {
      setCurrentPage("episode3");
    } else if (episodeId === 4) {
      setCurrentPage("episode4");
    }
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  if (currentPage === "episode1") {
    return <Episode1 onBack={handleBackToHome} />;
  }

  if (currentPage === "episode2") {
    return <Episode2 onBack={handleBackToHome} />;
  }

  if (currentPage === "episode3") {
    return <Episode3 onBack={handleBackToHome} />;
  }

  if (currentPage === "episode4") {
    return <Episode4 onBack={handleBackToHome} />;
  }

  return (
    <div className="bg-[#111111] min-h-screen px-8 py-16">
      <div className="max-w-[700px] mx-auto">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-white mb-6">How I listen</h1>
          <p className="text-[#f5f3ee]">
            <span className="font-['Inter:Medium_Italic',sans-serif] italic">How I Listen</span>
            <span> explores the craft of listening to users, to data and to stories. In four short episodes, I share how curiosity, empathy and experimentation shape the way I build digital products.</span>
          </p>
          <p className="text-[#f5f3ee] mt-4">
            An audio portfolio piece inspired by Podimo's world of sound.
          </p>
        </div>

        {/* All Episodes Section */}
        <div className="mb-12">
          <h2 className="text-white mb-2">All episodes</h2>
          <p className="text-white">4 episodes</p>
        </div>

        {/* Episode Cards */}
        <div className="space-y-12">
          {episodes.map((episode) => (
            <div 
              key={episode.id}
              className="bg-[#f3f2f3] rounded-[37px] p-8 flex gap-6 items-start"
            >
              {/* Episode Image */}
              <div className="flex-shrink-0">
                <img 
                  src={episode.image} 
                  alt={episode.title}
                  className="w-[349px] h-[349px] object-cover rounded-lg"
                />
              </div>

              {/* Episode Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-black font-['Inter:Semi_Bold',sans-serif] font-semibold mb-3">
                  {episode.title}
                </h3>
                <p className="text-black mb-10">
                  {episode.duration}
                </p>
                <p className="text-[#111111] font-['Inter:Medium',sans-serif] font-medium mb-10 flex-1">
                  {episode.description}
                </p>
                <button
                  onClick={() => handleStartClick(episode.id)}
                  className={`${episode.buttonColor} text-white font-['Inter:Semi_Bold',sans-serif] font-semibold rounded-[25.5px] px-10 py-3 self-start hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer`}
                >
                  START HERE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
