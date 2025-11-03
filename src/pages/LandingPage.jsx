import React from "react";

const LandingPage = () => {
  return (
    <div className="font-[Poppins] overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative flex flex-col items-center justify-start bg-[#f07c00] px-4 md:px-20 pt-12 pb-16 text-center overflow-hidden">
        {/* ===== Floating Animation ===== */}
        <style>
          {`
            @keyframes floatUpDown {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-10px) rotate(3deg); }
            }
            .float {
              animation: floatUpDown 4s ease-in-out infinite;
            }
          `}
        </style>

        {/* ===== Floating Icons (Slightly Lower on Mobile, Same on Desktop) ===== */}
<img
  src="/photoshop (3).svg"
  alt="Icon 3"
  className="absolute top-[12%] left-[8%] md:top-[22%] md:left-[17%] w-8 sm:w-10 md:w-12 object-contain -rotate-12 brightness-110 contrast-125 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] float"
  style={{ animationDelay: "0s" }}
/>
<img
  src="/photoshop (1).svg"
  alt="Icon 4"
  className="absolute top-[32%] left-[10%] md:top-[38%] md:left-[21%] w-10 sm:w-12 md:w-14 object-contain rotate-12 brightness-110 contrast-125 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] float"
  style={{ animationDelay: "1s" }}
/>
<img
  src="/photoshop (1).svg"
  alt="Icon 1"
  className="absolute top-[15%] right-[8%] md:top-[22%] md:right-[17%] w-8 sm:w-10 md:w-12 object-contain rotate-12 brightness-110 contrast-125 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] float"
  style={{ animationDelay: "2s" }}
/>
<img
  src="/photoshop (2).svg"
  alt="Icon 2"
  className="absolute top-[30%] right-[10%] md:top-[37%] md:right-[21%] w-10 sm:w-12 md:w-14 object-contain -rotate-12 brightness-110 contrast-125 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] float"
  style={{ animationDelay: "3s" }}
/>


      {/* ===== Hero Headings ===== */}
<div className="flex flex-col items-center text-center space-y-3">
  <h4 className="text-white text-lg md:text-2xl font-black tracking-[0.25em] z-10">
    AI POWERED
  </h4>
  <h1 className="text-black text-3xl md:text-5xl font-black tracking-[0.3em] uppercase z-10 leading-tight">
    GRAPHIC
  </h1>
  <h1 className="text-white text-5xl md:text-7xl font-black tracking-[0.35em] uppercase z-10 leading-tight">
    DESIGN
  </h1>
  <h1 className="text-black text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.35em] uppercase z-10 leading-tight">
  COURSE
</h1>

</div>


</section>

      {/* ===== JOURNEY SECTION ===== */}
      <section className="w-full bg-black px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text */}
        <div className="flex-1 text-left">
          <h2 className="text-[#f07c00] text-2xl md:text-4xl font-bold mb-6">
            Your Creative Learning Journey
          </h2>

          <div className="space-y-3 text-white text-sm sm:text-base md:text-xl">
            <p>• Adobe Illustrator (Branding to Advanced)</p>
            <p>• Adobe Photoshop (Branding to Advanced)</p>
            <p>• Print & Packaging Design</p>
            <p>• AI Tools for Designers</p>
            <p>• Live Client Projects</p>
            <p>• Portfolio Building & Personal Branding</p>
            <p>• Certification & Internship Opportunities</p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <img
            src="/logo.png"
            alt="Creative Journey"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 object-contain"
          />
        </div>
      </section>

      {/* ===== WHO CAN JOIN SECTION (Image Left, Text Right, Centered Text) ===== */}
<section className="w-full flex flex-col md:flex-row-reverse items-center justify-between py-12 px-5 bg-[#f07c00] gap-10">
  {/* Right (Now on Desktop) → Text Boxes */}
  <div className="max-w-2xl w-full flex flex-col gap-6 items-center md:items-end">
    
    {/* Box 1 */}
    <div className="flex flex-col justify-center items-center text-center px-6 py-6 md:px-10 md:py-8 bg-yellow-100 shadow-2xl w-full sm:w-[90%] rounded-xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-black tracking-wide">
        Who Can Join Us
      </h2>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black font-semibold">
        Anyone Passionate About <br />
        Creativity — Whether you're <br />
        a beginner or looking to <br />
        upgrade your skills!
      </p>
    </div>

    {/* Box 2 */}
    <div className="flex flex-col justify-center items-center text-center px-6 py-4 md:px-8 md:py-4 bg-[#ffd699] shadow-2xl w-full sm:w-[90%] rounded-xl">
      <p className="text-lg sm:text-xl md:text-2xl font-black mb-2 text-black tracking-wide">
        Separate Classes For
      </p>
      <p className="text-lg sm:text-xl md:text-2xl font-black text-black tracking-wide">
        Boys & Girls
      </p>
    </div>

  </div>


 {/* Left (Now on Desktop) → Image */}
<div className="flex justify-center items-center w-full md:w-[35%] overflow-hidden bg-transparent mt-6 md:mt-0">
  <img
    src="/img (2).png"
    alt="Who Can Join"
    className="w-[70%] sm:w-[65%] md:w-[80%] lg:w-[85%] h-auto object-contain object-center bg-transparent border-none shadow-none transition-all duration-500"
  />
</div>



</section>


    </div>
  );
};

export default LandingPage;
