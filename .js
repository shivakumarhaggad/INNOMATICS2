export default function BusinessCard() {
    return (
      <div className="relative w-full max-w-2xl h-[200px] bg-black overflow-hidden rounded-lg">
        {/* Gold curved accents */}
        <div className="absolute top-0 right-0 w-3/4 h-full">
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rotate-45">
              <div className="w-full h-full border-[3px] border-[#FFD700]/30 rounded-[100%]" />
            </div>
            <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rotate-45">
              <div className="w-full h-full border-[2px] border-[#FFD700]/20 rounded-[100%]" />
            </div>
          </div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
          <h1 className="text-3xl font-bold tracking-wider text-[#FFD700]">SHIVAKUMAR HAGGAD</h1>
          <div className="w-24 h-1 mx-auto my-4">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
          </div>
          <a
            href="mailto:shivakumarhaggad2004@gmail.com"
            className="text-[#FFD700]/90 hover:text-[#FFD700] transition-colors"
          >
            shivakumarhaggad2004@gmail.com
          </a>
        </div>
      </div>
    )
  }
  
  