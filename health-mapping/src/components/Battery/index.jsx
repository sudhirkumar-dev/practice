import { useState, useEffect } from "react";
import { CiBatteryCharging } from "react-icons/ci";
import {
  FaBatteryEmpty,
  FaBatteryFull,
  FaBatteryHalf,
  FaBatteryQuarter,
  FaBatteryThreeQuarters,
} from "react-icons/fa6";
import "./index.css"; 

const Battery = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [charging, setCharging] = useState(false);

  useEffect(() => {
    const batteryHandler = (battery) => {
      const level = battery.level * 100;
      setBatteryLevel(level.toFixed(2));
      setCharging(battery.charging);
    };

    const updateBatteryStatus = () => {
      navigator.getBattery().then(batteryHandler);
    };

    navigator.getBattery().then((battery) => {
      batteryHandler(battery);
      battery.addEventListener("chargingchange", updateBatteryStatus);
      battery.addEventListener("levelchange", updateBatteryStatus);
    });

    return () => {
      navigator.getBattery().then((battery) => {
        battery.removeEventListener("chargingchange", updateBatteryStatus);
        battery.removeEventListener("levelchange", updateBatteryStatus);
      });
    };
  }, []);

  const renderBatteryIcon = () => {
    if (charging) {
      return <CiBatteryCharging />;
    } else {
      if (batteryLevel >= 75) {
        return <FaBatteryFull />;
      } else if (batteryLevel >= 50) {
        return <FaBatteryThreeQuarters />;
      } else if (batteryLevel >= 25) {
        return <FaBatteryHalf />;
      } else if (batteryLevel > 0) {
        return <FaBatteryQuarter />;
      } else {
        return <FaBatteryEmpty />;
      }
    }
  };

  return (
    <div className="qr-code-container"> 
      <h3>Battery Level</h3>
      <section className="battery-section">
        {renderBatteryIcon()}
        {!charging && (
          <>
            {batteryLevel !== null ? (
              <p>{batteryLevel}%</p>
            ) : (
              <p>Loading...</p>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default Battery;
