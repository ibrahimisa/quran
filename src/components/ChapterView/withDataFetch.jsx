import React, { Component } from "react";
import axios from "axios";

function withDataFetch(WrappedComponent, defaultId, { url, query }) {
  return class WithDataFetch extends Component {
    constructor(props) {
      super(props);

      this.state = {
        id: defaultId,
        data: {},
      };
    }

    componentDidMount() {
      this.fetchData().then((data) => {
        this.setState({ data });
      });
    }

    fetchData = async () => {
      const response = await axios.get(
        `${url}/${this.state.id}${query ? "?" + query + "=" : "/"}${
          this.props.chapterId
        }`
      );
      return response.data;
    };

    handleChange = (e) => {
      this.setState({ id: e.target.value }, ()=>{
        this.fetchData().then((data) => this.setState({ data }));
      } );
    };

    render() {
    const { chapterId, ...props } = this.props
    const { id, data } = this.state
      return <WrappedComponent {...props} id={id} data={data} handleChange={this.handleChange} />;
    }
  };
}

export default withDataFetch;
