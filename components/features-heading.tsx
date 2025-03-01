"use client"

export function FeaturesHeading() {
  return (
    <div className="heading-3 relative top-[65px] z-10 max-h-min max-w-[500px] md:sticky md:top-[40%] p-12 flex items-center h-full">
      <h2 className="text-5xl md:text-5xl font-light leading-tight">
        Your AI future
        <br />
        belongs in
        <br />
        your hands.{" "}
        <svg
          width="27"
          height="31"
          viewBox="0 0 27 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block ml-2 mb-1"
        >
          <g clipPath="url(#clip0_3383_3700)">
            <path
              d="M26.9074 4.49646H13.5V8.89792H22.4382V17.7008H13.5V22.1023H26.9074V4.49646Z"
              fill="#FA500F"
              stroke="#FA500F"
              strokeWidth="0.25"
              strokeMiterlimit="10"
            />
            <path
              d="M0.09375 30.9053H4.57028V17.7009H13.5011V13.2995H4.57028V4.49655H13.5011V0.0950928H0.09375V30.9053Z"
              fill="#FA500F"
              stroke="#FA500F"
              strokeWidth="0.25"
              strokeMiterlimit="10"
            />
          </g>
          <defs>
            <clipPath id="clip0_3383_3700">
              <rect width="27" height="31" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </h2>
    </div>
  )
}

