"use client";
import React from "react";
import { Form, Input, InputGroup, Select, Textarea } from "react-daisyui";
import { Row, Col } from "@components/CustomComponents";
import { twMerge } from "tailwind-merge";
// import MySunEditor from "@components/MySunEditor";

function SimpleForm(props) {
  /***************************************************************************************/
  //States
  /***************************************************************************************/

  /***************************************************************************************/
  //Var
  /***************************************************************************************/

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/
  React.useEffect(() => {
    //console.log(props);
  }, [props]);

  if (
    props.type === "textarea" ||
    props.type === "text" ||
    props.type === "number" ||
    props.type === "date" ||
    props.type === "datetime" ||
    props.type === "datetime-local"
  ) {
    let step = 1;
    if ("step" in props) {
      step = props.step;
    }

    let disabled = false;
    if ("disabled" in props && props.disabled === true) {
      disabled = true;
    }

    let required = false;
    if ("required" in props && props.required === true) {
      required = true;
    }
    return (
      <Col
        colSize={props.size ? parseInt(props.size) : 12}
        style={`${props.type === "checkbox" ? "flex" : ""}`}
      >
        {props.name && props.name !== "" ? (
          <label className="label py-1 font-bold">{props.name}</label>
        ) : (
          <div />
        )}

        {props.type === "textarea" ? (
          <Textarea
            className={`w-full ${props.height}  ${
              props.required ? "border border-green-500" : ""
            }`}
            id={"id" in props ? props.id : "input-" + props.name}
            size="sm"
            placeholder={
              "placeholder" in props ? props.placeholder : props.name
            }
            type={props.type}
            onChange={props.onChange}
            value={props.value}
            disabled={disabled}
            rows={props.rows}
            onBlur={props.onBlur}
          />
        ) : (
          <Input
            className={`w-full ${
              props.required ? "border border-green-500" : ""
            }`}
            id={"id" in props ? props.id : "input-" + props.name}
            size="sm"
            placeholder={
              "placeholder" in props ? props.placeholder : props.name
            }
            type={props.type}
            onChange={props.onChange}
            value={props.value}
            disabled={disabled}
            step={step}
            onBlur={props.onBlur}
          />
        )}
      </Col>
    );
  } else if (props.type === "select") {
    let required = false;
    if ("required" in props && props.required === true) {
      required = true;
    }
    let disabled = false;
    if ("disabled" in props && props.disabled === true) {
      disabled = true;
    }
    return (
      <Col colSize={props.size ? props.size : 12}>
        {props.name && props.name !== "" ? (
          <label className="label py-1 font-bold">{props.name}</label>
        ) : (
          <div />
        )}

        <Select
          className={`w-full ${
            props.required ? "border border-green-500" : ""
          } `}
          placeholder={"placeholder" in props ? props.placeholder : props.name}
          id={"id" in props ? props.id : "input-" + props.name}
          type="select"
          size="sm"
          value={props.value}
          disabled={props.disable}
          onChange={props.onChange}
        >
          {props.options.map((item, key) => (
            <Select.Option value={item.value} key={key}>
              {item.text}
            </Select.Option>
          ))}
        </Select>
      </Col>
    );
  } else if (props.type === "selectMultiple") {
    let required = false;
    if ("required" in props && props.required === true) {
      required = true;
    }
    let disabled = false;
    if ("disabled" in props && props.disabled === true) {
      disabled = true;
    }
    return (
      <Col colSize={props.size ? props.size : 12}>
        {props.name && props.name !== "" ? (
          <label className="label py-1 font-bold">{props.name}</label>
        ) : (
          <div />
        )}

        <Select
          className={`w-full ${
            props.required ? "border border-green-500" : ""
          }`}
          placeholder={"placeholder" in props ? props.placeholder : props.name}
          id={"id" in props ? props.id : "input-" + props.name}
          style={{ height: props.height ?? 100 }}
          type="select"
          size="sm"
          value={props.value}
          disabled={props.disable}
          rows={props.rows}
          onChange={props.onChange}
          multiple
        >
          {props.options.map((item, key) => (
            <Select.Option value={item.value} key={key}>
              {item.text}
            </Select.Option>
          ))}
        </Select>
      </Col>
    );
  } else if (props.type === "checkbox") {
    let step = 1;
    if ("step" in props) {
      step = props.step;
    }

    let disabled = false;
    if ("disabled" in props && props.disabled === true) {
      disabled = true;
    }

    let required = false;
    if ("required" in props && props.required === true) {
      required = true;
    }

    return (
      <Col colSize={1} style={twMerge(`flex items-center`, props.className)}>
        {props.name && props.name !== "" ? (
          <label className="label py-1 font-bold">{props.name}</label>
        ) : (
          <div />
        )}

        <input
          checked={props.value}
          className={`checkbox-success checkbox h-6 w-6 ${
            props.required ? "border border-green-500" : ""
          }`}
          id={"id" in props ? props.id : "input-" + props.name}
          size="sm"
          placeholder={"placeholder" in props ? props.placeholder : props.name}
          type={props.type}
          onChange={props.onChange}
          value={props.value}
          disabled={disabled}
          step={step}
          onBlur={props.onBlur}
        />
      </Col>
    );
  }
  return <div>SimpleForm</div>;
}

export default SimpleForm;
