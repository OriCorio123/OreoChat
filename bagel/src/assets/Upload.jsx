const Upload = ({ className = 'w-8 h-8', fill = '#d4c9c9', stroke = '#d4c9c9', ...props }) => {
  return (
    <svg
      version="1.1"
      id="Uploaded_to_svgrepo_com"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      fill={fill}
      stroke={stroke}
      className={className}
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path
          className="puchipuchi_een"
          d="M22.414,23.586c0.781,0.781,0.781,2.047,0,2.828c-0.78,0.781-2.048,0.781-2.828,0L18,24.828V29 c0,1.104-0.896,2-2,2s-2-0.896-2-2v-4.172l-1.586,1.586c-0.78,0.781-2.048,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l5-5 c0.78-0.781,2.048-0.781,2.828,0L22.414,23.586z M26,10c0-4.971-4.029-9-9-9c-4.326,0-7.935,3.053-8.8,7.12C7.812,8.042,7.411,8,7,8 c-3.314,0-6,2.686-6,6s2.686,6,6,6h4.758l2.121-2.121C14.445,17.312,15.198,17,16,17c0.802,0,1.555,0.312,2.121,0.879L20.242,20H26 c2.761,0,5-2.239,5-5S28.761,10,26,10z"
        />
      </g>
    </svg>
  );
};

export default Upload;