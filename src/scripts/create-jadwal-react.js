#!/usr/bin/env node

import fs from "fs";
import path from "path";

const hookCode = `
import { useEffect, useRef } from "react";
import {Jadwal} from "jadwalhtml";

export function useJadwal(options) {
  const ref = useRef(null);
  const instance = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    instance.current = new Jadwal(ref.current, options);

    return () => instance.current?.destroy?.();
  }, []);

  return { ref, instance };
}
`;



function createFile(filename , code , outPath) {
  const targetDir = path.resolve(process.cwd(), outPath);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const filePath = path.join(targetDir, `${filename}.jsx`);

  fs.writeFileSync(filePath, code.trim());

  console.log(`${filename} created at ${outPath}/${filename}.jsx`);
}

// create useJadwal hook
createFile("useJadwal" , hookCode , "src/hooks");