"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Input({ value, children, set, min = -200, max = 200 }) {
    return (
        <label>
            <code>{children}</code>
            <input
                value={value}
                type="range"
                min={min}
                max={max}
                onChange={(e) => set(parseFloat(e.target.value))}
            />
            <input
                type="number"
                value={value}
                min={min}
                max={max}
                onChange={(e) => set(parseFloat(e.target.value) || 0)}
            />
        </label>
    );
}

function Author({ params }) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);

    return (
        <div>
            <motion.div
                style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "20px",
                    border: "3px dotted red",
                }}
                className="box"
                animate={{ x, y, rotate }}
                transition={{ type: "spring" }}
            />
            <div className="inputs">
                <Input value={x} set={setX}>
                    x
                </Input>
                <Input value={y} set={setY}>
                    y
                </Input>
                <Input value={rotate} set={setRotate} min={-180} max={180}>
                    rotate
                </Input>
            </div>
        </div>
    );
}

export default Author;
