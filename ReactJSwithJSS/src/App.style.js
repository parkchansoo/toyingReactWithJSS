import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
  App: {},
  boardRow: {
    display: "flex",
  }
};

const {classes} = jss.createStyleSheet(styles).attach();
export default classes;