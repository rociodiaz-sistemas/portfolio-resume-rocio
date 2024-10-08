import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import moonsvg from "../../../assets/moons/moon.svg"; // Default moon SVG
import sunsvg from "../../../assets/sun.svg"; // Default sun SVG
import { Hemisphere, Moon } from "lunarphase-js";

// Import all SVGs for different lunar phases
import newmoon from "../../../assets/moons/newmoon.svg";
import waxingcrescent from "../../../assets/moons/waxingcrescent.svg";
import firstquarter from "../../../assets/moons/firstquarter.svg";
import waxinggibbous from "../../../assets/moons/waxinggibbous.svg";
import fullmoon from "../../../assets/moons/fullmoon.svg";
import waninggibbous from "../../../assets/moons/waninggibbous.svg";
import lastquarter from "../../../assets/moons/lastquarter.svg";
import waningcrescent from "../../../assets/moons/waningcrescent.svg";
import { MOON_INDEX } from "../../../utils/helpers";

interface Time {
  hours: number;
  minutes: number;
}

interface MoonAnimationProps {
  startTime: Time;
  peakTime: Time;
  endTime: Time;
  currentTime?: Time | Date; // Optional current time prop
  overNight?: boolean; // New prop to indicate overnight time range
  astralbody: "moon" | "sun"; // New prop to specify moon or sun
}

const MoonAndSunAnimation: React.FC<MoonAnimationProps> = ({
  startTime,
  peakTime,
  endTime,
  currentTime,
  overNight,
  astralbody,
}) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [moonPhase, setMoonPhase] = useState<string | null>(null);
  const [userHemisphere, setUserHemisphere] = useState<Hemisphere | undefined>(
    undefined
  );
  useEffect(() => {
    const getUserHemisphere = async () => {
      try {
        const response = await fetch("https://geojs.io/api/ip/"); // GeoJS API endpoint
        const data = await response.json();
        const latitude = parseFloat(data.latitude);

        // Determine hemisphere based on latitude
        const hemisphere =
          latitude >= 0 ? Hemisphere.NORTHERN : Hemisphere.SOUTHERN;
        setUserHemisphere(hemisphere);
      } catch (error) {
        console.error("Failed to fetch user location:", error);
        // Default to southern hemisphere in case of an error
        setUserHemisphere(Hemisphere.SOUTHERN);
      }
    };

    getUserHemisphere();
  }, []);

  useEffect(() => {
    if (userHemisphere) {
      const date = new Date();
      const phase = Moon.lunarPhase(date, {
        hemisphere: userHemisphere,
      });
      setMoonPhase(phase);
    }
  }, [userHemisphere]);

  const getTimeInMinutes = (time: Time | Date): number => {
    if ("hours" in time) {
      // It's of type Time
      return time.hours * 60 + time.minutes;
    } else {
      // It's of type Date
      return time.getHours() * 60 + time.getMinutes();
    }
  };

  const convertToContinuousScale = (
    hours: number,
    minutes: number,
    startHours: number,
    endHours: number
  ) => {
    if (overNight) {
      return hours < startHours
        ? (hours + 24) * 60 + minutes
        : hours * 60 + minutes;
    }
    return hours * 60 + minutes;
  };

  const convertTimeToContinuousScale = (time: Time) =>
    convertToContinuousScale(
      time.hours,
      time.minutes,
      startTime.hours,
      endTime.hours
    );

  const startMinutes = convertTimeToContinuousScale(startTime);
  const peakMinutes = convertTimeToContinuousScale(peakTime);
  const endMinutes = convertTimeToContinuousScale(endTime);

  const calculatePosition = (currentMinutes: number): number => {
    let position = 0;

    if (overNight) {
      if (currentMinutes < startMinutes) {
        currentMinutes += 24 * 60; // Adjust for overnight wrap-around
      }
      if (currentMinutes <= peakMinutes) {
        position =
          (currentMinutes - startMinutes) / (peakMinutes - startMinutes);
      } else if (currentMinutes <= endMinutes) {
        position =
          1 - (currentMinutes - peakMinutes) / (endMinutes - peakMinutes);
      }
    } else {
      if (currentMinutes >= startMinutes && currentMinutes <= peakMinutes) {
        position =
          (currentMinutes - startMinutes) / (peakMinutes - startMinutes);
      } else if (currentMinutes > peakMinutes && currentMinutes <= endMinutes) {
        position =
          1 - (currentMinutes - peakMinutes) / (endMinutes - peakMinutes);
      }
    }

    // Scale position to be between 10% and 90%
    const minPosition = -0.1;
    const maxPosition = 0.9;
    position = minPosition + position * (maxPosition - minPosition);

    return Math.max(minPosition, Math.min(maxPosition, position));
  };

  useEffect(() => {
    const now = currentTime || new Date(); // Use currentTime if provided, otherwise use current time
    const currentMinutes = getTimeInMinutes(now);
    const position = calculatePosition(currentMinutes);
    setCurrentPosition(position);
  }, [startTime, peakTime, endTime, currentTime, overNight]); // Update when any of these props change

  // Map lunar phase names to corresponding SVGs
  const phaseToSvg: { [key: string]: string } = {
    New: newmoon,
    "Waxing Crescent": waxingcrescent,
    "First Quarter": firstquarter,
    "Waxing Gibbous": waxinggibbous,
    Full: fullmoon,
    "Waning Gibbous": waninggibbous,
    "Last Quarter": lastquarter,
    "Waning Crescent": waningcrescent,
  };

  // Determine which SVG to use based on the astralbody prop
  const astralSvg =
    astralbody === "moon"
      ? moonPhase
        ? phaseToSvg[moonPhase]
        : moonsvg
      : sunsvg;

  // Adjust glow color based on astralbody
  const glowColor =
    astralbody === "moon"
      ? "rgba(255, 255, 255, 0.8)"
      : "rgba(255, 245, 107, 0.8)"; // Yellowish for sun

  return (
    <motion.div
      style={{
        position: "absolute",
        height: "100%",
        width: "100%", // Ensure it takes the full height and width of the container
      }}
    >
      <div
        style={{
          width: 1,
          height: 1,
          position: "absolute",
          top: `${(1 - currentPosition) * 100}%`, // Invert position to start at the bottom
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          opacity: "0.5",
          boxShadow: `0 0 3vw 3vw ${glowColor}`, // Soft and large spread glow effect with adjusted color
        }}
      />
      <motion.img
        src={astralSvg}
        alt={astralbody === "moon" ? "Moon" : "Sun"}
        style={{
          width: "5vw",
          height: "auto",
          position: "absolute",
          top: `${(1 - currentPosition) * 100}%`, // Invert position to start at the bottom
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: MOON_INDEX, // Ensure moon or sun SVG is on top of the glow
        }}
      />
    </motion.div>
  );
};

export default MoonAndSunAnimation;
