function Price({ title = "", price = "" }) {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide lg:text-5xl">
        {title}
      </h1>
      <p className="text-xl font-bold">${price}</p>
      <p className="text-sm tracking-wider">
        *Tax included.{" "}
        <span className="text-blue-950 underline">
          <a href="#">(Shipping)</a>
        </span>{" "}
        calculated at checkout.
      </p>
    </div>
  );
}

export default Price;
