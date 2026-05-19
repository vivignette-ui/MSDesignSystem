import svgPaths from "./svg-1wcgh0tqt9";
import imgDoNotChangeAnythingRemoveNanoBanana20805619 from "./aa04db03ac8a06a3486d1e8103f2278d2bd93c65.png";

function ElementsSignal() {
  return (
    <div className="-translate-y-1/2 absolute h-[11.361px] right-[53.34px] top-1/2 w-[18.908px]" data-name="Elements / Signal">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9113 11.3615">
        <g id="Elements / Signal">
          <path d={svgPaths.p2a3d4200} fill="var(--fill-0, white)" id="Cellular Connection" />
        </g>
      </svg>
    </div>
  );
}

function ElementsConnection() {
  return (
    <div className="-translate-y-1/2 absolute h-[11.835px] right-[31.56px] top-1/2 w-[16.095px]" data-name="Elements / Connection">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0984 11.8351">
        <g id="Elements / Connection">
          <path d={svgPaths.p2698e600} fill="var(--fill-0, white)" id="Wifi" />
        </g>
      </svg>
    </div>
  );
}

function ElementsBattery() {
  return (
    <div className="absolute h-[12.308px] right-0 top-0 w-[25.875px]" data-name="Elements / Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8754 12.3081">
        <g clipPath="url(#clip0_6_780)" id="Elements / Battery">
          <rect height="11.3613" id="Border" opacity="0.4" rx="3.31372" stroke="var(--stroke-0, white)" strokeWidth="0.946776" width="22.7226" x="0.473753" y="0.472988" />
          <path d={svgPaths.p330a6698} fill="var(--fill-0, white)" id="Cap" opacity="0.5" />
          <rect fill="var(--fill-0, white)" height="8.52098" id="Capacity" rx="1.89355" width="19.8823" x="1.89278" y="1.8932" />
        </g>
        <defs>
          <clipPath id="clip0_6_780">
            <rect fill="white" height="12.3081" width="25.8754" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Indicators() {
  return (
    <div className="h-[12.308px] relative shrink-0 w-[74.133px]" data-name="Indicators">
      <ElementsSignal />
      <ElementsConnection />
      <ElementsBattery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex h-[61.359px] items-center justify-between left-[0.16px] pl-[32.294px] pr-[15.071px] top-[6.43px] w-[403.674px]" data-name="Status Bar">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Elements / Time">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15.24px] text-center text-white tracking-[-0.4734px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss03'" }}>
          <p className="leading-[15.239px]">00:00</p>
        </div>
      </div>
      <Indicators />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[0.16px] top-[6.43px]">
      <StatusBar />
    </div>
  );
}

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
          <rect fill="var(--fill-0, white)" height="23.7175" id="Rectangle 1063" rx="7.98047" stroke="url(#paint0_linear_6_745)" strokeWidth="1.27957" transform="rotate(135 34.4464 17.6757)" width="23.7175" x="34.4464" y="17.6757" />
          <path d={svgPaths.p3e871c00} fill="url(#paint1_linear_6_745)" fillOpacity="0.77" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_745" x1="47.8497" x2="47.8497" y1="17.6757" y2="42.6727">
            <stop stopColor="#274F70" />
            <stop offset="1" stopColor="#4B97D6" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_6_745" x1="18.2799" x2="18.2799" y1="11.0429" y2="22.3877">
            <stop stopColor="#4A96D4" />
            <stop offset="1" stopColor="#254B6A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[12.394px] h-[65.718px] items-center justify-end left-[26.86px] p-[4.958px] top-[779.5px] w-[353.233px]">
      <Frame />
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[26.86px] top-[779.5px]">
      <Frame1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute left-[296.16px] size-[31px] top-[98px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g id="Group 1000003040">
          <circle cx="15.5" cy="15.5" fill="url(#paint0_linear_6_761)" id="Ellipse 684" r="15.5" />
          <path d={svgPaths.p35e1ac80} fill="var(--fill-0, white)" id="Subtract" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_761" x1="15.5" x2="15.5" y1="0" y2="31">
            <stop offset="1" stopColor="#3F5489" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[29.18px] top-[90.71px]">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[29.065px] justify-center leading-[0] left-[29.18px] not-italic text-[15.071px] text-white top-[117.81px] tracking-[-0.4734px] w-[111.952px]">
        <p className="leading-[16.095px]">2026 Outback</p>
      </div>
      <div className="absolute bg-gradient-to-b from-[#658fc6] h-[39.815px] left-[342.48px] rounded-[130.252px] to-[#aeaeae] top-[90.7px] w-[40.921px]" data-name="Screenshot 2026-01-20 at 11.26.15 AM 112" />
      <Group1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute left-[319px] size-[26.537px] top-[673px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5367 26.5367">
        <g id="Group 1000003374">
          <circle cx="13.2684" cy="13.2684" fill="var(--fill-0, #181E26)" id="Ellipse 317" r="13.2684" />
        </g>
      </svg>
    </div>
  );
}

export default function Mock() {
  return (
    <div className="relative size-full" data-name="Mock">
      <div className="absolute h-[625px] left-[0.07px] rounded-[44px] top-[251.48px] w-[404px]" style={{ backgroundImage: "linear-gradient(180.889deg, rgb(25, 27, 48) 8.0735%, rgb(31, 41, 55) 43.672%)" }} />
      <div className="absolute bg-[#191b30] h-[313px] left-0 rounded-bl-[23.682px] rounded-br-[23.682px] rounded-tl-[40px] rounded-tr-[40px] top-0 w-[404px]" />
      <Group2 />
      <div className="absolute bg-[#9b9b9b] h-[13px] left-[65.93px] rounded-[1.354px] top-[573px] w-[306px]" />
      <div className="absolute bg-[#3f5489] h-[13px] left-[45.93px] rounded-[1.354px] top-[573px] w-[230px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[18.341px] justify-center leading-[0] left-[46px] not-italic text-[12px] text-white top-[602.17px] tracking-[-0.4744px] w-[100.335px]">
        <p className="leading-[16.131px]">55%, 3000 miles</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[30.95px] not-italic text-[32px] text-white top-[202px] tracking-[-0.4388px] w-[291.704px]">
        <p className="leading-[29.849px]">Welcome, Alex!</p>
      </div>
      <Group3 />
      <button className="absolute block cursor-pointer h-[332.924px] left-0 top-[219px] w-[403.548px]" data-name="Component 83">
        <div className="absolute inset-[0_0_0.07%_0]" />
        <div className="absolute inset-[67.08%_8.92%_6.57%_0]">
          <div className="absolute inset-[-4.19%_6.84%_-5.47%_-0.9%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345.727 96.1877">
              <g filter="url(#filter0_f_6_767)" id="Vector 304">
                <path d={svgPaths.p23e14080} fill="var(--fill-0, black)" />
                <path d={svgPaths.p23e14080} stroke="var(--stroke-0, black)" strokeWidth="0.905725" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="96.1877" id="filter0_f_6_767" width="345.727" x="0" y="-5.96046e-08">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_6_767" stdDeviation="2.17374" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[270/230] left-[0.13%] right-[9.3%] top-[21.56px]" data-name="do_not_change_anything_remove__Nano_Banana_2_08056 19">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[204.87%] left-[-74.25%] max-w-none top-0 w-[174.52%]" src={imgDoNotChangeAnythingRemoveNanoBanana20805619} />
          </div>
        </div>
      </button>
      <div className="absolute bg-[rgba(64,66,83,0.28)] h-[94.004px] left-[292.56px] rounded-[11.589px] top-[638.94px] w-[79.839px]" />
      <div className="absolute bg-[#404253] h-[94.004px] left-[203.71px] rounded-[11.589px] top-[638.94px] w-[79.839px]" />
      <div className="absolute bg-[#6b6b6b] h-[94.004px] left-[114.43px] rounded-[11.589px] top-[639.05px] w-[79.839px]" />
      <div className="absolute bg-[#404253] h-[94.004px] left-[26px] rounded-[11.589px] top-[638.94px] w-[79.839px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[25.754px] justify-center leading-[0] left-[243.62px] not-italic text-[12.877px] text-[rgba(255,255,255,0.66)] text-center top-[711.05px] tracking-[-0.3734px] w-[79.839px]">
        <p className="leading-[34.219px]">Unlock</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[25.754px] justify-center leading-[0] left-[154.35px] not-italic text-[#9b9b9b] text-[12.877px] text-center top-[711.17px] tracking-[-0.3734px] w-[79.839px]">
        <p className="leading-[34.219px]">Locked</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[25.754px] justify-center leading-[0] left-[65.92px] not-italic text-[12.877px] text-[rgba(255,255,255,0.66)] text-center top-[711.05px] tracking-[-0.3734px] w-[79.839px]">
        <p className="leading-[34.219px]">Engine</p>
      </div>
      <div className="absolute bg-[rgba(25,27,48,0.55)] h-[60.918px] left-[16.16px] rounded-[51.342px] top-[795px] w-[379.047px]" />
      <Group4 />
      <Group5 />
    </div>
  );
}