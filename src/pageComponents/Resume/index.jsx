import React from "react";

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import styles from "./index.module.scss";

export default function Resume() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
    });

    return (
        <div className={styles.resumeDiv}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/legacy/build/pdf.worker.js">
                <div>
                    <Viewer fileUrl="/Riki_Resume.pdf" plugins={[defaultLayoutPluginInstance]} />
                </div>
            </Worker>
        </div>
    );
}


