import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import { FormSelect, FormCheck } from "react-bootstrap";

function Filter({ city, cityChangeHandler, order, orderChangeHandler }) {
  return (
    <Stack direction="horizontal" gap={2}>
      <h4>Filter:</h4>
      <FormSelect size="sm" value={order} onChange={orderChangeHandler}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
        <option value="revelation_order">Revelation Order</option>
      </FormSelect>
      <FormSelect size="sm" value={city} onChange={cityChangeHandler}>
        <option value="all">All</option>
        <option value="makkah">Makkah</option>
        <option value="madinah">Madinah</option>
      </FormSelect>
    </Stack>
  );
}

export default Filter;
