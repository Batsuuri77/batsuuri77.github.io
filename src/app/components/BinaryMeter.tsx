"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BinaryMeterProps {
  binaryNumber: string;
  containerClassName?: string;
  digitClassName?: string;
}

const BinaryMeter: React.FC<BinaryMeterProps> = ({
  binaryNumber,
  containerClassName = "flex space-x-1 text-xl font-bold",
  digitClassName = "w-8 h-8 bg-gray-800 text-white flex items-center justify-center rounded overflow-hidden",
}) => {
  const binaryArray = binaryNumber.split("").map(Number);
  const [digits, setDigits] = useState<number[]>(() =>
    new Array(binaryArray.length).fill(0)
  );
  const [completed, setCompleted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    setCompleted(false);
    setDigits(Array(binaryArray.length).fill(0));

    const animateDigit = async (index: number) => {
      if (index >= binaryArray.length) return;

      let currentDigit = 0;
      const totalRotations = 2;
      let rotationCount = 0;
      const rotationDuration = 50;

      while (
        rotationCount < totalRotations ||
        currentDigit !== binaryArray[index]
      ) {
        await new Promise((resolve) => setTimeout(resolve, rotationDuration));
        setDigits((prevDigits) => {
          const newDigits = [...prevDigits];
          newDigits[index] = currentDigit;
          return newDigits;
        });
        currentDigit = (currentDigit + 1) % 10;
        rotationCount++;
      }

      setTimeout(() => animateDigit(index + 1), 500);
    };
    animateDigit(0);
  }, [binaryNumber, isMounted]);

  return (
    <div className={containerClassName}>
      {digits.map((digit, index) => (
        <motion.div
          key={index}
          className={digitClassName}
          initial={{ y: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {digit}
        </motion.div>
      ))}
      {completed}
      {/* {completed && (
        <div className="text-xl mt-4 text-green-500">Animation Complete!</div>
      )} */}
    </div>
  );
};

export default BinaryMeter;
