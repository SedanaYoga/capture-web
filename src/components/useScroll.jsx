import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScroll = (th) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: th });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};

export default useScroll;
