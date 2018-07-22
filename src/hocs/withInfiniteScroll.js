import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {Loading} from '../components/Loading';

const withInfiniteScroll = getInfiniteScrollProps => Wrapper => props => {
    const infiniteScrollProps = getInfiniteScrollProps(props);

    return (
        <InfiniteScroll
            pageStart={1}
            loader={<Loading key={0}/>}
            {...infiniteScrollProps}
        >
            <Wrapper {...props} />
        </InfiniteScroll>
    );
};

export {withInfiniteScroll};
