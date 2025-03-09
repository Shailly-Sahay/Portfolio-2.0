import { useEffect, useRef } from "react";
import SectionHeader from "../../components/SectionHeader";
import DisorganizedText from "../../components/DisorganizedText";
import Button from "../../components/Button";

const Matrix = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const w = (canvas.width = document.body.offsetWidth);
    const h = (canvas.height = document.body.offsetHeight);
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);

    const matrix = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "#6919ff";
      ctx.font = "15pt monospace";

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > h + Math.random() * h * 5) ypos[ind] = 0;
        else ypos[ind] = y + 20;
      });
    };

    const animationInterval = setInterval(matrix, 40);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <section className="relative">
      <canvas
        ref={canvasRef}
        id="canv"
        height="200"
        style={{
          width: "100vw",
          position: "absolute",
          height: "100vh",
          margin: "0",
        }}
      >
        {" "}
      </canvas>
      <div
        className="h-[100vh] w-full absolute z-10"
        style={{
          background: ` radial-gradient(circle, #0000 0%, #000 80%, #000), linear-gradient(#0000, #0000, #0000, #0000, #000)`,
        }}
      ></div>
      <div className="section-pd h-[100vh] relative z-20 flex flex-col">
        {" "}
        <SectionHeader text="Source Code" customClass="text-white" />
        <div className="my-auto text-center ">
          <DisorganizedText
            text="Behind The Simulation"
            className="glowing-text text-white text-center mb-16"
            as="h2"
          />
          <p className="text-white large-font mt-16 max-w-7xl mx-auto mb-32">
            You take the comfy road - you kick back, binge-watch your shows, and
            stick to the tried-and-true. You take the wild ride - you jump into
            the unknown, and I take you on an adventure through world full of
            awesomeness
          </p>
          <div className="max-w-4xl mx-auto">
            <Button
              text="LET'S JUMP IN"
              customClass="w-full "
              href="https://github.com/Shailly-Sahay/Portfolio-2.0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matrix;
