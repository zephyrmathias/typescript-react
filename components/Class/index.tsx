import React from 'react';
import styles from './styles.module.css';

// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#types-or-interfaces
// interfaces are different from types in TypeScript, but they can be used for very similar things as far as common React uses cases are concerned. Here's a helpful rule of thumb:
// always use interface for public API's definition when authoring a library or 3rd party ambient type definitions.
// consider using type for your React Component Props and State, because it is more constrained.
// Types are useful for union types (e.g. type MyType = TypeA | TypeB) whereas Interfaces are better for declaring dictionary shapes and then implementing or extending them.

// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#basic-prop-types-examples

type Props = {
  onClick?: () => void; // function that does not take or return anything
  // defaultName?: string; // no need to specify it again if add typeof defaultProps / if add it optional it will ask you to add defaultName?.toUpperCase() below
} & typeof defaultProps;

const defaultProps = {
  defaultName: 'defaultProps for name',
};

class ClassElem extends React.Component<Props> {
  static defaultProps = defaultProps;

  state = {
    name: 'name',
  };

  onChangeName = (): void => {
    this.setState({ name: 'new Name' });
  };

  render(): React.ReactNode {
    const { name } = this.state;
    const { onClick, defaultName } = this.props;

    return (
      <div>
        Class Elem Example:
        <div className={styles.classEx}>
          <h4>Class method (setState) with Types</h4>
          <div>Name: {name}</div>
          <button type="button" onClick={this.onChangeName}>
            Click to change name
          </button>
        </div>
        <div className={styles.classEx}>
          <h4>onClick as props</h4>
          <button type="button" onClick={onClick}>
            onClick Props
          </button>
        </div>
        <div className={styles.classEx}>
          <div>{defaultName.toUpperCase()}</div>
        </div>
      </div>
    );
  }
}

export default ClassElem;
