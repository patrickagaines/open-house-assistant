export const ButtonLoaderIcon = () => {
  return (
    <svg
      className="mx-auto animate-spin-fast fill-primary-color-text"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
      <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" />
    </svg>
  );
};

export const ChevronLeftIcon = () => {
  return (
    <svg
      className="stroke-lt-text dark:stroke-dk-text"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Arrow / Chevron_Left_MD">
        <path
          id="Vector"
          d="M14 16L10 12L14 8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      className="stroke-lt-text dark:stroke-dk-text"
      width="10"
      height="10"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 13L7.00002 7.00002M7.00002 7.00002L1 1M7.00002 7.00002L13 1M7.00002 7.00002L1 13"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DashboardIcon = () => {
  return (
    <svg
      className="fill-lt-text dark:fill-dk-text"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z" />
    </svg>
  );
};

export const DetailIcon = () => {
  return (
    <svg
      className="fill-lt-text hover:fill-dk-primary dark:fill-dk-text dark:hover:fill-lt-primary"
      width="24"
      height="24"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" />
      <path
        className="stroke-lt-surface dark:stroke-dk-surface"
        d="M15 22C15 22.5523 15.4477 23 16 23C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21C15.4477 21 15 21.4477 15 22Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="stroke-lt-surface dark:stroke-dk-surface"
        d="M15 16C15 16.5523 15.4477 17 16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="stroke-lt-surface dark:stroke-dk-surface"
        d="M15 10C15 10.5523 15.4477 11 16 11C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9C15.4477 9 15 9.44772 15 10Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DeleteIcon = () => (
  <svg
    className="fill-lt-text hover:fill-dk-primary dark:fill-dk-text dark:hover:fill-lt-primary"
    width="24"
    height="24"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" />
    <path
      className="stroke-lt-surface dark:stroke-dk-surface"
      d="M17.8333 14.1667V20.5833M14.1667 14.1667V20.5833M10.5 10.5V21.3167C10.5 22.3434 10.5 22.8565 10.6998 23.2486C10.8756 23.5936 11.1559 23.8746 11.5008 24.0504C11.8926 24.25 12.4057 24.25 13.4305 24.25H18.5695C19.5943 24.25 20.1067 24.25 20.4984 24.0504C20.8434 23.8746 21.1246 23.5936 21.3004 23.2486C21.5 22.8568 21.5 22.3443 21.5 21.3195V10.5M10.5 10.5H12.3333M10.5 10.5H8.66667M12.3333 10.5H19.6667M12.3333 10.5C12.3333 9.64577 12.3333 9.21887 12.4729 8.88196C12.659 8.43274 13.0156 8.07563 13.4648 7.88955C13.8018 7.75 14.2291 7.75 15.0833 7.75H16.9167C17.7709 7.75 18.198 7.75 18.5349 7.88955C18.9841 8.07563 19.341 8.43274 19.527 8.88196C19.6666 9.21887 19.6667 9.64578 19.6667 10.5M19.6667 10.5H21.5M21.5 10.5H23.3333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EditIcon = () => {
  return (
    <svg
      className="fill-lt-text hover:fill-dk-primary dark:fill-dk-text dark:hover:fill-lt-primary"
      width="24"
      height="24"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" />
      <path
        className="stroke-lt-surface dark:stroke-dk-surface"
        d="M16 11.5861L8 19.5861V23.5861L12 23.586L20 15.586M16 11.5861L18.8686 8.7174L18.8704 8.7157C19.2652 8.32082 19.463 8.12303 19.691 8.04894C19.8919 7.98369 20.1082 7.98369 20.3091 8.04894C20.5369 8.12297 20.7345 8.32054 21.1288 8.71486L22.8686 10.4547C23.2646 10.8507 23.4627 11.0488 23.5369 11.2771C23.6022 11.4779 23.6021 11.6943 23.5369 11.8951C23.4628 12.1233 23.265 12.3211 22.8695 12.7166L22.8686 12.7174L20 15.586M16 11.5861L20 15.586"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ExitIcon = () => {
  return (
    <svg
      className="fill-lt-text dark:fill-dk-text"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.16168 8.60055e-07H13.8388C14.3659 -1.70213e-05 14.8205 -3.25181e-05 15.1949 0.0305752C15.5902 0.0628916 15.9831 0.134245 16.3614 0.326982C16.9248 0.61405 17.3851 1.07224 17.6732 1.63781C17.8659 2.016 17.9372 2.40906 17.9695 2.80397C18 3.17815 18 3.6323 18 4.15839V13.8421C18 14.3682 18 14.8222 17.9695 15.1962C17.9372 15.591 17.8659 15.9838 17.6732 16.3619C17.3854 16.9269 16.9254 17.3859 16.3614 17.6732C15.9833 17.8659 15.5905 17.9372 15.1957 17.9695C14.8217 18 14.3677 18 13.8416 18H4.15839C3.6323 18 3.17815 18 2.80397 17.9695C2.40906 17.9372 2.016 17.8659 1.63781 17.6732C1.07245 17.3852 0.614156 16.9252 0.326982 16.3616C0.134216 15.9833 0.0628819 15.5902 0.0305732 15.1949C-3.25181e-05 14.8204 -1.70213e-05 14.3657 8.60083e-07 13.8386L1.81376e-06 13.75C1.81376e-06 13.1977 0.447717 12.75 1 12.75C1.55229 12.75 2 13.1977 2 13.75V13.8C2 14.3766 2.00078 14.7487 2.02393 15.0319C2.04612 15.3034 2.08377 15.4041 2.109 15.4536C2.20532 15.6426 2.3585 15.7958 2.54579 15.8912C2.59501 15.9163 2.69554 15.9539 2.96686 15.9761C3.2498 15.9992 3.62146 16 4.19691 16H13.8031C14.3786 16 14.75 15.9992 15.0327 15.9761C15.3036 15.954 15.4041 15.9164 15.4534 15.8912C15.6421 15.7951 15.7956 15.6415 15.8912 15.4539C15.9164 15.4046 15.954 15.3041 15.9761 15.0332C15.9992 14.7505 16 14.379 16 13.8036V4.19691C16 3.62146 15.9992 3.2498 15.9761 2.96686C15.9539 2.69554 15.9163 2.59501 15.8912 2.54579C15.7959 2.35871 15.6427 2.20542 15.4534 2.109C15.4039 2.08375 15.3032 2.04611 15.0319 2.02393C14.7488 2.00078 14.3768 2 13.8002 2H4.2002C3.62365 2 3.25126 2.00078 2.9678 2.02393C2.69595 2.04614 2.59517 2.08383 2.54579 2.109C2.35763 2.20487 2.20487 2.35763 2.109 2.54579C2.08383 2.59517 2.04614 2.69595 2.02393 2.9678C2.00078 3.25126 2 3.62365 2 4.2002V4.24802C2 4.80031 1.55229 5.24802 1 5.24802C0.447717 5.24802 1.81376e-06 4.80031 1.81376e-06 4.24802L8.60083e-07 4.16168C-1.70213e-05 3.63451 -3.23988e-05 3.17965 0.0305692 2.80499C0.0628619 2.40962 0.134158 2.01625 0.326982 1.63781C0.614602 1.07332 1.07332 0.614602 1.63781 0.326982C2.01625 0.134158 2.40962 0.0628619 2.80499 0.0305692C3.17965 -3.23988e-05 3.63451 -1.70213e-05 4.16168 8.60055e-07ZM8.2929 5.2929C8.68342 4.90237 9.31658 4.90237 9.70711 5.2929L12.7071 8.2929C13.0976 8.68342 13.0976 9.31658 12.7071 9.70711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.2929 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L9.58579 10H1C0.447717 10 1.81376e-06 9.55229 1.81376e-06 9C1.81376e-06 8.44772 0.447717 8 1 8H9.58579L8.2929 6.70711C7.90237 6.31658 7.90237 5.68342 8.2929 5.2929Z"
      />
    </svg>
  );
};

export const ExportIcon = () => (
  <svg
    className="ml-1 stroke-primary-color-text"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Communication / Share_iOS_Export">
      <path
        id="Vector"
        d="M9 6L12 3M12 3L15 6M12 3V13M7.00023 10C6.06835 10 5.60241 10 5.23486 10.1522C4.74481 10.3552 4.35523 10.7448 4.15224 11.2349C4 11.6024 4 12.0681 4 13V17.8C4 18.9201 4 19.4798 4.21799 19.9076C4.40973 20.2839 4.71547 20.5905 5.0918 20.7822C5.5192 21 6.07899 21 7.19691 21H16.8036C17.9215 21 18.4805 21 18.9079 20.7822C19.2842 20.5905 19.5905 20.2839 19.7822 19.9076C20 19.4802 20 18.921 20 17.8031V13C20 12.0681 19.9999 11.6024 19.8477 11.2349C19.6447 10.7448 19.2554 10.3552 18.7654 10.1522C18.3978 10 17.9319 10 17 10"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const GuestsIcon = () => {
  return (
    <svg
      className="stroke-lt-text dark:stroke-dk-text"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="User / Users">
        <path
          id="Vector"
          d="M21 19.9999C21 18.2583 19.3304 16.7767 17 16.2275M15 20C15 17.7909 12.3137 16 9 16C5.68629 16 3 17.7909 3 20M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5M9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const GuestRemoveIcon = () => (
  <svg
    className="fill-lt-text hover:fill-dk-primary dark:fill-dk-text dark:hover:fill-lt-primary"
    width="24"
    height="24"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" />
    <path
      className="stroke-lt-surface dark:stroke-dk-surface"
      d="M18.5 21.8333C18.5 19.9924 16.2614 18.5 13.5 18.5C10.7386 18.5 8.5 19.9924 8.5 21.8333M18.5 16.8333H23.5M13.5 16C11.6591 16 10.1667 14.5076 10.1667 12.6667C10.1667 10.8257 11.6591 9.33333 13.5 9.33333C15.3409 9.33333 16.8333 10.8257 16.8333 12.6667C16.8333 14.5076 15.3409 16 13.5 16Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MoonIcon = () => {
  return (
    <svg
      className="stroke-dk-text"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Environment / Moon">
        <path
          id="Vector"
          d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const NavMenuIcon = () => {
  return (
    <svg
      className="stroke-lt-text dark:stroke-dk-text"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Menu / Hamburger_MD">
        <path
          id="Vector"
          d="M5 17H19M5 12H19M5 7H19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const PageLoaderIcon = () => {
  return (
    <svg
      className="animate-spin-slow stroke-lt-heading dark:stroke-dk-heading"
      width="48"
      height="48"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 1V5.8M13 20.2V25M4.516 4.516L7.912 7.912M18.088 18.088L21.484 21.484M1 13H5.8M20.2 13H25M4.516 21.484L7.912 18.088M18.088 7.912L21.484 4.516"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlusIcon = () => {
  return (
    <svg
      className="stroke-primary-color-text"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Edit / Add_Plus">
        <path
          id="Vector"
          d="M6 12H12M12 12H18M12 12V18M12 12V6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const PropertiesIcon = () => {
  return (
    <svg
      className="fill-lt-text dark:fill-dk-text"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 11V21H7V16H9V21H15V11L8 6L1 11ZM13 19H11V14H5V19H3V12.03L8 8.46L13 12.03V19Z" />
      <path d="M19 7H17V9H19V7Z" />
      <path d="M19 11H17V13H19V11Z" />
      <path d="M19 15H17V17H19V15Z" />
      <path d="M10 3V4.97L12 6.4V5H21V19H17V21H23V3H10Z" />
    </svg>
  );
};

export const SuccessIcon = () => {
  return (
    <svg
      className="fill-lt-text dark:fill-dk-text"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM14.78 7.7L9.11 13.37C8.96937 13.5105 8.77875 13.5893 8.58 13.5893C8.38125 13.5893 8.19063 13.5105 8.05 13.37L5.22 10.54C5.08052 10.3989 5.0023 10.2084 5.0023 10.01C5.0023 9.81157 5.08052 9.62114 5.22 9.48C5.51 9.19 5.99 9.19 6.28 9.48L8.58 11.78L13.72 6.64C14.01 6.35 14.49 6.35 14.78 6.64C15.07 6.93 15.07 7.4 14.78 7.7Z" />
    </svg>
  );
};

export const SunIcon = () => {
  return (
    <svg
      className="stroke-lt-primary"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Environment / Sun">
        <path
          id="Vector"
          d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const TableLoaderIcon = () => {
  return (
    <svg
      className="mx-auto fill-lt-heading dark:fill-dk-heading"
      width="96px"
      height="64px"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="15" y="30" width="8" height="40">
        <animate
          attributeName="opacity"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          values="1;0.2;1"
          begin="-0.6"
        ></animate>
      </rect>
      <rect x="35" y="30" width="8" height="40">
        <animate
          attributeName="opacity"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          values="1;0.2;1"
          begin="-0.4"
        ></animate>
      </rect>
      <rect x="55" y="30" width="8" height="40">
        <animate
          attributeName="opacity"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          values="1;0.2;1"
          begin="-0.2"
        ></animate>
      </rect>
      <rect x="75" y="30" width="8" height="40">
        <animate
          attributeName="opacity"
          dur="1s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          values="1;0.2;1"
          begin="-1"
        ></animate>
      </rect>
    </svg>
  );
};
