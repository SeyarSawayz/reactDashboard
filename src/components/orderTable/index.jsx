import Table from "../table";
const OrderTable = () => {
  return (
    <div className="md:w-[95%] w-[80%] bg-white shadow-sm rounded-xl mt-10 py-4 mb-8">
      <div className="flex w-full items-center justify-between mb-6">
        <span className="font-bold text-gray-900 text-[24px] px-4">
          Today Orders
        </span>
      </div>
      <Table />
    </div>
  );
};

export default OrderTable;
