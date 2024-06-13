import React from "react";
import DataTable from "react-data-table-component";
import NO_DATA_LOGO from "@/assets/no-data.png";

type Props = {
  data?: any[];
  columns: any[];
};

const NoDataBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-10">
      <img src={NO_DATA_LOGO} alt="no-data.png" className="w-[150px] h-[150px]" />
      <p className="text-gray-800 font-medium">No data available at the moment</p>
    </div>
  );
};

export const TableBuilder: React.FC<Props> = (props) => {
  return <DataTable data={props.data || []} columns={props.columns} noDataComponent={<NoDataBanner />} selectableRows pagination />;
};
