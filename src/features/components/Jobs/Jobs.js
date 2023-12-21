import React, { useEffect, useState } from "react";
import workApi from "../../../api/workApi";
import { getQueryVariable } from "../../container/Functionjs";
import Footer from "../Home/Footer/Footer";
import Breadcrumbs from "./Breadcrumb/Breadcrumb";
import Job from "./ListJobs/Job";
import Search from "./Search/Search";
export default function Jobs() {
  const [state, setState] = useState({
    name: getQueryVariable("name") || "",
    address: getQueryVariable("address") || "",
    data: "",
  });
  const { name, address, data } = state;
  const [time, setTime] = useState("0");
  const [amount, setAmount] = useState("0");
  const [salary, setSalary] = useState("0");
  const [exp, setExp] = useState(0);
  const [typeWorkValue, setTypeWorkValue] = useState(
    +getQueryVariable("typeWordId") || "",
  );
  const hangdelOnChange = (e) => {
    const { name, address } = e;
    setState({
      ...state,
      name: name,
      address: address,
    });
  };
  const onChangeTime = (e) => {
    setTime(e);
  };
  const onChangeAmount = (e) => {
    setAmount(e);
  };
  const onChangeSalary = (e) => {
    setSalary(e);
  };
  const onChangeTypeWork = (e) => {
    setTypeWorkValue(e);
  };
  const onChangeExp = (e) => {
    setExp(e);
  };
  useEffect(() => {
    workApi
      .search({
        name: name,
        nature: time,
        address: address,
        salary,
        status: 1,
        exp,
        typeWordId: typeWorkValue,
      })
      .then((ok) => {
        setState({
          ...state,
          data: ok.data,
        });
      });
    window.scrollTo(0, 0);
  }, [name, address, time, typeWorkValue, salary, exp]);
  return (
    <div>
      <Breadcrumbs />
      <Search
        nameSearch={name}
        addressSearch={address}
        onchange={hangdelOnChange}
      />
      <Job
        searchData={
          name === "" &&
          address === "" &&
          time === "0" &&
          salary === "0" &&
          exp === 0 &&
          typeWorkValue === ""
            ? ""
            : data
        }
        onAmout={onChangeAmount}
        onSalary={onChangeSalary}
        onTime={onChangeTime}
        onExp={onChangeExp}
        time={time}
        amount={amount}
        salary={salary}
        exp={exp}
        typeWorkValue={typeWorkValue}
        onTypeWork={onChangeTypeWork}
      />
      <Footer />
    </div>
  );
}
