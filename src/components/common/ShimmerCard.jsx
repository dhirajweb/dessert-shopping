const ShimmerCard = () => {
  return (
    <div className="relative mt-4 h-[300px] bg-slate-300 rounded-lg shadow-md col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-4 animate-pulse">
      <button className="absolute w-[120px] flex bg-white border -bottom-[34px] left-[50%] translate-x-[-50%] translate-y-[-50%] px-8 py-4 items-center rounded-full gap-2 animate-pulse"></button>
    </div>
  );
};

export default ShimmerCard;
