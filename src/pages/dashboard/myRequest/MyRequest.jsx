import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyRequest = () => {
  const [totalRequest, setTotalRequest] = useState([]);
  const [myRequest, setMyRequest] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`/my-request?page=${currentPage - 1}&size=${itemsPerPage}`)
      .then((res) => {
        setMyRequest(res.data.request);
        setTotalRequest(res.data.totalRequest);
      });
  }, [axiosSecure]);

  const numOfPage = Math.ceil(totalRequest / itemsPerPage);
  const pages = [...Array(numOfPage).keys()].map((e) => e + 1);

  console.log({ myRequest, totalRequest, numOfPage, pages });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRequest;
