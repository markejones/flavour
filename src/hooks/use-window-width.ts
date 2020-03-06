import { useState, useEffect } from "react";

// From Dan Abramovs' post on hooks, as a reminder of how powerful hooks can be. Suggest
// coming back to look at this when frustrated with how much of a pain it is to learn hooks
// after getting so familiar with the 'old way'.
// link -> https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889
export function useWindowWidth(): number {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}
