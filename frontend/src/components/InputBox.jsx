export function InputBox({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="text-sm font-medium mb-5 text-left py-2 px-10 ml-5">{label}</div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1 border-2 rounded border-slate-400"
      />
    </div>
  );
}
