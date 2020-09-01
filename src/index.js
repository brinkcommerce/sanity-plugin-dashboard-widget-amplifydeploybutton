import React from "react";
import PropTypes from "prop-types";
import DefaultButton from "part:@sanity/components/buttons/default";

import styles from "./AmplifyDeployButton.css";

class AmplifyDeployButton extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    buttonText: PropTypes.string,
    webhookUrl: PropTypes.string,
  };

  static defaultProps = {
    imageWidth: 600,
    title: "Deploy content changes",
    buttonText: "Deploy",
    deployText: "Deploying. You will receive status email.",
    deployErrorText: "There was an error deploying content."
  };

  state = {
    error: false,
    building: false,
  };
  postAmplifyBuild = () => {
    this.setState({ building: true });
    fetch(this.props.webhookUrl, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
    }).catch((error) => {
      this.setState({ error: true });
      console.log(error);
    });
  };

  render() {
    const { title, buttonText } = this.props;
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </header>
        <div className={styles.content}>
          <DefaultButton
            disabled={this.state.building}
            inverted
            onClick={this.postAmplifyBuild}
          >
            {buttonText}
          </DefaultButton>
          {this.state.building && (
            <div style={{ color: "green" }} className={styles.footer}>{this.props.deployText}</div>
          )}
          {this.state.error && (
            <div style={{ color: "red" }} className={styles.footer}>
              {this.props.deployErrorText}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default {
  name: "AmplifyDeployButton",
  component: AmplifyDeployButton,
};
