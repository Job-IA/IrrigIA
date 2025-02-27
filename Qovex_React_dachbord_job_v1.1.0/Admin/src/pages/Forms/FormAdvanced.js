import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
import Switch from "react-switch";
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import Select from "react-select";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Offsymbol = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2,
      }}
    >
      {" "}
      No
    </div>
  );
};

const OnSymbol = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2,
      }}
    >
      {" "}
      Yes
    </div>
  );
};

const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ],
  },
];

const FormAdvanced = () => {
  const [sq1, setsq1] = useState(true);
  const [sq2, setsq2] = useState(true);
  const [sq3, setsq3] = useState(true);



  const [disbadge, setdisbadge] = useState(true);
  const [disthresh, setdisthresh] = useState(false);
  const [placementbadge, setplacementbadge] = useState(false);
  const [textcount, settextcount] = useState(0);
  const [optioncount, setoptioncount] = useState(0);
  const [placementcount, setplacementcount] = useState(0);
  const [threshhold, setthreshhold] = useState(0);
  const [threshholdcount, setthreshholdcount] = useState(0);
  const [disDefault, setdisDefault] = useState(0);
  const [textareabadge, settextareabadge] = useState(0);

  const [switch1, setswitch1] = useState(true);
  const [switch2, setswitch2] = useState(true);
  const [switch3, setswitch3] = useState(true);
  const [switch4, setswitch4] = useState(true);
  const [switch5, setswitch5] = useState(true);
  const [switch6, setswitch6] = useState(true);
  const [switch7, setswitch7] = useState(true);
  const [switch8, setswitch8] = useState(true);
  const [switch9, setswitch9] = useState(true);

  const [data_attr, setdata_attr] = useState(56);
  const [postfix, setpostfix] = useState(20);
  const [empty_val, setempty_val] = useState(0);
  const [not_attr, setnot_attr] = useState(15);
  const [explicit_val, setexplicit_val] = useState(33);

  const max_len = 25;

  const [selectedGroup, setselectedGroup] = useState(null);
  const [selectedMulti, setselectedMulti] = useState(null);
  


  function threshholdchange(event) {
    const count = event.target.value.length;
    const remain_val = max_len - 20;

    if (remain_val <= count) {
      setdisthresh(true);
    } else {
      setdisthresh(false);
    }
    setthreshholdcount(event.target.value.length);
  }

  function threshholdDefault(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setdisDefault(true);
    } else {
      setdisDefault(false);
    }
    setthreshhold(event.target.value.length);
  }

  function optionchange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setdisbadge(true);
    } else {
      setdisbadge(false);
    }
    setoptioncount(event.target.value.length);
  }

  function placementchange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      setplacementbadge(true);
    } else {
      setplacementbadge(false);
    }
    setplacementcount(event.target.value.length);
  }

  function textareachange(event) {
    const count = event.target.value.length;
    if (count > 0) {
      settextareabadge(true);
    } else {
      settextareabadge(false);
    }
    settextcount(event.target.value.length);
  }

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }


  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Form" breadcrumbItem="Form Advanced" />

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="card-title">Select2</h4>
                <p className="card-title-desc">
                  A mobile and touch friendly input spinner component for
                  Bootstrap
                </p>

                <form>
                  <div className="mb-3">
                    <Label>Single Select</Label>
                    <Select
                      value={selectedGroup}
                      onChange={() => {
                        handleSelectGroup();
                      }}
                      options={optionGroup}
                      classNamePrefix="select2-selection"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="control-label">Multiple Select</label>
                    <Select
                      value={selectedMulti}
                      isMulti={true}
                      onChange={() => {
                        handleMulti();
                      }}
                      options={optionGroup}
                      classNamePrefix="select2-selection"
                    />
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="card-title">Css Switch</h4>
                <p className="card-title-desc">
                  Here are a few types of switches.{" "}
                </p>

                <div>
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#626ed4"
                    className="form-label"
                    onChange={() => {
                      setswitch1(!switch1);
                    }}
                    checked={switch1}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#a2a2a2"
                    className="form-label"
                    onChange={() => {
                      setswitch2(!switch2);
                    }}
                    checked={switch2}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#02a499"
                    className="form-label"
                    onChange={() => {
                      setswitch3(!switch3);
                    }}
                    checked={switch3}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#626ed4"
                    className="form-label"
                    onChange={() => {
                      setswitch4(!switch4);
                    }}
                    checked={switch4}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#02a499"
                    className="form-label"
                    onChange={() => {
                      setswitch5(!switch5);
                    }}
                    checked={switch5}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#38a4f8"
                    className="form-label"
                    onChange={() => {
                      setswitch6(!switch6);
                    }}
                    checked={switch6}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#f8b425"
                    className="form-label"
                    onChange={() => {
                      setswitch7(!switch7);
                    }}
                    checked={switch7}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#ec4561"
                    className="form-label"
                    onChange={() => {
                      setswitch8(!switch8);
                    }}
                    checked={switch8}
                  />
                  &nbsp;
                  <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    onColor="#2a3142"
                    className="form-label"
                    onChange={() => {
                      setswitch9(!switch9);
                    }}
                    checked={switch9}
                  />
                </div>

                <h5 className="mt-4 font-size-14 mb-3">Square switch</h5>
                <div className="d-flex">
                  <div className="square-switch">
                    <input
                      type="checkbox"
                      id="square-switch1"
                      switch="none"
                      checked={sq1}
                      onChange={() => {
                        setsq1(!sq1);
                      }}
                    />
                    <label
                      htmlFor="square-switch1"
                      data-on-label="On"
                      data-off-label="Off"
                    />
                  </div>
                  <div className="square-switch">
                    <input
                      type="checkbox"
                      id="square-switch2"
                      switch="info"
                      checked={sq2}
                      onChange={() => {
                        setsq2(!sq2);
                      }}
                    />
                    <label
                      htmlFor="square-switch2"
                      data-on-label="Yes"
                      data-off-label="No"
                    />
                  </div>
                  <div className="square-switch">
                    <input
                      type="checkbox"
                      id="square-switch3"
                      switch="bool"
                      checked={sq3}
                      onChange={() => {
                        setsq3(!sq3);
                      }}
                    />
                    <label
                      htmlFor="square-switch3"
                      data-on-label="Yes"
                      data-off-label="No"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <h4 className="card-title">Datepicker</h4>
                <p className="card-title-desc">
                  Examples of twitter bootstrap datepicker.
                </p>

                <Form>
                  <Row>
                    <Col lg={6}>
                      <FormGroup className="mb-4">
                        <Label>Default Functionality</Label>
                        <InputGroup>
                          <Flatpickr
                            className="form-control d-block"
                            placeholder="dd M,yyyy"
                            options={{
                              altInput: true,
                              altFormat: "F j, Y",
                              dateFormat: "Y-m-d",
                            }}
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="form-group mb-4">
                        <Label>Auto Close</Label>
                        <InputGroup>
                          <Flatpickr
                            className="form-control d-block"
                            placeholder="dd M,yyyy"
                            options={{
                              altInput: true,
                              altFormat: "F j, Y",
                              dateFormat: "Y-m-d",
                            }}
                          />
                        </InputGroup>
                      </div>

                      <div className="form-group mb-4">
                        <label>Multiple Date</label>
                        <div className="input-group">
                          <Flatpickr
                            className="form-control d-block"
                            placeholder="dd M,yyyy"
                            options={{
                              altInput: true,
                              altFormat: "F j, Y",
                              mode: "multiple",
                              dateFormat: "Y-m-d",
                            }}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <FormGroup className="mb-4">
                        <Label>Date Range</Label>
                        <InputGroup>
                          <Flatpickr
                            className="form-control d-block"
                            placeholder="dd M,yyyy"
                            options={{
                              mode: "range",
                              dateFormat: "Y-m-d",
                            }}
                          />
                        </InputGroup>
                      </FormGroup>

                      <div className="form-group mb-0">
                        <label>Inline Datepicker</label>
                        <Flatpickr
                          className="form-control d-block"
                          placeholder="dd M,yyyy"
                          options={{
                            inline: true,
                            altInput: true,
                            altFormat: "F j, Y",
                            dateFormat: "Y-m-d",
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="card-title">Bootstrap MaxLength</h4>
                <p className="card-title-desc">
                  This plugin integrates by default with Twitter bootstrap using
                  badges to display the maximum lenght of the field where the
                  user is inserting text.{" "}
                </p>
                <Label>Default usage</Label>
                <p className="text-muted m-b-15">
                  The badge will show up by default when the remaining chars are
                  10 or less:
                </p>
                <Input
                  type="text"
                  maxLength="25"
                  name="defaultconfig"
                  onChange={(e) => {
                    threshholdDefault(e);
                  }}
                  id="defaultconfig"
                />
                {disDefault ? (
                  <span className="badgecount badge badge-success">
                    {threshhold} / 25{" "}
                  </span>
                ) : null}

                <div className="mt-3">
                  <Label>Threshold value</Label>
                  <p className="text-muted m-b-15">
                    Do you want the badge to show up when there are 20 chars or
                    less? Use the <code>threshold</code> option:
                  </p>
                  <Input
                    type="text"
                    maxLength={max_len}
                    onChange={(e) => {
                      threshholdchange(e);
                    }}
                    name="thresholdconfig"
                    id="thresholdconfig"
                  />
                  {disthresh ? (
                    <span className="badgecount badge badge-success">
                      {threshholdcount} / 25{" "}
                    </span>
                  ) : null}
                </div>

                <div className="mt-3">
                  <Label>All the options</Label>
                  <p className="text-muted m-b-15">
                    Please note: if the <code>alwaysShow</code> option is
                    enabled, the <code>threshold</code> option is ignored.
                  </p>
                  <Input
                    type="text"
                    maxLength="25"
                    onChange={(e) => {
                      optionchange(e);
                    }}
                    name="alloptions"
                    id="alloptions"
                  />
                  {disbadge ? (
                    <span className="badgecount">
                      You Types{" "}
                      <span className="badge badge-success">{optioncount}</span>{" "}
                      out of <span className="badge badge-success">25</span>{" "}
                      chars available
                    </span>
                  ) : null}
                </div>

                <div className="mt-3">
                  <Label>Position</Label>
                  <p className="text-muted m-b-15">
                    All you need to do is specify the <code>placement</code>{" "}
                    option, with one of those strings. If none is specified, the
                    positioning will be defauted to 'bottom'.
                  </p>
                  <Input
                    type="text"
                    maxLength="25"
                    onChange={(e) => {
                      placementchange(e);
                    }}
                    name="placement"
                    id="placement"
                  />
                  {placementbadge ? (
                    <span
                      style={{ float: "right" }}
                      className="badgecount badge badge-success"
                    >
                      {placementcount} / 25{" "}
                    </span>
                  ) : null}
                </div>

                <div className="mt-3">
                  <Label>textareas</Label>
                  <p className="text-muted m-b-15">
                    Bootstrap maxlength supports textarea as well as inputs.
                    Even on old IE.
                  </p>
                  <Input
                    type="textarea"
                    id="textarea"
                    onChange={(e) => {
                      textareachange(e);
                    }}
                    maxLength="225"
                    rows="3"
                    placeholder="This textarea has a limit of 225 chars."
                  />
                  {textareabadge ? (
                    <span className="badgecount badge badge-success">
                      {" "}
                      {textcount} / 225{" "}
                    </span>
                  ) : null}
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="6">
            <Card>
              <CardBody>
                <h4 className="card-title">Bootstrap TouchSpin</h4>
                <p className="card-title-desc">
                  A mobile and touch friendly input spinner component for
                  Bootstrap
                </p>
                <Form>
                  <div className="mb-3">
                    <Label>Using data attributes</Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() => {
                          setdata_attr(data_attr - 1);
                        }}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus" />
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={data_attr}
                        placeholder="number"
                        readOnly
                      />
                      <div
                        className="input-group-append"
                        onClick={() => {
                          setdata_attr(data_attr + 1);
                        }}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-plus" />
                        </Button>
                      </div>
                    </InputGroup>
                  </div>
                  <div className="mb-3">
                    <Label className="form-label">
                      Example with postfix (large)
                    </Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() => {
                          setpostfix(postfix - 1);
                        }}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus" />
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={postfix}
                        placeholder="number"
                        readOnly
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">%</span>
                        <Button
                          type="button"
                          onClick={() => {
                            setpostfix(postfix + 1);
                          }}
                          color="primary"
                        >
                          <i className="mdi mdi-plus" />
                        </Button>
                      </div>
                    </InputGroup>
                  </div>
                  <div className="mb-3">
                    <Label>Init with empty value:</Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() => {
                          setempty_val(empty_val - 1);
                        }}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus" />
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={empty_val}
                        placeholder="number"
                        readOnly
                      />
                      <div
                        className="input-group-append"
                        onClick={() => {
                          setempty_val(empty_val + 1);
                        }}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-plus" />
                        </Button>
                      </div>
                    </InputGroup>
                  </div>
                  <div className="mb-3">
                    <Label>
                      Value attribute is not set (applying settings.initval)
                    </Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() => {
                          setnot_attr(not_attr - 1);
                        }}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus" />
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={not_attr}
                        placeholder="number"
                        readOnly
                      />
                      <div
                        className="input-group-append"
                        onClick={() => {
                          setnot_attr(not_attr + 1);
                        }}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-plus" />
                        </Button>
                      </div>
                    </InputGroup>
                  </div>
                  <FormGroup className="mb-0">
                    <Label>
                      Value is set explicitly to 33 (skipping settings.initval){" "}
                    </Label>
                    <InputGroup>
                      <div
                        className="input-group-append"
                        onClick={() => {
                          setexplicit_val(explicit_val - 1);
                        }}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-minus" />
                        </Button>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        value={explicit_val}
                        placeholder="number"
                        readOnly
                      />
                      <div
                        className="input-group-append"
                        onClick={() => {
                          setexplicit_val(explicit_val + 1);
                        }}
                      >
                        <Button type="button" color="primary">
                          <i className="mdi mdi-plus" />
                        </Button>
                      </div>
                    </InputGroup>
                  </FormGroup>
                </Form>{" "}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default FormAdvanced;
