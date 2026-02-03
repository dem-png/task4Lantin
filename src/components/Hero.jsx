import { useEffect, useState } from "react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(event) {

        }

        window.addEventListener("mousemove", handleMouseMove);

    });
    return ( 
    <section className="relative h-screen flex items-center justify-center pt-16 sm:px-6 lg:px-8 overflow-hidden">

    </section>
    );
}