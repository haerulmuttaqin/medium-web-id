import type {NextPage} from "next";
import React, {useCallback, useEffect, useState} from "react";
import dynamic from "next/dynamic";
import Button from "@atlaskit/button/new";
import {useRouter} from "next/router";
import {showFlag} from "@store/actions/show-flag";
import {useDispatch} from "react-redux";
import Modal, {ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalTransition,} from "@atlaskit/modal-dialog";
import ContentWrapper from "@component/Layout/common/content-wrapper";
import Auth from "@protected/auth";
import {useTranslation} from "next-i18next";
import {useFetchBookmarks} from "@pages/bookmarks/data/remote";
import Content from "@pages/bookmarks/content";
import {useUserData} from "@utils/hooks";
import "@/styles/landing.module.css"

const Layout = dynamic(
    () => import("@component/Layout"),
    {ssr: false}
)

const BookmarkPage: NextPage = () => {
    const {t} = useTranslation(["common"])
    const dispatch = useDispatch();
    const router = useRouter()
    const [shouldBeDelete, setShouldBeDelete] = useState<BookmarkProps | undefined>()
    const [isOpenAlertDelete, setIsOpenAlertDelete] = useState(false);
    const openModalDelete = useCallback(() => setIsOpenAlertDelete(true), []);
    const closeModalDelete = useCallback(() => setIsOpenAlertDelete(false), []);
    const user = useUserData()

    const {
        data: dataBookmarks,
        isLoading: isLoadingBookmarks,
        mutate: mutateBookmarks,
        error: errorBookmarks
    } = useFetchBookmarks(user.project)

    const doDelete = async (params: BookmarkProps) => {
        closeModalDelete()
        // await deleteProject(params.dns as string, params.sid as string, params.idx as any)
        //     .then((res: any) => {
        //         if (!res.success) {
        //             dispatch(
        //                 showFlag({
        //                     success: false,
        //                     title: "Delete Failed, Please try again.",
        //                     message: res.message
        //                 }) as any
        //             );
        //         } else {
        //             setShouldBeDelete(undefined)
        //             mutateProject()
        //             dispatch(
        //                 showFlag({
        //                     success: true,
        //                     title: "Successfully Deleted.",
        //                     message: "The project has been successfully deleted!",
        //                     goBack: false
        //                 }) as any
        //             )
        //         }
        //     })
        //     .catch((err: any) => {
        //         dispatch(
        //             showFlag({
        //                 success: false,
        //                 title: "Delete Failed, Please try again.",
        //                 message: err.message
        //             }) as any
        //         );
        //     })
    }

    const handleOnShow = (params: BookmarkProps) => {
        // router.push(`/bookmarks?id=${project_id}&sid=${sid}&idx=${idx}`)
    }

    const handleOpenModalDelete = (params: BookmarkProps) => {
        setShouldBeDelete(params)
        openModalDelete()
    }

    const handleOnDelete = () => {
        doDelete(shouldBeDelete as any)
    }

    useEffect(() => {
        if ((dataBookmarks == undefined) && errorBookmarks) {
            dispatch(
                showFlag({
                    success: false,
                    title: "Failed While Loading Bookmark Data.",
                    message: "An error occurred!",
                }) as any
            )
        }
    }, [])


    return (
        <Layout
            title="Bookmarked Articles">
            <ContentWrapper>
                <Content bookmarks={dataBookmarks} loading={isLoadingBookmarks} onItemClick={handleOnShow}/>
                <br/>
            </ContentWrapper>

            <ModalTransition>
                {isOpenAlertDelete && (
                    <Modal onClose={closeModalDelete}>
                        <ModalHeader>
                            <ModalTitle appearance="danger">
                                You’re about to delete this data
                            </ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <p>
                                Before you delete it permanently, there’s some things you should
                                know:
                            </p>
                            <ul>
                                <li>The data will be removed from your account</li>
                                <li>Cannot be restore the project</li>
                            </ul>
                        </ModalBody>
                        <ModalFooter>
                            <Button appearance="subtle" onClick={closeModalDelete}>Cancel</Button>
                            <Button appearance="danger" onClick={() => handleOnDelete()}>
                                Delete
                            </Button>
                        </ModalFooter>
                    </Modal>
                )}
            </ModalTransition>

        </Layout>
    );
};

export default Auth(BookmarkPage);