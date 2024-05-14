import React from "react";

const InputAndLabel = ({ type, id, value, labelTitle, onChange }) => {
  const handleChange = (event) => {
    if (event.target.checked) {
      onChange(value);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type={type}
        className="form-check-input"
        id={id}
        value={value}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {labelTitle}
      </label>
    </div>
  );
};

export const FilterProject = ({ onChangeFilters }) => {
  const handleCheckboxChange = (checkboxValue) => {
    console.log(checkboxValue);
  };

  return (
    <div className="container">
      <h1>Filtrar</h1>
      <div className="row">
        {/* Coluna 1 */}
        <div className="col-md-6">
          <div className="form-check colLanguages">
            <div className="col-languages">
              <InputAndLabel
                type={"checkbox"}
                id={"java"}
                value={"java"}
                labelTitle={"Java"}
                onChange={handleCheckboxChange}
              />
              <InputAndLabel
                type={"checkbox"}
                id={"python"}
                value={"python"}
                labelTitle={"Python"}
                onChange={handleCheckboxChange}
              />
              <InputAndLabel
                type={"checkbox"}
                id={"javascript"}
                value={"javascript"}
                labelTitle={"Javascript"}
                onChange={handleCheckboxChange}
              />
              <InputAndLabel
                type={"checkbox"}
                id={"springboot"}
                value={"springboot"}
                labelTitle={"SpringBoot"}
                onChange={handleCheckboxChange}
              />
              <InputAndLabel
                type={"checkbox"}
                id={"reactjs"}
                value={"reactjs"}
                labelTitle={"ReactJs"}
                onChange={handleCheckboxChange}
              />
              <InputAndLabel
                type={"checkbox"}
                id={"nodejs"}
                value={"nodejs"}
                labelTitle={"NodeJs"}
                onChange={handleCheckboxChange}
              />
              <InputAndLabel
                type={"checkbox"}
                id={"sql"}
                value={"sql"}
                labelTitle={"SQL"}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
        </div>
        {/* Coluna 2 */}
        <div className="col-md-6 colFinale">
          {/* Checkbox para tipos de projeto */}
          <InputAndLabel
            type={"checkbox"}
            id={"backend"}
            value={"backend"}
            labelTitle={"Back End"}
            onChange={handleCheckboxChange}
          />
          <InputAndLabel
            type={"checkbox"}
            id={"frontend"}
            value={"frontend"}
            labelTitle={"Front End"}
            onChange={handleCheckboxChange}
          />

          {/* Desenvolvimento web, Api rest, Api rest Full, Desenvolvimento de Software */}
          <InputAndLabel
            type={"checkbox"}
            id={"desenvolvimentoweb"}
            value={"desenvolvimentoweb"}
            labelTitle={"Desenvolvimento Web"}
            customLabelClass="smaller-font"
            onChange={handleCheckboxChange}
          />
          <InputAndLabel
            type={"checkbox"}
            id={"desenvolvimentodesoftware"}
            value={"desenvolvimentodesoftware"}
            labelTitle={"Desenvolvimento de Software"}
            customLabelClass="smaller-font"
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
    </div>
  );
};
