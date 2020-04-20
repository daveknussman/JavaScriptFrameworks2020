/**
 * You will be creating a container for the Counter component.
 * A container connects a component to the Redux store.
 * @see https://www.reactnative.guide/9-redux/9.2-presentational-vs-containers.html
 */

/**
 * Import something form Redux here
 */
<<<<<<< HEAD
import { connect } from "react-redux";

import Counter from "./Counter";
/**
 * Import the actions that you need
 */
import { increaseCount } from "../../actions";
import { decreaseCount } from "../../actions";
/**
 * Complete this function. You may need to pass in arguements
 */
function mapStateToProps(state) {
    return {
        count: state.count
      };
}
=======
import Counter from "./Counter";

/**
 * Import the actions that you need
 */

/**
 * Complete this function. You may need to pass in arguements
 */
function mapStateToProps() {}
>>>>>>> 40892a105b1f14e293b4ffba867e2c03f2f69716

/**
 * Complete this function. You may need to pass in arguements
 */
<<<<<<< HEAD
function mapDispatchToProps(dispatch) {
    // console.log("dispatch", dispatch);
    return {
        increaseCount: () => dispatch(increaseCount()), 
        decreaseCount: () => dispatch(decreaseCount())
      };
}
=======
function mapDispatchToProps() {}
>>>>>>> 40892a105b1f14e293b4ffba867e2c03f2f69716

/**
 * Refactor this so that you are connecting the Counter to the Redux store.
 */
<<<<<<< HEAD
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter);
=======
export default Counter;
>>>>>>> 40892a105b1f14e293b4ffba867e2c03f2f69716
