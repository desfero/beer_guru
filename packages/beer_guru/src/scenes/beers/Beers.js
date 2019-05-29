import {
  branch,
  compose,
  lifecycle,
  renderComponent,
  withProps,
} from "recompose";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { BeersLayout } from "./BeersLayout";
import { getBeers } from "./actions";
import { Loader } from "@beer/layout";
import { withSceneTitle } from "../../hocs/withSceneTitle";
import { withInfiniteScroll } from "../../hocs/withInfiniteScroll";
import { beersAsArraySelector } from "./selectors";
import { cardType } from "@beer/layout";
import { hasAllBeersSelector } from "./reducer";

const mapStateToProps = createStructuredSelector({
  beers: beersAsArraySelector,
  hasAllBeers: hasAllBeersSelector,
});

const mapDispatchToProps = { getBeers };

const Beers = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.getBeers(1);
    },
  }),
  branch(props => !props.beers, renderComponent(Loader)),
  withSceneTitle(() => "Beers list"),
  withInfiniteScroll(props => ({
    loadMore: props.getBeers,
    hasMore: !props.hasAllBeers,
  })),
  withProps({
    cardType: cardType.default,
    showBeerTagline: true,
  }),
)(BeersLayout);

export { Beers };
