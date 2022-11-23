import {
  Button,
  Grid,
  Modal,
  Pagination,
} from "@cedcommerce/ounce-ui";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState({});
  const [count,setCount] = useState(10);
  const [page,setPage] = useState(1)
  const [col, setCol] = useState([
    {
      align: "Left",
      dataIndex: "userId",
      key: "userId",
      title: "UserId",
      width: 40,
    },
    {
      align: "Left",
      dataIndex: "key",
      key: "key",
      title: "ID",
      width: 40,
    },
    {
      align: "Left",
      dataIndex: "title",
      key: "title",
      title: "Title",
      width: 200,
    },
    {
      align: "center",
      dataIndex: "completed",
      key: "completed",
      title: "Completed",
      width: 50,
    },
    {
      align: "center",
      dataIndex: "action",
      key: "action",
      title: "Action",
      width: 50,
    },
  ]);
  const [data, setData] = useState([
    {
      address: "New York No. 1 Lake Park",
      age: 60,
      children: [
        {
          address: "New York No. 2 Lake Park",
          age: 42,
          key: 11,
          name: "John Brown",
        },
        {
          address: "New York No. 3 Lake Park",
          age: 30,
          key: 12,
          name: "John Brown jr.",
        },
      ],
      key: 1,
      name: "John Brown sr.",
    },
    {
      address: "Sidney No. 1 Lake Park",
      age: 32,
      key: 2,
      name: "Joe Black",
    },
  ]);
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${count}&_page=${page}`)
      .then((res) => res.json())
      .then((result) => {
        let allData = [];
        result.map((item, key) => {
          let row = {
            userId: key,
            key: item.id,
            title: item.title,
            completed: item.completed ? "Completed" : "Not Completed",
            action: (
              <Button
                onClick={() => {
                  setShow(true);
                  setShowData({
                    userId: item.id,
                    key: item.id,
                    title: item.title,
                    completed: item.completed ? "Completed" : "Not Completed",
                  });
                }}
              >
                Action
              </Button>
            ),
          };
          allData = [row, ...allData];
        });
        setData(allData.reverse())
        setLoading(false);
      });
  }, [count,page]);
  return (
    <div>
      <Grid
        columns={col}
        dataSource={data}
        loading={loading}
        tableLayout="fixed"
      />
      <Pagination
        countPerPage={count}
        currentPage={page}
        onCountChange={(value) =>{setCount(value)}}
        onEnter={function noRefCheck() {}}
        onNext={() =>{setPage(page+1)}}
        onPrevious={() =>{if(page !== 0 ){ setPage(page-1)}}}
        optionPerPage={[
          {
            label: "10",
            value: "10",
          },
          {
            label: "15",
            value: "15",
          },
          {
            label: "20",
            value: "20",
          },
          {
            label: "25",
            value: "25",
          },
          {
            label: "50",
            value: "50",
          },
          {
            label: "100",
            value: "100",
          },
        ]}
        totalPages={20}
        totalitem={200}
      />
      <Modal
        close={function noRefCheck() {
          setShow(false);
        }}
        open={show}
        heading="Details"
        modalSize="medium"
        overlayClose
        secondaryAction={{
          content: "Close",
          loading: false,
          onClick: function noRefCheck() {
            setShow(false);
          },
        }}
      >
        <ul>
          <li> User ID: {showData.userId}</li>
          <li>Title: {showData.title}</li>
          <li>Status : {showData.completed}</li>
        </ul>
      </Modal>
    </div>
  );
};

export default Dashboard;
