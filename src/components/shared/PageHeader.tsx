import React from "react";
import { Breadcrumb } from "antd";

type Props = {
  title: string;
  subtitle?: string;
  breadcrumbs?: string[];
  children?: React.ReactNode;
};

export const PageHeader: React.FC<Props> = (props) => {
  const breadcrumbItems = props.breadcrumbs ? props.breadcrumbs.map((crumb) => ({ title: crumb })) : [];

  return (
    <div className="h-[120px] w-full flex flex-col justify-center bg-white border-b-2 border-gray-100 fixed top-[60px] px-5 mb-8">
      <div className="h-full flex flex-col justify-between py-5">
        <div>
          {props.breadcrumbs ? (
            <Breadcrumb
              className="text-xs"
              items={[
                {
                  title: "Dashboard",
                },
                ...breadcrumbItems,
              ]}
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-medium">{props.title}</h1>
          <p className="text-xs text-gray-700">{props.subtitle}</p>
        </div>
      </div>

      <div>{props.children}</div>
    </div>
  );
};
