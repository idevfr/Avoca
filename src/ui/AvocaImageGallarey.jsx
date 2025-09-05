import { useState } from "react";
const data = [
  {
    imgelink: "/curosel-images/image-1.png",
  },
  {
    imgelink: "/curosel-images/image-2.png",
  },

  {
    imgelink: "/curosel-images/image-4.png",
  },
  {
    imgelink: "/curosel-images/image-5.png",
  },
  {
    imgelink: "/curosel-images/image-6.png",
  },
];
function AvocaImageGallarey() {
  const [active, setActive] = useState(data[0].imgelink);

  return (
    <div className="flex flex-col gap-4 lg:items-center">
      <div>
        <img
          className="h-full rounded-lg lg:h-[20rem]"
          src={active}
          alt="product images"
        />
      </div>
      <div className="">
        <div className="grid grid-cols-5 gap-3">
          {data.map(({ imgelink }, index) => (
            <div key={index}>
              <img
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-auto cursor-pointer rounded-lg object-cover object-center lg:h-[6rem]"
                alt="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvocaImageGallarey;
