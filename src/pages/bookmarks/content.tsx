import React, {FC} from "react";
import SpinnerLoading from "@component/Spinner";
import EmptyState from "@atlaskit/empty-state";
import Grid, {GridItem} from "@atlaskit/grid";
import {BookmarkContentProps} from "@pages/bookmarks/data/props";
import CardBookmark from "@component/CardBookmark";

const Content: FC<BookmarkContentProps> = (props) => {
    const {bookmarks, loading, onItemClick, onItemDelete} = props

    return (
        <>
            {
                loading ?
                    <SpinnerLoading size={"large"}/>
                    :
                    !bookmarks || bookmarks?.length == 0 ?
                        <EmptyState
                            header="Empty Bookmark Data"
                            description="Make sure the region exists in this site. If it does, ask a project admin for permission to see the data."
                            headingLevel={3}
                            imageUrl={"/assets/images/empty_card.svg"}
                        />
                        :
                        <Grid hasInlinePadding>
                            {
                                bookmarks?.map((item, i) =>
                                    (
                                        <GridItem span={{sm: 6, md: 4, lg: 4}} key={`${item.bid}-${i}`}>
                                            <CardBookmark
                                                data={item}
                                                onItemClick={() => onItemClick(item)}
                                                onItemDelete={() => onItemDelete(item)}
                                            />
                                        </GridItem>
                                    )
                                )
                            }
                        </Grid>
            }
        </>
    )
}

export default Content