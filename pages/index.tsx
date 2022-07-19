import { Autocomplete, TextField } from "@mui/material";

export default function Home() {
  return (
    <div className="w-screen flex justify-center h-screen items-center bg-slate-700">
      <Autocomplete
        className="w-72"
        options={new Array(100).fill(0).map((v, i) => {
          return { ln: i, brother: "hello", shit: true };
        })}
        renderInput={(params) => (
          <TextField
            className="text-white"
            {...params}
            label="Numbers"
            key={params.id}
          />
        )}
        getOptionLabel={(b: { ln: number; brother: string }) => {
          return b.ln + b.brother + Math.floor(Math.random() * 90);
        }}
      />
    </div>
  );
}
