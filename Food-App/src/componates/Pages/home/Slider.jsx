import { Carousel } from "@material-tailwind/react";
 import ImageOne from "../img/image-4.jpg"
 import ImageTwo from "../img/image-5.jpg"
 import ImageThree  from "../img/image-6.jpg"
 function Slider() {
  return (
    <Carousel
    className="rounded-xl h-[100vh] pt-1"
    navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}
  >
    <img
      src={ImageOne}
      alt="image 1"
      className="h-full w-full object-cover"
    />
    <img
       src={ImageTwo}
      alt="image 2"
      className="h-full w-full object-cover"
    />
    <img
       src={ImageThree}
      alt="image 3"
      className="h-full w-full object-cover"
    />
  </Carousel>
  );
}

export default Slider
