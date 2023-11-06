import React, { useState } from "react";
import { Flex, Input, Select } from 'antd';

const { Option } = Select;
function Search() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Input
          placeholder="Search"
          style={{ marginRight: "8px" }}
        />
        <Select
          placeholder="Filter"
          style={{ width: 120 }}
        >
          <Option value="filter1">Filter 1</Option>
          <Option value="filter2">Filter 2</Option>
          <Option value="filter3">Filter 3</Option>
        </Select>
      </div>
    </>
  );
}
export default Search;
