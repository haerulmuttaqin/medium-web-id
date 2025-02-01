import {LeftSidebar} from "@atlaskit/page-layout";
import Tooltip from "@atlaskit/tooltip";
import {ButtonItem, NestableNavigationContent, NestingItem, Section, SideNavigation,} from "@atlaskit/side-navigation";
import {ExpandLeftSidebarKeyboardShortcut} from "../Layout/common";
import React, {useState} from "react";
import {mainMenu} from "@/resources/main-menu";
import {useRouter} from "next/router";
import {SideNavContentProps} from "@component/SideNav/sidenav";
import {useTranslation} from "next-i18next";
import {Box, xcss} from "@atlaskit/primitives";

let sideNavStyle = xcss({
    padding: "space.100",
    height: "100vh"
});

let loadingSideNavStyle = xcss({
    padding: "space.100",
    overflow: "hidden"
});


const SideNav = ({
                     shouldHideResizeButton = false,
                     isAdmin = false,
                     isMobile = false,
                     menuList,
                     title,
                     loading,
                     onClick
                 }: SideNavContentProps) => {
    const router = useRouter()
    const [userRole, serUserRole] = useState<string>("admin")
    const {t} = useTranslation(['common'])
    const {mock_id, pid, sid, idx} = router.query

    const pathname = router.pathname.split('/')[1]?.toLowerCase()
    const pathnameSub = router.pathname.split('/')[2]?.toLowerCase()

    const [isOpenProject, setIsOpenProject] = useState(false);
    const navigateTo = (e: any, route: string) => {
        e.preventDefault()
        if (onClick) {
            onClick()
        }
        router.push(route)
        return;
    };

    const navigateToCreateNewMock = (e: any, route: string) => {
        e.preventDefault()
        router.push(`/mocks/${route}/?pid=${pid}&sid=${sid}&idx=${idx}`)
        return;
    };

    const navigateToManageMock = (e: any) => {
        e.preventDefault()
        router.push(`/mocks/?pid=${pid}&sid=${sid}&idx=${idx}`)
        return;
    };

    const navigateToDetailMock = (e: any, mid: string, pid: string, sid: string, idx: number) => {
        e.preventDefault()
        router.push(`/mocks/${mid}?action=view&pid=${pid}&sid=${sid}&idx=${idx}`)
        return;
    }

    const checkUrl = (value: string) => {
        return value?.toLowerCase() === pathname
    }

    const checkSubUrl = (value: string) => {
        return value?.toLowerCase() === pathnameSub
    }

    const checkMockUrl = (value: string) => {
        return value?.toLowerCase() === mock_id
    }

    const currentPath = () => (router.pathname.split('/').length == 3 || router.pathname.split('/').length == 4) ? [router.pathname.split("/")[1]] : []

    const handleOnChangeNavigation = (e: any) => {
    }

    const navigateBack = () => {
        router.back()
    }

    return (
        <LeftSidebar
            id={isMobile ? "left-sidebar-mobile" : "left-sidebar"}
            skipLinkTitle="Navigation"
            isFixed={true}
            onFlyoutExpand={() => console.log('onFlyoutExpand')}
            onFlyoutCollapse={() => console.log('onFlyoutCollapse')}
            resizeGrabAreaLabel="Resize"
            resizeButtonLabel="Current"
            valueTextLabel="Width"
            shouldPersistWidth
            overrides={
                {
                    ResizeButton: {
                        render: (Component, props) => (
                            shouldHideResizeButton ? <span></span> :
                                <Tooltip
                                    content={
                                        <p>{props.isLeftSidebarCollapsed ? 'Expand' : 'Collapse'} the
                                            navigation [
                                            <br/>(left bracket)</p>
                                    }
                                    hideTooltipOnClick
                                    position="right"
                                    testId="tooltip"
                                >
                                    <Component {...props} />
                                </Tooltip>
                        ),
                    },
                }
            }
        >

            {
                <SideNavigation label="navigation" testId="side-navigation-app">
                    <Box xcss={sideNavStyle}>
                        <NestableNavigationContent initialStack={currentPath()} onChange={handleOnChangeNavigation}>
                            <Section isList>
                                {
                                    mainMenu.map((menu, i) => {
                                        const role: any = menu.accessor?.filter((it: any) => it == userRole as any)
                                        if (role?.length == 0) return null
                                        const isNestedMenu = (menu.subMenu?.length || 0) > 0
                                        if (isNestedMenu) {
                                            return (
                                                <NestingItem
                                                    id={menu.route.replace("/", "")}
                                                    key={`${i}-${menu.route}`}
                                                    title={t(menu.locale)}
                                                    isSelected={menu.route.replace("/", "") == pathname?.split("/")[0]}>
                                                    {
                                                        menu.subMenu?.map((subMenu, subI) => {
                                                            const role: any = subMenu.accessor?.filter((it: any) => it == userRole as any)
                                                            if (role?.length == 0) return null
                                                            return (
                                                                <Section key={subI} title={t(subMenu.locale)}
                                                                         isList>
                                                                    {
                                                                        subMenu.subMenu?.map((subChildMenu, subChildI) => {
                                                                            const role: any = subChildMenu.accessor?.filter((it: any) => it == userRole as any)
                                                                            if (role?.length == 0) return null
                                                                            return (
                                                                                <ButtonItem
                                                                                    id={`${subChildMenu.route}-${subChildMenu.route}`}
                                                                                    key={`${subI}-${subChildMenu.route}`}
                                                                                    isSelected={checkSubUrl(subChildMenu.route?.split('/')[1] as string)}
                                                                                    onClick={e => navigateTo(e, `${menu.route}${subChildMenu.route}`)}>
                                                                                    {t(subChildMenu.locale)}
                                                                                </ButtonItem>
                                                                            )
                                                                        })
                                                                    }
                                                                </Section>
                                                            )
                                                        })
                                                    }
                                                </NestingItem>
                                            )
                                        }
                                        return (
                                            <ButtonItem
                                                id={menu.route.replace("/", "")}
                                                key={`${i}-${menu.route}`}
                                                isSelected={checkUrl(menu.route?.split('/')[1] as string)}
                                                onClick={e => navigateTo(e, menu.route)}>
                                                {menu.title}
                                            </ButtonItem>
                                        )
                                    })
                                }
                            </Section>
                        </NestableNavigationContent>
                    </Box>
                </SideNavigation>
            }
            <ExpandLeftSidebarKeyboardShortcut/>
        </LeftSidebar>
    )
}
export default SideNav