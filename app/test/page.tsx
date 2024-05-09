'use client'

import { useState } from "react";
import HandlePrompt from "@/app/components/HandlePrompt";

export default function Page() {
  const [result, setResult] = useState("// type a text prompt above and click 'Generate Microsim'");
  const [textInput, setTextInput] = useState("");
  const [waiting, setWaiting] = useState(false);
  const [temperature, setTemperature] = useState('');
  const [maxtokens, setMaxtokens] = useState('');



  const textInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setTextInput(event.target.value);
  }

  async function textInputSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setWaiting(true);
    setResult("// Please be patient, this may take a while...");
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_API_URL || ''}/api/pureprompt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
           prompt: textInput,
           temperature: Number(temperature), 
            maxtokens: Number(maxtokens) }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        setWaiting(false);
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      setResult(data.code);
      setWaiting(false);
    } catch(error: any) {
      alert((error as Error).message);
      setWaiting(false);
    }
  }

  




  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24  bg-slate-50 ">
        <div className="flex flex-row justify-center  w-full">
          <div className="flex flex-col gap-4 2xl:w-1/2 ">
            <HandlePrompt 
              key="textinput-01" 
              textInput={textInput} 
              onChange={textInputChange} 
              onSubmit={textInputSubmit} 
              waiting={waiting} 
              temperature={temperature} 
              setTemperature={setTemperature} 
              maxtokens={maxtokens} 
              setMaxtokens={setMaxtokens}
            />
          </div>
        </div>

      </main>

    </>
  );
}
