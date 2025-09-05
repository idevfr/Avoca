function Button({ bg = false, children }) {
  return (
    <button
      className={`border ${bg ? "bg-green-950 text-green-50" : ""} cursor-pointer border-green-950 px-20 py-2 text-sm font-semibold tracking-wider lg:text-2xl`}
    >
      {children}
    </button>
  );
}
export default Button;
