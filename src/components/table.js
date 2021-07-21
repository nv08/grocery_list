import React from "react";
import Tabledata from "./Tabledata";

export default function Table(props) {
  const { groceries } = props;
  return (
    <div>
      {groceries.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Units</th>
              <th>Price Per Unit</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <Tabledata {...props} />
          </tbody>
        </table>
      ) : (
        "No data"
      )}
    </div>
  );
}
