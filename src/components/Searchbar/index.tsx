import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { ImSearch } from "react-icons/im";

import { Input } from "../Input";

interface SearchProps {
  onSubmit: (value: string) => void;
  onChange: (value: string) => void;
}

export function Searchbar({ onSubmit, onChange }: SearchProps) {
  const [term, setTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    onChange(e.target.value);
  };

  return (
    <Formik
      initialValues={{ term: "" }}
      onSubmit={({ term }) => onSubmit(term)}
    >
      <Form>
        <Field
          type="text"
          name="term"
          placeholder="Search"
          icon={ImSearch}
          as={Input}
          onChange={handleChange}
          value={term}
        />
      </Form>
    </Formik>
  );
}
