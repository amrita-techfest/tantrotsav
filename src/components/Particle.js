import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import part from "./part";

function Particle() {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);
  return (
    <div>
      <Particles id="tsparticles" options={part} init={particlesInit} />
    </div>
  );
}

export default Particle;
