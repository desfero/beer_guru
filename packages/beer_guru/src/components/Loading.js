import {withSceneTitle} from '../hocs/withSceneTitle';

const LoadingLayout = () => 'Loading';

const Loading = withSceneTitle(props => props.title)(LoadingLayout);

export { Loading };
