interface HandlePromptProps {
  textInput: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  waiting: boolean;
  temperature: string;
  setTemperature: (value: string) => void;
  maxtokens: string;
  setMaxtokens: (value: string) => void;
}
export default function HandlePrompt({textInput, onChange, onSubmit, waiting, temperature,setTemperature, maxtokens, setMaxtokens}:HandlePromptProps) {
 
  return (
    <div className="rounded-md border border-gray-100 shadow-md shadow-emerald-600/30 bg-white p-3">
      <div className="flex justify-between xs:mb-2">
        <h3 className="font-semibold text-gray-500">Text prompt</h3>

      </div>
      <form onSubmit={onSubmit} className="w-full">
        <textarea key="textarea-01" className="block min-h-[50px] xs:min-h-[70px] border-[1.5px] border-emerald-500 p-2 rounded w-full mb-2 text-sm
        disabled:border-gray-300 disabled:text-gray-600 disabled:bg-gray-100"
          name="prompt"
          placeholder="Enter a text prompt in brief for better output"
          value={textInput}
          onChange={onChange}
          disabled={waiting}
        />
        <input 
          type="number" 
          name="temperature" 
          placeholder="Temperature" 
          value={temperature} 
          onChange={(e) => setTemperature(e.target.value)} 
          className="block w-full p-2 rounded mb-2 text-sm"
          disabled={waiting}
        />
        <input 
          type="number" 
          name="maxtokens" 
          placeholder="Max Tokens" 
          value={maxtokens} 
          onChange={(e) => setMaxtokens(e.target.value)} 
          className="block w-full p-2 rounded mb-2 text-sm"
          disabled={waiting}
        />
        {waiting && textInput?
          <button className="bg-gray-300 p-2 rounded w-full text-white text-sm px-3" type="submit" disabled>
            {/* <img src="loading.png" alt="loading icon" className="animate-spin w-4 h-4 mr-2 inline" /> */}
            Generating MicroSim...
          </button>
          : 
          <button className="bg-emerald-500 p-2 rounded w-full text-white text-sm px-3 cursor-pointer" type="submit">Generate MicroSim</button>
        }
      </form>
    </div>
  );
}