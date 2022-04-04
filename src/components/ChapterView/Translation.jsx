import React, { Component, createRef } from "react";
import { FormSelect } from "react-bootstrap";
import withDataFetch from "./withDataFetch";

class Translation extends Component {
  translationData;
  constructor(props) {
    super(props);

    this.state = {};
    this.liRefs = new Array(this.props.numberOfVerses).fill(null).map((el) => createRef());
  }

  componentDidUpdate(prevProps, prevState) {
    this.liRefs.forEach(
      (ref, i) => (ref.current.innerHTML = this.translationData[i]?.text)
    );
  }

  render() {
    console.log("liref", this.liRefs)
    const { translations, id: translationId, data, handleChange } = this.props;
    this.translationData = data.translations ?? [];
    return (
      <div>
        <details>
          <summary>
            <div className="d-inline-flex justify-content-between">
              <span>Translation</span>
              <FormSelect
                value={translationId}
                onChange={handleChange}
                size="sm w-50"
              >
                {translations.map(({ id, name, language_name }) => (
                  <option value={id}>
                    {name} ({language_name})
                  </option>
                ))}
              </FormSelect>
            </div>
          </summary>
          <ol>
            {this.liRefs.map((ref) => (
              <li ref={ref}></li>
            ))}
          </ol>
        </details>
      </div>
    );
  }
}

export default withDataFetch(Translation, 131, {
  url: "https://api.quran.com/api/v4/quran/translations",
  query: "chapter_number",
});
