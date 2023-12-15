export default function Logo() {
  return (
    <svg
      className="inline w-auto h-[35px] align-middle"
      focusable="false"
      viewBox="225 0 552 1000"
      aria-hidden="true"
      data-uia="n-logo"
    >
      <defs>
        <radialGradient
          id="8e664308-ca60-462e-a89a-e11c2991f784-a"
          r="75%"
          gradientTransform="matrix(.38 0 .5785 1 .02 0)"
        >          
        </radialGradient>
      </defs>
      <path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path>
      <path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e"></path>
      <path
        d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225"
        fill="url(#8e664308-ca60-462e-a89a-e11c2991f784-a)"
      ></path>
      <path
        d="M225 0l349 983c76 3 136 9 203 17L423 0H225"
        fill="#e50914"
      ></path>
    </svg>
  );
}