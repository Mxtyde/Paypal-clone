export const Balance = ({ value }) => {
  return (
    <div className="flex">
      <div className="font-bold text-lg ml-4 text-blue-900">Balance</div>
      <div className="font-semibold ml-4 text-blue-900 text-lg">Rs {value}</div>
    </div>
  );
};
