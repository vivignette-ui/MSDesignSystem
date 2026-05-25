import { useState } from "react";
import svgPaths from "../imports/InactiveState-1/svg-zjhw7qar9m";

type ButtonId =
  | "engine" | "lock" | "unlock" | "climate"
  | "flash" | "honk" | "vent" | "defrost"
  | "fogLight" | "hood" | "window" | "gasTank"
  | "seat" | "ac" | "heat";

interface ControlButtonProps {
  id: ButtonId;
  isActive: boolean;
  onClick: () => void;
  position: string;
  icon: React.ReactNode;
  label: string;
  gap?: string;
  pt?: string;
}

function ControlButton({ id, isActive, onClick, position, icon, label, gap = "gap-[5px]", pt = "pt-[24px]" }: ControlButtonProps) {
  const bgColor = isActive ? "bg-[#999]" : "bg-[#404253]";
  const iconColor = isActive ? "#DEDEDE" : "white";

  return (
    <div
      className={`absolute ${bgColor} content-stretch flex flex-col ${gap} h-[94.004px] items-center pb-[9px] ${pt} rounded-[11.589px] w-[79.839px] cursor-pointer transition-colors ${position}`}
      onClick={onClick}
      style={{ "--fill-0": iconColor, "--stroke-0": iconColor } as React.CSSProperties}
    >
      {icon}
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[25.754px] justify-center leading-[0] not-italic relative shrink-0 text-[12.877px] text-[rgba(255,255,255,0.66)] text-center tracking-[-0.3734px] w-[79.839px]">
        <p className="leading-[34.219px]">{label}</p>
      </div>
    </div>
  );
}

function EngineIcon() {
  return (
    <div className="h-[27.895px] relative shrink-0 w-[23.242px]">
      <div className="absolute inset-[-3.72%_-4.47%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3188 29.9718">
          <g id="Engine Start">
            <g id="Subtract">
              <mask fill="black" height="25" id="path-1-outside-1_1_986" maskUnits="userSpaceOnUse" width="27" x="-0.961715" y="5.81085">
                <rect fill="white" height="25" width="27" x="-0.961715" y="5.81085" />
                <path d={svgPaths.p36bef0} />
              </mask>
              <path d={svgPaths.p36bef0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p19fc9c00} fill="var(--stroke-0, white)" mask="url(#path-1-outside-1_1_986)" />
            </g>
            <rect fill="var(--fill-0, white)" height="18.0829" id="Rectangle 116" rx="0.90652" stroke="var(--stroke-0, white)" strokeWidth="1.03828" width="1.81304" x="11.7454" y="0.519142" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <div className="h-[27.894px] relative shrink-0 w-[25.81px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8096 27.8936">
        <g id="Lock">
          <g id="Subtract">
            <mask fill="white" id="path-1-inside-1_1_190">
              <path d={svgPaths.p2d267900} />
            </mask>
            <path d={svgPaths.p2d267900} fill="var(--fill-0, #565656)" />
            <path d={svgPaths.p3f5a9d00} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_1_190)" />
          </g>
          <path d={svgPaths.p902bd80} fill="var(--fill-0, white)" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function UnlockIcon() {
  return (
    <div className="h-[27.893px] relative shrink-0 w-[25.809px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8086 27.8926">
        <g id="Unlock">
          <path d={svgPaths.p9512c80} fill="var(--fill-0, white)" id="Subtract" />
          <path d={svgPaths.p3ec43180} fill="var(--fill-0, white)" id="Subtract_2" />
        </g>
      </svg>
    </div>
  );
}

function ClimateIcon() {
  return (
    <div className="h-[24.847px] relative shrink-0 w-[26.161px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.1614 24.8466">
        <g id="Climate">
          <path d={svgPaths.p2f150b00} fill="var(--fill-0, white)" id="Subtract" />
          <path d={svgPaths.p320d5680} fill="var(--fill-0, white)" id="Subtract_2" />
          <path d={svgPaths.p2cc68840} fill="var(--fill-0, white)" id="Subtract_3" />
        </g>
      </svg>
    </div>
  );
}

function FlashIcon() {
  return (
    <div className="h-[17.212px] relative shrink-0 w-[24.872px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8722 17.2119">
        <g id="Flash">
          <path d={svgPaths.p11eaf4f0} fill="var(--fill-0, white)" id="Subtract" />
          <rect fill="var(--fill-0, white)" height="2.08054" id="Rectangle 935" rx="1.04027" width="10.4027" y="1.8434" />
          <rect fill="var(--fill-0, white)" height="2.08054" id="Rectangle 1237" rx="1.04027" width="10.4027" y="6.23772" />
          <rect fill="var(--fill-0, white)" height="2.08054" id="Rectangle 1238" rx="1.04027" width="10.4027" y="10.4001" />
          <rect fill="var(--fill-0, white)" height="2.08054" id="Rectangle 1239" rx="1.04027" width="10.4027" y="14.5624" />
        </g>
      </svg>
    </div>
  );
}

function HonkIcon() {
  return (
    <div className="h-[22.107px] relative shrink-0 w-[24.872px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8717 22.1074">
        <g id="Honk">
          <path d={svgPaths.p30d3c1c0} fill="var(--fill-0, white)" id="Union" />
          <rect fill="var(--fill-0, white)" height="4.14509" id="Rectangle 1308" rx="0.690848" stroke="var(--stroke-0, white)" strokeWidth="1.3817" width="1.3817" x="22.7991" y="8.9838" />
          <rect height="4.14509" id="Rectangle 1309" rx="2.07254" stroke="var(--stroke-0, white)" strokeWidth="1.3817" width="9.67188" x="10.3637" y="11.7513" />
          <rect fill="var(--fill-0, white)" height="1.3817" id="Rectangle 1310" stroke="var(--stroke-0, white)" strokeWidth="1.3817" width="6.90848" x="17.2718" y="10.3661" />
        </g>
      </svg>
    </div>
  );
}

function VentIcon() {
  return (
    <div className="h-[16.219px] relative shrink-0 w-[41.906px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.9059 16.2186">
        <g id="Vent">
          <circle cx="7.96508" cy="12.227" fill="var(--fill-0, white)" id="Ellipse 455" r="3.99162" />
          <circle cx="35.1072" cy="12.227" fill="var(--fill-0, white)" id="Ellipse 456" r="3.99162" />
          <path d={svgPaths.p2766de00} fill="var(--fill-0, white)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function DefrostIcon({ isActive }: { isActive: boolean }) {
  const lineColor = isActive ? "#999999" : "#404253";

  return (
    <div className="h-[22.935px] relative shrink-0 w-[31.088px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0879 22.9353">
        <g id="Defrost">
          <g id="Subtract">
            <mask fill="white" id="path-1-inside-1_1_101">
              <path d={svgPaths.p175df380} />
            </mask>
            <path d={svgPaths.p175df380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1c0bf100} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_1_101)" />
          </g>
          <path d={svgPaths.p22e3d780} fill={lineColor} id="Vector 149" />
          <path d={svgPaths.pa473730} fill={lineColor} id="Vector 150" />
          <path d={svgPaths.p2ea1f070} fill={lineColor} id="Vector 151" />
        </g>
      </svg>
    </div>
  );
}

function FogLightIcon({ isActive }: { isActive: boolean }) {
  const lineColor = isActive ? "#dedede" : "white";

  return (
    <div className="h-[18.653px] relative shrink-0 w-[24.683px]">
      <div className="absolute inset-[0_0_8.09%_46.28%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2597 17.1445">
          <path d={svgPaths.p12f3a200} fill="var(--fill-0, white)" id="Subtract" />
        </svg>
      </div>
      <div className="absolute contents inset-[8.89%_57.2%_11%_0]">
        <div className="absolute flex inset-[8.89%_57.2%_67.78%_0] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-rotate-13 flex-none h-[hypot(4.41357cqw,46.4179cqh)] w-[hypot(95.5864cqw,-53.5821cqh)]">
            <div className={`border-[1.225px] border-solid relative rounded-[6.123px] size-full`} style={{ backgroundColor: lineColor, borderColor: lineColor }} />
          </div>
        </div>
        <div className="absolute flex inset-[37.89%_57.2%_38.79%_0] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-rotate-13 flex-none h-[hypot(4.41357cqw,46.4179cqh)] w-[hypot(95.5864cqw,-53.5821cqh)]">
            <div className={`border-[1.225px] border-solid relative rounded-[6.123px] size-full`} style={{ backgroundColor: lineColor, borderColor: lineColor }} />
          </div>
        </div>
        <div className="absolute flex inset-[65.68%_57.2%_11%_0] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-rotate-13 flex-none h-[hypot(4.41357cqw,46.4179cqh)] w-[hypot(95.5864cqw,-53.5821cqh)]">
            <div className={`border-[1.225px] border-solid relative rounded-[6.123px] size-full`} style={{ backgroundColor: lineColor, borderColor: lineColor }} />
          </div>
        </div>
      </div>
      <div className="absolute inset-[0_70.21%_0_12.69%]">
        <div className="absolute inset-[-2.6%_7.48%_-2.75%_10.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.46373 19.651">
            <path d={svgPaths.pafced00} id="Vector 242" stroke="var(--stroke-0, white)" strokeWidth="1.55441" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HoodIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[31.088px]">
      <div className="absolute inset-[17.66%_6.25%_16.44%_6.78%]">
        <div className="absolute inset-[-0.43%_0_0_-2.4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.6844 20.5754">
            <g id="Layer_1-2">
              <path d={svgPaths.pe0ab200} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.64767" />
              <path d={svgPaths.p3c2a7500} fill="var(--fill-0, white)" id="Vector_2" />
              <path d={svgPaths.p1bfabd6a} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="0.64767" />
              <path d={svgPaths.p2f3f8c0} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.p681f380} fill="var(--fill-0, white)" id="Vector_5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function WindowIcon({ isActive }: { isActive: boolean }) {
  const fillColor = isActive ? "#999999" : "#5F606E";

  return (
    <div className="h-[20.207px] relative shrink-0 w-[21.33px]">
      <div className="absolute inset-[-1.73%_-1.64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0294 20.9068">
          <g id="Window">
            <g id="Vector">
              <path d={svgPaths.p3da08d00} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p202b100} fill={fillColor} fillRule="evenodd" />
              <path d={svgPaths.p3da08d00} stroke="var(--stroke-0, white)" strokeWidth="0.699484" />
              <path clipRule="evenodd" d={svgPaths.p202b100} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="0.699484" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function GasTankIcon({ isActive }: { isActive: boolean }) {
  const darkFill = isActive ? "#999999" : "#5F606E";

  return (
    <div className="h-[27.992px] relative shrink-0 w-[22.219px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2192 27.9922">
        <g id="Group 1000003336">
          <rect fill="var(--fill-0, white)" height="23.7937" id="Rectangle 3465075" rx="0.699816" width="16.0958" x="0.69993" />
          <path d={svgPaths.p26b81880} fill={darkFill} id="Rectangle 3465076" />
          <rect fill={darkFill} height="8.39779" id="Rectangle 3465077" rx="0.349908" width="11.8969" x="2.79944" y="2.79972" />
          <path d={svgPaths.p36041700} fill="var(--fill-0, white)" id="Rectangle 3465078" />
          <path d={svgPaths.p77bd00} fill={isActive ? "url(#paint0_linear_active)" : "url(#paint1_linear_1_46)"} id="Rectangle 3465079" />
          <path d={svgPaths.pcebc500} fill={darkFill} id="Rectangle 3465080" />
        </g>
        <defs>
          {isActive ? (
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_active" x1="0" x2="0" y1="25.0767" y2="28.5758">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#999999" />
            </linearGradient>
          ) : (
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_46" x1="0" x2="0" y1="25.0767" y2="28.5758">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#5F606E" />
            </linearGradient>
          )}
        </defs>
      </svg>
    </div>
  );
}

function SeatIcon({ isActive }: { isActive: boolean }) {
  const fillColor = isActive ? "#999999" : "#5F606E";

  return (
    <div className="h-[29.531px] relative shrink-0 w-[28.29px]">
      <div className="absolute inset-[0_0_5.18%_0]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.29 28.0004">
          <g id="Group 1308">
            <path d={svgPaths.p187f6880} fill="var(--fill-0, white)" id="Vector 156" />
            <path d={svgPaths.p1b959d00} fill="var(--fill-0, white)" id="Vector 157" />
            <path d={svgPaths.p1215d200} fill="var(--fill-0, white)" id="Vector 158" />
            <path d={svgPaths.p4b3d980} fill={fillColor} id="Intersect" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[63.53%_9.57%_0_56.84%]">
        <div className="absolute inset-[0_-8.23%_0_-10.46%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.28 10.771">
            <g id="Group 1309">
              <path d={svgPaths.pb5f7800} fill="var(--stroke-0, white)" id="Vector 149" />
              <path d={svgPaths.p3605e2c0} fill="var(--stroke-0, white)" id="Vector 150" />
              <path d={svgPaths.p34e86880} fill="var(--stroke-0, white)" id="Vector 151" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function AcIcon({ isActive }: { isActive: boolean }) {
  const lineColor = isActive ? "#999999" : "#31648E";

  return (
    <div className="h-[27.702px] relative shrink-0 w-[31.286px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.2864 27.7022">
        <g id="AC">
          <g id="Group 1306">
            <g id="Subtract">
              <mask fill="white" id="path-1-inside-1_1_954">
                <path d={svgPaths.p3f371000} />
              </mask>
              <path d={svgPaths.p3f371000} fill="var(--fill-0, white)" />
              <path d={svgPaths.p24a85980} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_1_954)" />
            </g>
            <path d={svgPaths.p2b4af800} fill={lineColor} id="Vector 149" />
            <path d={svgPaths.p1fef2a80} fill={lineColor} id="Vector 150" />
            <path d={svgPaths.p3ac00a80} fill={lineColor} id="Vector 151" />
          </g>
          <path d={svgPaths.p2073940} fill="var(--fill-0, white)" id="Vector 156" />
          <path d={svgPaths.pe3d8880} fill="var(--fill-0, white)" id="Vector 157" />
          <path d={svgPaths.p37089d00} fill="var(--fill-0, white)" id="Subtract_2" />
          <path d={svgPaths.p213d9880} fill="var(--fill-0, white)" id="Union" />
          <path d={svgPaths.p38e36140} fill="var(--fill-0, white)" id="Union_2" />
        </g>
      </svg>
    </div>
  );
}

function HeatIcon({ isActive }: { isActive: boolean }) {
  const fillColor = isActive ? "#999999" : "#404253";

  return (
    <div className="h-[31.09px] relative shrink-0 w-[25.448px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.448 31.0898">
        <g id="Wheel">
          <circle cx="12.724" cy="18.3658" fill="var(--fill-0, white)" id="Ellipse 221" r="12.724" />
          <path d={svgPaths.p2bb87580} fill="var(--fill-0, white)" id="Ellipse 222" />
          <path d={svgPaths.p39881a00} fill={fillColor} id="Ellipse 223" />
          <path d={svgPaths.pec46d80} fill={fillColor} id="Ellipse 224" />
          <path d={svgPaths.p202df190} fill={fillColor} id="Ellipse 225" />
          <path d={svgPaths.p24cb100} fill="var(--stroke-0, white)" id="Vector 149" />
          <path d={svgPaths.p305f2a80} fill="var(--stroke-0, white)" id="Vector 150" />
          <path d={svgPaths.p28017400} fill="var(--stroke-0, white)" id="Vector 151" />
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const [activeButtons, setActiveButtons] = useState<Set<ButtonId>>(new Set());

  const toggleButton = (id: ButtonId) => {
    setActiveButtons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="size-full flex items-center justify-center bg-[#28303f]">
      <div className="relative w-[346.359px] h-[567.004px]">
        <ControlButton
          id="engine"
          isActive={activeButtons.has("engine")}
          onClick={() => toggleButton("engine")}
          position="left-0 top-0"
          icon={<EngineIcon />}
          label="Engine"
        />

        <ControlButton
          id="lock"
          isActive={activeButtons.has("lock")}
          onClick={() => toggleButton("lock")}
          position="left-[88.84px] top-0"
          icon={<LockIcon />}
          label="Lock"
        />

        <ControlButton
          id="unlock"
          isActive={activeButtons.has("unlock")}
          onClick={() => toggleButton("unlock")}
          position="left-[177.68px] top-0"
          icon={<UnlockIcon />}
          label="Unlock"
        />

        <ControlButton
          id="climate"
          isActive={activeButtons.has("climate")}
          onClick={() => toggleButton("climate")}
          position="left-0 top-[171px]"
          icon={<ClimateIcon />}
          label="Climate"
          gap="gap-[5.1px]"
          pt="pt-[27px]"
        />

        <ControlButton
          id="seat"
          isActive={activeButtons.has("seat")}
          onClick={() => toggleButton("seat")}
          position="left-[88.84px] top-[171.01px]"
          icon={<SeatIcon isActive={activeButtons.has("seat")} />}
          label="Seat"
          gap="gap-[2.4px]"
          pt="pt-[25px]"
        />

        <ControlButton
          id="ac"
          isActive={activeButtons.has("ac")}
          onClick={() => toggleButton("ac")}
          position="left-[177.68px] top-[171.01px]"
          icon={<AcIcon isActive={activeButtons.has("ac")} />}
          label="AC"
          gap="gap-[4.2px]"
          pt="pt-[25px]"
        />

        <ControlButton
          id="heat"
          isActive={activeButtons.has("heat")}
          onClick={() => toggleButton("heat")}
          position="left-[266.52px] top-[171.01px]"
          icon={<HeatIcon isActive={activeButtons.has("heat")} />}
          label="Heat"
          gap="gap-[3.8px]"
          pt="pt-[22px]"
        />

        <ControlButton
          id="vent"
          isActive={activeButtons.has("vent")}
          onClick={() => toggleButton("vent")}
          position="left-0 top-[317px]"
          icon={<VentIcon />}
          label="Vent"
          gap="gap-[9.8px]"
          pt="pt-[31px]"
        />

        <ControlButton
          id="hood"
          isActive={activeButtons.has("hood")}
          onClick={() => toggleButton("hood")}
          position="left-[88.84px] top-[317.01px]"
          icon={<HoodIcon />}
          label="Hood"
          gap="gap-[3.8px]"
          pt="pt-[22px]"
        />

        <ControlButton
          id="window"
          isActive={activeButtons.has("window")}
          onClick={() => toggleButton("window")}
          position="left-[177.68px] top-[317.01px]"
          icon={<WindowIcon isActive={activeButtons.has("window")} />}
          label="Window"
          gap="gap-[10.7px]"
          pt="pt-[26px]"
        />

        <ControlButton
          id="gasTank"
          isActive={activeButtons.has("gasTank")}
          onClick={() => toggleButton("gasTank")}
          position="left-[266.52px] top-[317.01px]"
          icon={<GasTankIcon isActive={activeButtons.has("gasTank")} />}
          label="Gas Tank"
          gap="gap-[5.7px]"
          pt="pt-[23px]"
        />

        <ControlButton
          id="flash"
          isActive={activeButtons.has("flash")}
          onClick={() => toggleButton("flash")}
          position="left-0 top-[463px]"
          icon={<FlashIcon />}
          label="Flash"
          gap="gap-[12.7px]"
          pt="pt-[27px]"
        />

        <ControlButton
          id="fogLight"
          isActive={activeButtons.has("fogLight")}
          onClick={() => toggleButton("fogLight")}
          position="left-[89px] top-[463px]"
          icon={<FogLightIcon isActive={activeButtons.has("fogLight")} />}
          label="Fog Light"
          gap="gap-[12.2px]"
          pt="pt-[26px]"
        />

        <ControlButton
          id="honk"
          isActive={activeButtons.has("honk")}
          onClick={() => toggleButton("honk")}
          position="left-[178px] top-[463px]"
          icon={<HonkIcon />}
          label="Honk"
          gap="gap-[11px]"
        />

        <ControlButton
          id="defrost"
          isActive={activeButtons.has("defrost")}
          onClick={() => toggleButton("defrost")}
          position="left-[266.52px] top-[463px]"
          icon={<DefrostIcon isActive={activeButtons.has("defrost")} />}
          label="Defrost"
          gap="gap-[9px]"
          pt="pt-[25px]"
        />

        <div className="absolute bg-[#28303f] content-stretch flex flex-col h-[94.004px] items-center left-[267px] pb-[9px] pt-[33px] rounded-[11.589px] top-0 w-[79.839px]">
          <div className="relative shrink-0 size-[26.537px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5367 26.5367">
              <circle cx="13.2684" cy="13.2684" fill="#404253" id="Ellipse 317" r="12.9388" stroke="#404253" strokeWidth="0.659177" />
            </svg>
            <div className="absolute contents inset-[23.81%_25.03%_25.03%_23.8%]">
              <div className="absolute bg-white inset-[23.81%_49.68%_25.03%_48.43%] rounded-[1.006px]">
                <div aria-hidden="true" className="absolute border-[0.659px] border-solid border-white inset-[-0.659px] pointer-events-none rounded-[1.665px]" />
              </div>
              <div className="absolute flex inset-[48.44%_25.03%_49.67%_23.8%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                  <div className="bg-white relative rounded-[1.006px] size-full">
                    <div aria-hidden="true" className="absolute border-[0.659px] border-solid border-white inset-[-0.659px] pointer-events-none rounded-[1.665px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-0 not-italic text-[11px] text-white top-[437px] tracking-[-0.3734px] w-[129px]">
          <p className="leading-[34.219px]">{`Safety & Visibility`}</p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-0 not-italic text-[11px] text-white top-[291px] tracking-[-0.3734px] w-[129px]">
          <p className="leading-[34.219px]">{`Access & Openings`}</p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-0 not-italic text-[11px] text-white top-[145px] tracking-[-0.3734px] w-[129px]">
          <p className="leading-[34.219px]">{`Climate & Comfort`}</p>
        </div>
      </div>
    </div>
  );
}
