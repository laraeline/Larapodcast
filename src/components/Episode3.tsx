import svgPaths from "../imports/svg-wu0alfvqi4";
import imgChatGptImage27Okt20251539361 from "figma:asset/88aab72ef20dd5f9c4d275061b7ac536aa7ffb96.png";

interface Episode3Props {
  onBack: () => void;
}

export default function Episode3({ onBack }: Episode3Props) {
  return (
    <div className="bg-[#111111] min-h-screen px-8 py-16">
      <div className="max-w-[500px] mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 mb-10 text-[#f5f3ee] hover:text-white transition-colors"
        >
          <div className="flex items-center justify-center w-[26px] h-[15px]">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 15">
              <path d={svgPaths.p39c25b00} fill="currentColor" transform="scale(-1, 1) translate(-27, 0)" />
            </svg>
          </div>
          <span className="font-['Inter:Medium',sans-serif] font-medium">Back</span>
        </button>

        {/* Episode Title */}
        <h1 className="text-white mb-6">Episode 3 - Building Vi from scratch</h1>

        {/* Episode Description */}
        <p className="text-[#f5f3ee] mb-8">
          From an open brief to a women's-health product. How insight, empathy, and iteration shaped Vi into something people could trust and use.
        </p>

        {/* Episode Image */}
        <div className="rounded-[25px] overflow-hidden mb-8">
          <img 
            src={imgChatGptImage27Okt20251539361}
            alt="Episode 3 - Building Vi from scratch"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Audio Player */}
        <div className="bg-[#e1b149] rounded-[17px] h-[80px] flex items-center gap-4 px-8">
          {/* Previous Button */}
          <button className="text-black hover:opacity-70 transition-opacity">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M9 7v16M21 7l-10 8 10 8V7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          
          {/* Play Button */}
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
              <path d="M2 2l15 10-15 10V2z" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </button>
          
          {/* Next Button */}
          <button className="text-black hover:opacity-70 transition-opacity">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M21 7v16M9 23l10-8-10-8v16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          
          {/* Progress Bar */}
          <div className="flex-1 h-2 bg-black/20 rounded-full overflow-hidden">
            <div className="h-full w-0 bg-black/40 rounded-full"></div>
          </div>
          
          {/* Time Display */}
          <p className="font-['Inter:Medium',sans-serif] font-medium text-black">
            0:00 / 1:00
          </p>
        </div>
      </div>
    </div>
  );
}
