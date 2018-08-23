import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {Loader} from '@beer/layout';

const withInfiniteScroll = getInfiniteScrollProps => Wrapper => props => {
    const infiniteScrollProps = getInfiniteScrollProps(props);

    return (
        <InfiniteScroll
            pageStart={1}
            loader={<Loader key={0}/>}
            {...infiniteScrollProps}
        >
            <Wrapper {...props} />
        </InfiniteScroll>
    );
};

export {withInfiniteScroll};
