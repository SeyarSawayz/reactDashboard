import DataTable from "react-data-table-component";
const Table = () => {
  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.productName,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: "Total Price",
      selector: (row) => row.totalPrice,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      productName: "Apple watch 3 series",
      location: "6096 Marjolaine Landing",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">
          Deliverd
        </div>
      ),
    },
    {
      id: 2,
      productName: "Iphone 12 Pro",
      location: "8093 BC,Vancouver",
      date: "05.06.2024",
      quantity: "1",
      totalPrice: "$735",
      status: (
        <div className="bg-[#e9b434] rounded-full px-3 py-1 text-white">
          Pending
        </div>
      ),
    },
    {
      id: 3,
      productName: "Apple watch 4 series",
      location: "6096 Marjolaine Landing",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#f93c65] rounded-full px-3 py-1 text-white">
          Canceled
        </div>
      ),
    },
    {
      id: 4,
      productName: "Apple watch 3 series",
      location: "6096 Marjolaine Landing",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">
          Deliverd
        </div>
      ),
    },
    {
      id: 5,
      productName: "Iphone 12 Pro",
      location: "8093 BC,Vancouver",
      date: "05.06.2024",
      quantity: "1",
      totalPrice: "$735",
      status: (
        <div className="bg-[#e9b434] rounded-full px-3 py-1 text-white">
          Pending
        </div>
      ),
    },
    {
      id: 6,
      productName: "Apple watch 4 series",
      location: "6096 Marjolaine Landing",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#f93c65] rounded-full px-3 py-1 text-white">
          Canceled
        </div>
      ),
    },
    {
      id: 7,
      productName: "Apple watch 3 series",
      location: "6096 Marjolaine Landing",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">
          Deliverd
        </div>
      ),
    },
    {
      id: 8,
      productName: "Iphone 12 Pro",
      location: "8093 BC,Vancouver",
      date: "05.06.2024",
      quantity: "1",
      totalPrice: "$735",
      status: (
        <div className="bg-[#e9b434] rounded-full px-3 py-1 text-white">
          Pending
        </div>
      ),
    },
    {
      id: 9,
      productName: "Apple watch 4 series",
      location: "6096 Marjolaine Landing",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#f93c65] rounded-full px-3 py-1 text-white">
          Canceled
        </div>
      ),
    },
    {
      id: 10,
      productName: "Apple watch 3 series",
      location: "6096 Marjolaine Landing",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">
          Deliverd
        </div>
      ),
    },
    {
      id: 11,
      productName: "Iphone 12 Pro",
      location: "8093 BC,Vancouver",
      date: "05.06.2024",
      quantity: "1",
      totalPrice: "$735",
      status: (
        <div className="bg-[#e9b434] rounded-full px-3 py-1 text-white">
          Pending
        </div>
      ),
    },
    {
      id: 12,
      productName: "Apple watch 4 series",
      location: "6096 Marjolaine Landing",
      date: "12.09.2024",
      quantity: "1",
      totalPrice: "$896",
      status: (
        <div className="bg-[#f93c65] rounded-full px-3 py-1 text-white">
          Canceled
        </div>
      ),
    },
  ];
  return <DataTable columns={columns} data={data} pagination selectableRows />;
};

export default Table;
