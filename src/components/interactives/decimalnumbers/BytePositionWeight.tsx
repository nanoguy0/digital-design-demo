import React from "react";
import { motion } from "framer-motion";
import { useSignal } from "@preact/signals-react";
import Byte from "../Byte";
import './style.css';

export default ({ ...props }) => {
    const byteValue = useSignal(0);
    return (
        <motion.div 
        className="byte-weight-container">
            <Byte numberValue={byteValue} />
        </motion.div>

    );
}
