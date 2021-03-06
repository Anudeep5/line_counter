import React from "react";
import "./Count.css";

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { minute_1: 0, minute_2: "", second_1: 0, second_2: "" };
    this.minuteInput = React.createRef();
  }

  handleMinuteChange1 = (event) => {
    this.setState({
      minute_1: event.target.value,
    });
  };

  handleMinuteChange2 = (event) => {
    this.setState({
      minute_2: event.target.value,
    });
  };

  handleSecondChange1 = (event) => {
    this.setState({
      second_1: event.target.value,
    });
  };

  handleSecondChange2 = (event) => {
    this.setState({
      second_2: event.target.value,
    });
  };

  Add = () => {
    this.setState({
      minute_1: parseInt(this.state.minute_1) + parseInt(this.state.minute_2),
      second_1: parseInt(this.state.second_1) + parseInt(this.state.second_2),
    });
    console.log("-----");
    console.log("Minute - ", this.state.minute_2);
    console.log("Second - ", this.state.second_2);
  };

  Refresh = () => {
    window.location.reload(false);
  };

  componentDidMount() {
    this.minuteInput.current.focus();
    document.title = "Line Counter"
  }

  render() {
    const { minute_1, minute_2, second_1, second_2 } = this.state;
    return (
      <div>
        <div className="heading">
          <h1>
            <b>Line Counter</b>
          </h1>
        </div>
        <div className="leftPlane">
          <div className="leftPanel">
            <div>
              <input
                className="minuteBox"
                value={minute_2}
                onChange={this.handleMinuteChange2}
                ref={this.minuteInput}
              />
              <b>:</b>
              <input
                className="secondBox"
                value={second_2}
                onChange={this.handleSecondChange2}
              />
            </div>
            <div>
              <button className="add" type="submit" onClick={this.Add}>
                Add
              </button>
              <button className="reset" onClick={this.Refresh}>
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="rightPlane">
          <div className="rightPanel">
            <h2>Hours - {parseInt((minute_1 * 60 + second_1) / 60 / 60)}</h2>
            <h2>Minutes - {parseInt((minute_1 * 60 + second_1) / 60)}</h2>
            <h2>Seconds - {minute_1 * 60 + second_1}</h2>
            <h2>
              Total Time - {parseInt(minute_1 / 60)} :{" "}
              {parseInt(((minute_1 * 60 + second_1) / 60) % 60)} :{" "}
              {(minute_1 * 60 + second_1) % 60}
            </h2>
            <h2>
              Total Lines -{" "}
              {Number(((minute_1 * 60 + second_1) / 60) * 8).toFixed(2)}
            </h2>
          </div>
        </div>
        <div className="footer">By Anudeep Reddy Raavi</div>
      </div>
    );
  }
}

export default Count;
