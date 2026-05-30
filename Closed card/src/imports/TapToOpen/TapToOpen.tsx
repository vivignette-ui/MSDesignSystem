import svgPaths from "./svg-2xu16cdl39";

function Frame() {
  return (
    <div className="absolute bg-[rgba(251,251,251,0.08)] content-stretch flex h-[65.718px] items-center justify-center left-0 pl-[3.718px] pr-[24.788px] py-[13.634px] rounded-[12.394px] top-0 w-[353.233px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.873px] text-center text-white tracking-[-0.4338px] whitespace-nowrap">
        <p className="leading-[19.471px]">332 Prospect St, Niagara Falls, NY</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[35.351px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.3512 35.3512">
        <g id="Group 1521">
          <rect fill="var(--fill-0, white)" fillOpacity="0.08" height="23.7175" id="Rectangle 1063" rx="7.98047" stroke="url(#paint0_linear_1_27)" strokeWidth="1.27957" transform="rotate(135 34.4464 17.6757)" width="23.7175" x="34.4464" y="17.6757" />
          <path d={svgPaths.p3e871c00} fill="var(--fill-0, white)" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_27" x1="47.8497" x2="47.8497" y1="17.6757" y2="42.6727">
            <stop stopColor="#85BDEC" />
            <stop offset="1" stopColor="#C0E2FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[12.394px] h-[65.718px] items-center justify-end left-[12.86px] p-[4.958px] top-[56px] w-[353.233px]">
      <Frame />
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[12.86px] top-[56px]">
      <Frame1 />
    </div>
  );
}

export default function TapToOpen() {
  return (
    <div className="relative size-full" data-name="Tap to open">
      <div className="absolute bg-[rgba(17,24,37,0.35)] h-[258px] left-0 rounded-[13px] top-0 w-[379px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[17px] not-italic text-[16px] text-white top-[27px] tracking-[-0.4744px] w-[150px]">
        <p className="leading-[16.131px]">Trips and Location</p>
      </div>
      <Group1 />
      <div className="absolute bg-[rgba(246,246,246,0.03)] border border-[rgba(65,65,65,0.35)] border-solid h-[175px] left-[13px] rounded-[12.07px] top-[56px] w-[354px]" />
      <div className="absolute bg-[#c4c4c4] border-[#313131] border-[1.031px] border-solid h-[79.406px] left-[24px] rounded-[12.447px] top-[136.29px] w-[330px]" />
    </div>
  );
}