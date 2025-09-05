function ButtonSmall({ active, text }) {
  return (
    <button
      className={`cursor-pointer border border-green-950 ${active ? "bg-green-950 text-green-50" : "text-green-950"} px-3.5 py-1 text-xl`}
    >
      {text} ml
    </button>
  );
}

export default ButtonSmall;
