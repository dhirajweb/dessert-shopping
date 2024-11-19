const PrimaryBtn = ({ btnText, onClick, className }) => {
  return (
    <button
      className={`text-md lg:text-2xl bg-[#c7390e] text-white font-bold p-4 rounded-full hover:brightness-125 active:shadow-lg transform active:scale-90 transition-transform ${className}`}
      onClick={onClick}
      aria-label={btnText}
    >
      {btnText}
    </button>
  );
};

export default PrimaryBtn;
