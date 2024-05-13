import React from "react";

const InputAndLabel = ({ type, id, value, labelTitle, onChange }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input type={type} className="form-check-input" id={id} value={value} onChange={onChange} />
      <label className="form-check-label" htmlFor={id}>
        {labelTitle}
      </label>
    </div>
  );
};

export const FilterProject = ({filter}) => {
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
              />
              <InputAndLabel
                type={"checkbox"}
                id={"python"}
                value={"python"}
                labelTitle={"Python"}
              />
              <InputAndLabel
                type={"checkbox"}
                id={"javascript"}
                value={"javascript"}
                labelTitle={"Javascript"}
              />
              <InputAndLabel
                type={"checkbox"}
                id={"springboot"}
                value={"springboot"}
                labelTitle={"SpringBoot"}
              />
              <InputAndLabel
                type={"checkbox"}
                id={"reactjs"}
                value={"reactjs"}
                labelTitle={"ReactJs"}
              />
              <InputAndLabel
                type={"checkbox"}
                id={"nodejs"}
                value={"nodejs"}
                labelTitle={"NodeJs"}
              />
              <InputAndLabel
                type={"checkbox"}
                id={"sql"}
                value={"sql"}
                labelTitle={"SQL"}
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
          />
          <InputAndLabel
            type={"checkbox"}
            id={"frontend"}
            value={"frontend"}
            labelTitle={"Front End"}
          />

          {/* Desenvolvimento web, Api rest, Api rest Full, Desenvolvimento de Software */}
          <InputAndLabel
            type={"checkbox"}
            id={"desenvolvimentoweb"}
            value={"desenvolvimentoweb"}
            labelTitle={"Desenvolvimento Web"}
            customLabelClass="smaller-font"
          />
          <InputAndLabel
            type={"checkbox"}
            id={"desenvolvimentodesoftware"}
            value={"desenvolvimentodesoftware"}
            labelTitle={"Desenvolvimento de Software"}
            customLabelClass="smaller-font"
          />
        </div>
      </div>
    </div>
  );
};
