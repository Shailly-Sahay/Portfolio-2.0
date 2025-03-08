import { useState, useCallback } from "react";

const useSceneLoaded = () => {
  const [sceneLoaded, setSceneLoaded] = useState(false);

  // useCallback ensures we don't create a new function on every render
  const markSceneLoaded = useCallback(() => {
    setSceneLoaded(true);
  }, []);

  return { sceneLoaded, markSceneLoaded };
};

export default useSceneLoaded;
