'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyCyXQfT_cO-FCRV2yJu0S9NpXZpv5T4dvs");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });






export default function Home() {
  const [output, setOutput] = useState('');

  useEffect(() => {
    async function run() {

      const prompt = "Assalam o Alikum, So this is the second handshake i guess."

      try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        setOutput(text);
        console.log(text);
      }
      catch (e) {
        console.log(e);

      }
    }
    run();
  }, []
  );

  return (
    <main className={styles.main}>
      <div>
        <h1>Gemini</h1>
      </div>
      <div>
        <p>{output}</p>
      </div>
    </main>
  );
}
