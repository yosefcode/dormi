import React from "react";
import { ImCloudDownload } from "react-icons/im";

import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Exelexport = ({ data }) => {
  return (
    <ExcelFile
        element={
          <button className="MangerButton_exel">
             <ImCloudDownload style={{marginLeft:"7px", marginTop:"4px", fontSize:"30px" }}/>   יצא לאקסל </button>

        }
        filename="dormi"
      >
        <ExcelSheet data={data} name="Dormi">
          <ExcelColumn label="breadcrumb" value="breadcrumb" />
          <ExcelColumn label="categoryname" value="categoryname" />
          <ExcelColumn label="closebyuserid" value="closebyuserid" />
          <ExcelColumn label="allowAccessToRoom" value="allowAccessToRoom" />
          <ExcelColumn
            label="closecommentstouser"
            value="closecommentstouser"
          />
          <ExcelColumn label="closecost" value="closecost" />
          <ExcelColumn label="closedate" value="closedate" />
          <ExcelColumn label="comments" value="comments" />
          <ExcelColumn label="dateopened" value="dateopened" />
          <ExcelColumn label="firstname" value="firstname" />
          <ExcelColumn label="lastname" value="lastname" />
          <ExcelColumn label="locationName" value="locationName" />
          <ExcelColumn label="phone" value="phone" />
          <ExcelColumn label="roomName" value="roomName" />
          <ExcelColumn label="locationName" value="locationName" />

          <ExcelColumn label="senttouserid" value="senttouserid" />
          <ExcelColumn label="statusname" value="statusname" />
          <ExcelColumn label="ticketPlanID" value="ticketPlanID" />
          <ExcelColumn label="ticketguid" value="ticketguid" />
          <ExcelColumn label="urgencyadmin" value="urgencyadmin" />
        </ExcelSheet>
      </ExcelFile>
  );
};

export default Exelexport;
