
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'CommentForm': typeof import("../components/CommentForm.vue")['default']
    'FollowList': typeof import("../components/FollowList.vue")['default']
    'LoginForm': typeof import("../components/LoginForm.vue")['default']
    'PostCard': typeof import("../components/PostCard.vue")['default']
    'PostForm': typeof import("../components/PostForm.vue")['default']
    'ProseA': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']
    'ProseBlockquote': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
    'ProseCode': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']
    'ProseEm': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
    'ProseH1': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
    'ProseH2': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
    'ProseH3': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
    'ProseH4': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
    'ProseH5': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
    'ProseH6': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
    'ProseHr': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
    'ProseImg': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
    'ProseLi': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
    'ProseOl': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
    'ProseP': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
    'ProsePre': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']
    'ProseScript': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
    'ProseStrong': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
    'ProseTable': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']
    'ProseTbody': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
    'ProseTd': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
    'ProseTh': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
    'ProseThead': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
    'ProseTr': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
    'ProseUl': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'Accordion': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/Accordion")['default']
    'BAccordion': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/Accordion")['default']
    'AccordionBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionBody")['default']
    'BAccordionBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionBody")['default']
    'AccordionButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionButton")['default']
    'BAccordionButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionButton")['default']
    'AccordionCollapse': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionCollapse")['default']
    'BAccordionCollapse': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionCollapse")['default']
    'AccordionHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionHeader")['default']
    'BAccordionHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionHeader")['default']
    'AccordionItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionItem")['default']
    'BAccordionItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionItem")['default']
    'AccordionSection': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionSection.vue")['default']
    'BAccordionSection': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionSection.vue")['default']
    'Alert': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/Alert")['default']
    'BAlert': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/Alert")['default']
    'AlertHeading': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertHeading")['default']
    'BAlertHeading': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertHeading")['default']
    'AlertLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertLink.vue")['default']
    'BAlertLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertLink.vue")['default']
    'Backdrop': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/backdrop/Backdrop")['default']
    'BBackdrop': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/backdrop/Backdrop")['default']
    'Badge': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/badge/Badge")['default']
    'BBadge': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/badge/Badge")['default']
    'Breadcrumb': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/Breadcrumb")['default']
    'BBreadcrumb': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/Breadcrumb")['default']
    'BreadcrumbItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/BreadcrumbItem.vue")['default']
    'BBreadcrumbItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/BreadcrumbItem.vue")['default']
    'ButtonGroup': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonGroup")['default']
    'BButtonGroup': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonGroup")['default']
    'ButtonToolbar': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonToolbar")['default']
    'BButtonToolbar': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonToolbar")['default']
    'CheckboxToggleButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CheckboxToggleButton")['default']
    'BCheckboxToggleButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CheckboxToggleButton")['default']
    'CloseButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CloseButton")['default']
    'BCloseButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CloseButton")['default']
    'RadioToggleButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/RadioToggleButton")['default']
    'BRadioToggleButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/RadioToggleButton")['default']
    'Card': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/Card")['default']
    'BCard': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/Card")['default']
    'CardBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardBody")['default']
    'BCardBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardBody")['default']
    'CardFooter': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardFooter")['default']
    'BCardFooter': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardFooter")['default']
    'CardGroup': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardGroup")['default']
    'BCardGroup': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardGroup")['default']
    'CardHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardHeader")['default']
    'BCardHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardHeader")['default']
    'CardImg': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImg")['default']
    'BCardImg': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImg")['default']
    'CardImgBottom': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgBottom")['default']
    'BCardImgBottom': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgBottom")['default']
    'CardImgOverlay': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgOverlay")['default']
    'BCardImgOverlay': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgOverlay")['default']
    'CardImgTop': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgTop")['default']
    'BCardImgTop': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgTop")['default']
    'CardLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardLink.vue")['default']
    'BCardLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardLink.vue")['default']
    'CardSubTitle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardSubTitle")['default']
    'BCardSubTitle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardSubTitle")['default']
    'CardText': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardText")['default']
    'BCardText': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardText")['default']
    'CardTitle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardTitle")['default']
    'BCardTitle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardTitle")['default']
    'Carousel': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/Carousel")['default']
    'BCarousel': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/Carousel")['default']
    'CarouselCaption': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselCaption")['default']
    'BCarouselCaption': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselCaption")['default']
    'CarouselInner': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselInner")['default']
    'BCarouselInner': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselInner")['default']
    'CarouselItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItem")['default']
    'BCarouselItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItem")['default']
    'CarouselItemImage': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItemImage")['default']
    'BCarouselItemImage': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItemImage")['default']
    'Collapse': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/Collapse")['default']
    'BCollapse': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/Collapse")['default']
    'CollapseButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/CollapseButton")['default']
    'BCollapseButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/CollapseButton")['default']
    'Flex': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Flex")['default']
    'BFlex': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Flex")['default']
    'FlexItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/FlexItem")['default']
    'BFlexItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/FlexItem")['default']
    'Grid': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Grid")['default']
    'BGrid': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Grid")['default']
    'GridCol': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/GridCol")['default']
    'BGridCol': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/GridCol")['default']
    'Dropdown': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/Dropdown")['default']
    'BDropdown': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/Dropdown")['default']
    'DropdownItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItem.vue")['default']
    'BDropdownItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItem.vue")['default']
    'DropdownItemDivider': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemDivider")['default']
    'BDropdownItemDivider': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemDivider")['default']
    'DropdownItemText': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemText")['default']
    'BDropdownItemText': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemText")['default']
    'DropdownMenu': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownMenu")['default']
    'BDropdownMenu': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownMenu")['default']
    'DropdownToggle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggle")['default']
    'BDropdownToggle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggle")['default']
    'DropdownToggleSplit': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggleSplit")['default']
    'BDropdownToggleSplit': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggleSplit")['default']
    'Col': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Col")['default']
    'BCol': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Col")['default']
    'Container': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Container")['default']
    'BContainer': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Container")['default']
    'Row': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Row")['default']
    'BRow': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Row")['default']
    'ListGroup': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroup")['default']
    'BListGroup': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroup")['default']
    'ListGroupItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItem")['default']
    'BListGroupItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItem")['default']
    'ListGroupItemAction': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemAction.vue")['default']
    'BListGroupItemAction': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemAction.vue")['default']
    'ListGroupItemLabel': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemLabel")['default']
    'BListGroupItemLabel': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemLabel")['default']
    'ListGroupList': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupList")['default']
    'BListGroupList': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupList")['default']
    'Modal': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/Modal")['default']
    'BModal': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/Modal")['default']
    'ModalBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalBody")['default']
    'BModalBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalBody")['default']
    'ModalContent': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalContent")['default']
    'BModalContent': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalContent")['default']
    'ModalDialog': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalDialog")['default']
    'BModalDialog': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalDialog")['default']
    'ModalFooter': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalFooter")['default']
    'BModalFooter': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalFooter")['default']
    'ModalHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalHeader")['default']
    'BModalHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalHeader")['default']
    'ModalTitle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalTitle")['default']
    'BModalTitle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalTitle")['default']
    'ModalToggleButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalToggleButton")['default']
    'BModalToggleButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalToggleButton")['default']
    'Nav': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/Nav")['default']
    'BNav': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/Nav")['default']
    'NavItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItem")['default']
    'BNavItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItem")['default']
    'NavItemDropdown': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdown")['default']
    'BNavItemDropdown': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdown")['default']
    'NavItemDropdownToggle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdownToggle")['default']
    'BNavItemDropdownToggle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdownToggle")['default']
    'NavLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavLink.vue")['default']
    'BNavLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavLink.vue")['default']
    'NavList': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavList")['default']
    'BNavList': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavList")['default']
    'TabContent': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabContent")['default']
    'BTabContent': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabContent")['default']
    'TabPane': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabPane")['default']
    'BTabPane': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabPane")['default']
    'Navbar': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/Navbar")['default']
    'BNavbar': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/Navbar")['default']
    'NavbarBrand': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarBrand")['default']
    'BNavbarBrand': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarBrand")['default']
    'NavbarCollapse': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarCollapse")['default']
    'BNavbarCollapse': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarCollapse")['default']
    'NavbarNav': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNav")['default']
    'BNavbarNav': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNav")['default']
    'NavbarNavList': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNavList")['default']
    'BNavbarNavList': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNavList")['default']
    'NavbarText': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarText")['default']
    'BNavbarText': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarText")['default']
    'NavbarToggler': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarToggler")['default']
    'BNavbarToggler': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarToggler")['default']
    'Offcanvas': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/Offcanvas")['default']
    'BOffcanvas': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/Offcanvas")['default']
    'OffcanvasBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasBody")['default']
    'BOffcanvasBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasBody")['default']
    'OffcanvasHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasHeader")['default']
    'BOffcanvasHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasHeader")['default']
    'OffcanvasTitle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasTitle")['default']
    'BOffcanvasTitle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasTitle")['default']
    'PageItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageItem")['default']
    'BPageItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageItem")['default']
    'PageLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageLink")['default']
    'BPageLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageLink")['default']
    'Pagination': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/Pagination")['default']
    'BPagination': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/Pagination")['default']
    'Progress': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/Progress")['default']
    'BProgress': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/Progress")['default']
    'ProgressBar': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/ProgressBar")['default']
    'BProgressBar': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/ProgressBar")['default']
    'Spinner': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/spinner/Spinner")['default']
    'BSpinner': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/spinner/Spinner")['default']
    'Toast': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/Toast")['default']
    'BToast': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/Toast")['default']
    'ToastBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastBody")['default']
    'BToastBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastBody")['default']
    'ToastContainer': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastContainer")['default']
    'BToastContainer': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastContainer")['default']
    'ToastHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastHeader")['default']
    'BToastHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastHeader")['default']
    'Vr': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/vertical-rule/VerticalRule")['default']
    'BVr': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/vertical-rule/VerticalRule")['default']
    'BBlockquote': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/blockquote/Blockquote")['default']
    'BBlockquoteFigure': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/blockquote/BlockquoteFigure")['default']
    'BBlockquoteFooter': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/blockquote/BlockquoteFooter")['default']
    'BFigure': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/figure/Figure")['default']
    'BFigureCaption': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/figure/FigureCaption")['default']
    'BFigureImage': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/figure/FigureImage")['default']
    'BColFormLabel': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ColFormLabel")['default']
    'BColFormLegend': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ColFormLegend")['default']
    'BDatalist': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Datalist")['default']
    'BFieldset': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Fieldset")['default']
    'BForm': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Form")['default']
    'BFormCheck': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormCheck")['default']
    'BFormCheckInput': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormCheckInput.vue")['default']
    'BFormCheckLabel': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormCheckLabel")['default']
    'BFormColor': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormColor.vue")['default']
    'BFormControl': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormControl")['default']
    'BFormFile': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormFile.vue")['default']
    'BFormFloating': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormFloating")['default']
    'BFormInput': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormInput.vue")['default']
    'BFormLabel': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormLabel")['default']
    'BFormRange': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormRange.vue")['default']
    'BFormSelect': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormSelect.vue")['default']
    'BFormSwitch': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormSwitch")['default']
    'BFormText': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormText")['default']
    'BFormTextarea': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormTextarea.vue")['default']
    'BInputGroup': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/InputGroup")['default']
    'BInputGroupText': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/InputGroupText")['default']
    'BLabel': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Label")['default']
    'BLegend': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Legend")['default']
    'BOption': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Option")['default']
    'BValidFeedback': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ValidFeedback.vue")['default']
    'BValidTooltip': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ValidTooltip.vue")['default']
    'BBlock': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Block")['default']
    'BDd': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/DefinitionDescription")['default']
    'BDl': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/DefinitionList")['default']
    'BDt': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/DefinitionTerm")['default']
    'BDiv': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Div")['default']
    'BFooter': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Footer")['default']
    'BHr': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Hr")['default']
    'BImg': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Image")['default']
    'BInput': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/HtmlInput.vue")['default']
    'BUl': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/List")['default']
    'BLi': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/ListItem.vue")['default']
    'BMain': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Main")['default']
    'BOl': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/OrderedList")['default']
    'BP': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Paragraph")['default']
    'BPicture': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Picture")['default']
    'BSelect': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Select.vue")['default']
    'BTextarea': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Textarea.vue")['default']
    'BA': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Anchor")['default']
    'BButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Button")['default']
    'BH1': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H1")['default']
    'BH2': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H2")['default']
    'BH3': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H3")['default']
    'BH4': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H4")['default']
    'BH5': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H5")['default']
    'BH6': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H6")['default']
    'BH': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Headings")['default']
    'BSpan': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Inline")['default']
    'BSmall': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Small")['default']
    'BStrong': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Strong")['default']
    'BCaption': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Caption")['default']
    'BTable': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Table")['default']
    'BTbody': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Tbody")['default']
    'BTd': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Td")['default']
    'BTfoot': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Tfoot")['default']
    'BTh': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Th")['default']
    'BThead': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Thead")['default']
    'BTr': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Tr")['default']
    'BIcon': typeof import("../node_modules/usebootstrap/dist/runtime/components/icon/BIcon")['default']
    'Avatar': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/avatar/Avatar")['default']
    'BAvatar': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/avatar/Avatar")['default']
    'BackToTop': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/back-to-top/BackToTop.vue")['default']
    'BBackToTop': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/back-to-top/BackToTop.vue")['default']
    'Background': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/background/Background.vue")['default']
    'BBackground': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/background/Background.vue")['default']
    'Calendar': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/Calendar.vue")['default']
    'BCalendar': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/Calendar.vue")['default']
    'DatePicker': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/DatePicker.vue")['default']
    'BDatePicker': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/DatePicker.vue")['default']
    'CodeHighlighter': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/CodeHighlighter.vue")['default']
    'BCodeHighlighter': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/CodeHighlighter.vue")['default']
    'EventViewer': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/EventViewer.vue")['default']
    'BEventViewer': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/EventViewer.vue")['default']
    'ColorModeNavItemDropdown': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/color-mode/ColorModeNavItemDropdown.vue")['default']
    'BColorModeNavItemDropdown': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/color-mode/ColorModeNavItemDropdown.vue")['default']
    'ResponsiveRule': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/divider/ResponsiveRule.vue")['default']
    'BResponsiveRule': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/divider/ResponsiveRule.vue")['default']
    'LocaleNavItemDropdown': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/LocaleNavItemDropdown.vue")['default']
    'BLocaleNavItemDropdown': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/LocaleNavItemDropdown.vue")['default']
    'Localization': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/Localization.vue")['default']
    'BLocalization': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/Localization.vue")['default']
    'BarChart': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/BarChart.vue")['default']
    'BBarChart': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/BarChart.vue")['default']
    'LineChart': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/LineChart.vue")['default']
    'BLineChart': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/LineChart.vue")['default']
    'PieChart': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/PieChart.vue")['default']
    'BPieChart': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/PieChart.vue")['default']
    'Fixed': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/fixed/Fixed.vue")['default']
    'BFixed': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/fixed/Fixed.vue")['default']
    'GridArea': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridArea")['default']
    'BGridArea': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridArea")['default']
    'GridTemplate': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridTemplate.vue")['default']
    'BGridTemplate': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridTemplate.vue")['default']
    'HeadingBlock': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/heading/HeadingBlock.vue")['default']
    'BHeadingBlock': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/heading/HeadingBlock.vue")['default']
    'HeroRow': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/hero-row/HeroRow.vue")['default']
    'BHeroRow': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/hero-row/HeroRow.vue")['default']
    'IconBox': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/icon-box/IconBox")['default']
    'BIconBox': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/icon-box/IconBox")['default']
    'Intro': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/intro/Intro.vue")['default']
    'BIntro': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/intro/Intro.vue")['default']
    'JsonView': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/json-view/JsonView.vue")['default']
    'BJsonView': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/json-view/JsonView.vue")['default']
    'PageLayout': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/layout/PageLayout.vue")['default']
    'BPageLayout': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/layout/PageLayout.vue")['default']
    'FloatingNavbar': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/FloatingNavbar.vue")['default']
    'BFloatingNavbar': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/FloatingNavbar.vue")['default']
    'SlideNavbar': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/SlideNavbar.vue")['default']
    'BSlideNavbar': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/SlideNavbar.vue")['default']
    'StickyToggleNavbar': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/StickyToggleNavbar.vue")['default']
    'BStickyToggleNavbar': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/StickyToggleNavbar.vue")['default']
    'PasswordStrength': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/password-strength/PasswordStrength.vue")['default']
    'BPasswordStrength': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/password-strength/PasswordStrength.vue")['default']
    'Paper': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/paper/Paper.vue")['default']
    'BPaper': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/paper/Paper.vue")['default']
    'Rating': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/rating/Rating.vue")['default']
    'BRating': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/rating/Rating.vue")['default']
    'Sidebar': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sidebar/Sidebar.vue")['default']
    'BSidebar': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sidebar/Sidebar.vue")['default']
    'Sortable': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sortable/Sortable.vue")['default']
    'BSortable': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sortable/Sortable.vue")['default']
    'StackGroup': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroup.vue")['default']
    'BStackGroup': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroup.vue")['default']
    'StackGroupItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroupItem.vue")['default']
    'BStackGroupItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroupItem.vue")['default']
    'StatusIndicator': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/status-indicator/StatusIndicator")['default']
    'BStatusIndicator': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/status-indicator/StatusIndicator")['default']
    'Step': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/Step.vue")['default']
    'BStep': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/Step.vue")['default']
    'StepItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/StepItem.vue")['default']
    'BStepItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/StepItem.vue")['default']
    'Swiper': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/swiper/Swiper.vue")['default']
    'BSwiper': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/swiper/Swiper.vue")['default']
    'TiptapEditor': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/tiptap/TiptapEditor.vue")['default']
    'BTiptapEditor': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/tiptap/TiptapEditor.vue")['default']
    'CollapseToc': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/CollapseToc.vue")['default']
    'BCollapseToc': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/CollapseToc.vue")['default']
    'Toc': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/Toc.vue")['default']
    'BToc': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/Toc.vue")['default']
    'Typed': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/typed/Typed")['default']
    'BTyped': typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/typed/Typed")['default']
    'Image': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Image")['default']
    'BImage': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Image")['default']
    'List': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/List")['default']
    'BList': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/List")['default']
    'ListItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/ListItem.vue")['default']
    'BListItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/ListItem.vue")['default']
    'Paragraph': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Paragraph")['default']
    'BParagraph': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Paragraph")['default']
    'Anchor': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Anchor")['default']
    'BAnchor': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Anchor")['default']
    'Headings': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Headings")['default']
    'BHeadings': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Headings")['default']
    'Inline': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Inline")['default']
    'BInline': typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Inline")['default']
    'ActionState': typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/ActionState.vue")['default']
    'ArrayQuery': typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/ArrayQuery.vue")['default']
    'DataTable': typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTable.vue")['default']
    'DataTableBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableBody.vue")['default']
    'DataTableFooter': typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableFooter.vue")['default']
    'DataTableHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableHeader.vue")['default']
    'DataTableHeaderRowFilter': typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableHeaderRowFilter.vue")['default']
    'DataTableHeaderRowSorter': typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableHeaderRowSorter.vue")['default']
    'FullTextFilter': typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/FullTextFilter.vue")['default']
    'ViewState': typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/ViewState.vue")['default']
    'ComponentsCatalog': typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/ComponentsCatalog.vue")['default']
    'BComponentsCatalog': typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/ComponentsCatalog.vue")['default']
    'UseBootstrap': typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/UseBootstrap.vue")['default']
    'BUseBootstrap': typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/UseBootstrap.vue")['default']
    'SpecBinding': typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/SpecBinding.vue")['default']
    'BSpecBinding': typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/SpecBinding.vue")['default']
    'SwiperSlide': typeof import("swiper/vue")['SwiperSlide']
    'UseWindowSize': typeof import("@vueuse/components")['UseWindowSize']
    'UseWindowFocus': typeof import("@vueuse/components")['UseWindowFocus']
    'UseVirtualList': typeof import("@vueuse/components")['UseVirtualList']
    'UseTimestamp': typeof import("@vueuse/components")['UseTimestamp']
    'UseTimeAgo': typeof import("@vueuse/components")['UseTimeAgo']
    'UseScreenSafeArea': typeof import("@vueuse/components")['UseScreenSafeArea']
    'UsePreferredReducedMotion': typeof import("@vueuse/components")['UsePreferredReducedMotion']
    'UsePreferredLanguages': typeof import("@vueuse/components")['UsePreferredLanguages']
    'UsePreferredDark': typeof import("@vueuse/components")['UsePreferredDark']
    'UsePreferredContrast': typeof import("@vueuse/components")['UsePreferredContrast']
    'UsePreferredColorScheme': typeof import("@vueuse/components")['UsePreferredColorScheme']
    'UsePointerLock': typeof import("@vueuse/components")['UsePointerLock']
    'UsePointer': typeof import("@vueuse/components")['UsePointer']
    'UsePageLeave': typeof import("@vueuse/components")['UsePageLeave']
    'UseOnline': typeof import("@vueuse/components")['UseOnline']
    'UseOffsetPagination': typeof import("@vueuse/components")['UseOffsetPagination']
    'UseObjectUrl': typeof import("@vueuse/components")['UseObjectUrl']
    'UseNow': typeof import("@vueuse/components")['UseNow']
    'UseNetwork': typeof import("@vueuse/components")['UseNetwork']
    'UseMousePressed': typeof import("@vueuse/components")['UseMousePressed']
    'UseMouseInElement': typeof import("@vueuse/components")['UseMouseInElement']
    'UseIdle': typeof import("@vueuse/components")['UseIdle']
    'UseGeolocation': typeof import("@vueuse/components")['UseGeolocation']
    'UseFullscreen': typeof import("@vueuse/components")['UseFullscreen']
    'UseEyeDropper': typeof import("@vueuse/components")['UseEyeDropper']
    'UseElementVisibility': typeof import("@vueuse/components")['UseElementVisibility']
    'UseElementSize': typeof import("@vueuse/components")['UseElementSize']
    'UseElementBounding': typeof import("@vueuse/components")['UseElementBounding']
    'UseDraggable': typeof import("@vueuse/components")['UseDraggable']
    'UseDocumentVisibility': typeof import("@vueuse/components")['UseDocumentVisibility']
    'UseDevicesList': typeof import("@vueuse/components")['UseDevicesList']
    'UseDevicePixelRatio': typeof import("@vueuse/components")['UseDevicePixelRatio']
    'UseDeviceOrientation': typeof import("@vueuse/components")['UseDeviceOrientation']
    'UseDeviceMotion': typeof import("@vueuse/components")['UseDeviceMotion']
    'UseClipboard': typeof import("@vueuse/components")['UseClipboard']
    'UseBattery': typeof import("@vueuse/components")['UseBattery']
    'UseActiveElement': typeof import("@vueuse/components")['UseActiveElement']
    'OnClickOutside': typeof import("@vueuse/components")['OnClickOutside']
    'LCircle': typeof import("@vue-leaflet/vue-leaflet")['LCircle']
    'LCircleMarker': typeof import("@vue-leaflet/vue-leaflet")['LCircleMarker']
    'LControl': typeof import("@vue-leaflet/vue-leaflet")['LControl']
    'LControlAttribution': typeof import("@vue-leaflet/vue-leaflet")['LControlAttribution']
    'LControlLayers': typeof import("@vue-leaflet/vue-leaflet")['LControlLayers']
    'LControlScale': typeof import("@vue-leaflet/vue-leaflet")['LControlScale']
    'LControlZoom': typeof import("@vue-leaflet/vue-leaflet")['LControlZoom']
    'LFeatureGroup': typeof import("@vue-leaflet/vue-leaflet")['LFeatureGroup']
    'LGeoJson': typeof import("@vue-leaflet/vue-leaflet")['LGeoJson']
    'LIcon': typeof import("@vue-leaflet/vue-leaflet")['LIcon']
    'LImageOverlay': typeof import("@vue-leaflet/vue-leaflet")['LImageOverlay']
    'LLayerGroup': typeof import("@vue-leaflet/vue-leaflet")['LLayerGroup']
    'LMap': typeof import("@vue-leaflet/vue-leaflet")['LMap']
    'LMarker': typeof import("@vue-leaflet/vue-leaflet")['LMarker']
    'LPolygon': typeof import("@vue-leaflet/vue-leaflet")['LPolygon']
    'LPolyline': typeof import("@vue-leaflet/vue-leaflet")['LPolyline']
    'LPopup': typeof import("@vue-leaflet/vue-leaflet")['LPopup']
    'LRectangle': typeof import("@vue-leaflet/vue-leaflet")['LRectangle']
    'LTileLayer': typeof import("@vue-leaflet/vue-leaflet")['LTileLayer']
    'LTooltip': typeof import("@vue-leaflet/vue-leaflet")['LTooltip']
    'LWmsTileLayer': typeof import("@vue-leaflet/vue-leaflet")['LWmsTileLayer']
    'MDC': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
    'MDCRenderer': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
    'MDCSlot': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
    'SiteLink': typeof import("../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']
    'RobotMeta': typeof import("../node_modules/@nuxtjs/robots/dist/runtime/nuxt/components/RobotMeta")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'OnClickOutside': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['OnClickOutside']>
      'LazyCommentForm': LazyComponent<typeof import("../components/CommentForm.vue")['default']>
    'LazyFollowList': LazyComponent<typeof import("../components/FollowList.vue")['default']>
    'LazyLoginForm': LazyComponent<typeof import("../components/LoginForm.vue")['default']>
    'LazyPostCard': LazyComponent<typeof import("../components/PostCard.vue")['default']>
    'LazyPostForm': LazyComponent<typeof import("../components/PostForm.vue")['default']>
    'LazyProseA': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']>
    'LazyProseBlockquote': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
    'LazyProseCode': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']>
    'LazyProseEm': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
    'LazyProseH1': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
    'LazyProseH2': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
    'LazyProseH3': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
    'LazyProseH4': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
    'LazyProseH5': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
    'LazyProseH6': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
    'LazyProseHr': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
    'LazyProseImg': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
    'LazyProseLi': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
    'LazyProseOl': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
    'LazyProseP': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
    'LazyProsePre': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']>
    'LazyProseScript': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
    'LazyProseStrong': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
    'LazyProseTable': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']>
    'LazyProseTbody': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
    'LazyProseTd': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
    'LazyProseTh': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
    'LazyProseThead': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
    'LazyProseTr': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
    'LazyProseUl': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyAccordion': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/Accordion")['default']>
    'LazyBAccordion': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/Accordion")['default']>
    'LazyAccordionBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionBody")['default']>
    'LazyBAccordionBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionBody")['default']>
    'LazyAccordionButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionButton")['default']>
    'LazyBAccordionButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionButton")['default']>
    'LazyAccordionCollapse': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionCollapse")['default']>
    'LazyBAccordionCollapse': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionCollapse")['default']>
    'LazyAccordionHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionHeader")['default']>
    'LazyBAccordionHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionHeader")['default']>
    'LazyAccordionItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionItem")['default']>
    'LazyBAccordionItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionItem")['default']>
    'LazyAccordionSection': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionSection.vue")['default']>
    'LazyBAccordionSection': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionSection.vue")['default']>
    'LazyAlert': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/Alert")['default']>
    'LazyBAlert': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/Alert")['default']>
    'LazyAlertHeading': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertHeading")['default']>
    'LazyBAlertHeading': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertHeading")['default']>
    'LazyAlertLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertLink.vue")['default']>
    'LazyBAlertLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertLink.vue")['default']>
    'LazyBackdrop': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/backdrop/Backdrop")['default']>
    'LazyBBackdrop': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/backdrop/Backdrop")['default']>
    'LazyBadge': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/badge/Badge")['default']>
    'LazyBBadge': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/badge/Badge")['default']>
    'LazyBreadcrumb': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/Breadcrumb")['default']>
    'LazyBBreadcrumb': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/Breadcrumb")['default']>
    'LazyBreadcrumbItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/BreadcrumbItem.vue")['default']>
    'LazyBBreadcrumbItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/BreadcrumbItem.vue")['default']>
    'LazyButtonGroup': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonGroup")['default']>
    'LazyBButtonGroup': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonGroup")['default']>
    'LazyButtonToolbar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonToolbar")['default']>
    'LazyBButtonToolbar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonToolbar")['default']>
    'LazyCheckboxToggleButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CheckboxToggleButton")['default']>
    'LazyBCheckboxToggleButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CheckboxToggleButton")['default']>
    'LazyCloseButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CloseButton")['default']>
    'LazyBCloseButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CloseButton")['default']>
    'LazyRadioToggleButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/RadioToggleButton")['default']>
    'LazyBRadioToggleButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/RadioToggleButton")['default']>
    'LazyCard': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/Card")['default']>
    'LazyBCard': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/Card")['default']>
    'LazyCardBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardBody")['default']>
    'LazyBCardBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardBody")['default']>
    'LazyCardFooter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardFooter")['default']>
    'LazyBCardFooter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardFooter")['default']>
    'LazyCardGroup': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardGroup")['default']>
    'LazyBCardGroup': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardGroup")['default']>
    'LazyCardHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardHeader")['default']>
    'LazyBCardHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardHeader")['default']>
    'LazyCardImg': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImg")['default']>
    'LazyBCardImg': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImg")['default']>
    'LazyCardImgBottom': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgBottom")['default']>
    'LazyBCardImgBottom': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgBottom")['default']>
    'LazyCardImgOverlay': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgOverlay")['default']>
    'LazyBCardImgOverlay': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgOverlay")['default']>
    'LazyCardImgTop': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgTop")['default']>
    'LazyBCardImgTop': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgTop")['default']>
    'LazyCardLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardLink.vue")['default']>
    'LazyBCardLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardLink.vue")['default']>
    'LazyCardSubTitle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardSubTitle")['default']>
    'LazyBCardSubTitle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardSubTitle")['default']>
    'LazyCardText': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardText")['default']>
    'LazyBCardText': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardText")['default']>
    'LazyCardTitle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardTitle")['default']>
    'LazyBCardTitle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardTitle")['default']>
    'LazyCarousel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/Carousel")['default']>
    'LazyBCarousel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/Carousel")['default']>
    'LazyCarouselCaption': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselCaption")['default']>
    'LazyBCarouselCaption': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselCaption")['default']>
    'LazyCarouselInner': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselInner")['default']>
    'LazyBCarouselInner': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselInner")['default']>
    'LazyCarouselItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItem")['default']>
    'LazyBCarouselItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItem")['default']>
    'LazyCarouselItemImage': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItemImage")['default']>
    'LazyBCarouselItemImage': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItemImage")['default']>
    'LazyCollapse': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/Collapse")['default']>
    'LazyBCollapse': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/Collapse")['default']>
    'LazyCollapseButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/CollapseButton")['default']>
    'LazyBCollapseButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/CollapseButton")['default']>
    'LazyFlex': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Flex")['default']>
    'LazyBFlex': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Flex")['default']>
    'LazyFlexItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/FlexItem")['default']>
    'LazyBFlexItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/FlexItem")['default']>
    'LazyGrid': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Grid")['default']>
    'LazyBGrid': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Grid")['default']>
    'LazyGridCol': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/GridCol")['default']>
    'LazyBGridCol': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/GridCol")['default']>
    'LazyDropdown': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/Dropdown")['default']>
    'LazyBDropdown': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/Dropdown")['default']>
    'LazyDropdownItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItem.vue")['default']>
    'LazyBDropdownItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItem.vue")['default']>
    'LazyDropdownItemDivider': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemDivider")['default']>
    'LazyBDropdownItemDivider': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemDivider")['default']>
    'LazyDropdownItemText': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemText")['default']>
    'LazyBDropdownItemText': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemText")['default']>
    'LazyDropdownMenu': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownMenu")['default']>
    'LazyBDropdownMenu': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownMenu")['default']>
    'LazyDropdownToggle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggle")['default']>
    'LazyBDropdownToggle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggle")['default']>
    'LazyDropdownToggleSplit': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggleSplit")['default']>
    'LazyBDropdownToggleSplit': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggleSplit")['default']>
    'LazyCol': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Col")['default']>
    'LazyBCol': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Col")['default']>
    'LazyContainer': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Container")['default']>
    'LazyBContainer': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Container")['default']>
    'LazyRow': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Row")['default']>
    'LazyBRow': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Row")['default']>
    'LazyListGroup': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroup")['default']>
    'LazyBListGroup': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroup")['default']>
    'LazyListGroupItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItem")['default']>
    'LazyBListGroupItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItem")['default']>
    'LazyListGroupItemAction': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemAction.vue")['default']>
    'LazyBListGroupItemAction': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemAction.vue")['default']>
    'LazyListGroupItemLabel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemLabel")['default']>
    'LazyBListGroupItemLabel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemLabel")['default']>
    'LazyListGroupList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupList")['default']>
    'LazyBListGroupList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupList")['default']>
    'LazyModal': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/Modal")['default']>
    'LazyBModal': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/Modal")['default']>
    'LazyModalBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalBody")['default']>
    'LazyBModalBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalBody")['default']>
    'LazyModalContent': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalContent")['default']>
    'LazyBModalContent': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalContent")['default']>
    'LazyModalDialog': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalDialog")['default']>
    'LazyBModalDialog': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalDialog")['default']>
    'LazyModalFooter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalFooter")['default']>
    'LazyBModalFooter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalFooter")['default']>
    'LazyModalHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalHeader")['default']>
    'LazyBModalHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalHeader")['default']>
    'LazyModalTitle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalTitle")['default']>
    'LazyBModalTitle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalTitle")['default']>
    'LazyModalToggleButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalToggleButton")['default']>
    'LazyBModalToggleButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalToggleButton")['default']>
    'LazyNav': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/Nav")['default']>
    'LazyBNav': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/Nav")['default']>
    'LazyNavItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItem")['default']>
    'LazyBNavItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItem")['default']>
    'LazyNavItemDropdown': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdown")['default']>
    'LazyBNavItemDropdown': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdown")['default']>
    'LazyNavItemDropdownToggle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdownToggle")['default']>
    'LazyBNavItemDropdownToggle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdownToggle")['default']>
    'LazyNavLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavLink.vue")['default']>
    'LazyBNavLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavLink.vue")['default']>
    'LazyNavList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavList")['default']>
    'LazyBNavList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavList")['default']>
    'LazyTabContent': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabContent")['default']>
    'LazyBTabContent': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabContent")['default']>
    'LazyTabPane': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabPane")['default']>
    'LazyBTabPane': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabPane")['default']>
    'LazyNavbar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/Navbar")['default']>
    'LazyBNavbar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/Navbar")['default']>
    'LazyNavbarBrand': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarBrand")['default']>
    'LazyBNavbarBrand': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarBrand")['default']>
    'LazyNavbarCollapse': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarCollapse")['default']>
    'LazyBNavbarCollapse': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarCollapse")['default']>
    'LazyNavbarNav': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNav")['default']>
    'LazyBNavbarNav': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNav")['default']>
    'LazyNavbarNavList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNavList")['default']>
    'LazyBNavbarNavList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNavList")['default']>
    'LazyNavbarText': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarText")['default']>
    'LazyBNavbarText': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarText")['default']>
    'LazyNavbarToggler': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarToggler")['default']>
    'LazyBNavbarToggler': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarToggler")['default']>
    'LazyOffcanvas': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/Offcanvas")['default']>
    'LazyBOffcanvas': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/Offcanvas")['default']>
    'LazyOffcanvasBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasBody")['default']>
    'LazyBOffcanvasBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasBody")['default']>
    'LazyOffcanvasHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasHeader")['default']>
    'LazyBOffcanvasHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasHeader")['default']>
    'LazyOffcanvasTitle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasTitle")['default']>
    'LazyBOffcanvasTitle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasTitle")['default']>
    'LazyPageItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageItem")['default']>
    'LazyBPageItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageItem")['default']>
    'LazyPageLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageLink")['default']>
    'LazyBPageLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageLink")['default']>
    'LazyPagination': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/Pagination")['default']>
    'LazyBPagination': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/Pagination")['default']>
    'LazyProgress': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/Progress")['default']>
    'LazyBProgress': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/Progress")['default']>
    'LazyProgressBar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/ProgressBar")['default']>
    'LazyBProgressBar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/ProgressBar")['default']>
    'LazySpinner': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/spinner/Spinner")['default']>
    'LazyBSpinner': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/spinner/Spinner")['default']>
    'LazyToast': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/Toast")['default']>
    'LazyBToast': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/Toast")['default']>
    'LazyToastBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastBody")['default']>
    'LazyBToastBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastBody")['default']>
    'LazyToastContainer': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastContainer")['default']>
    'LazyBToastContainer': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastContainer")['default']>
    'LazyToastHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastHeader")['default']>
    'LazyBToastHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastHeader")['default']>
    'LazyVr': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/vertical-rule/VerticalRule")['default']>
    'LazyBVr': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/vertical-rule/VerticalRule")['default']>
    'LazyBBlockquote': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/blockquote/Blockquote")['default']>
    'LazyBBlockquoteFigure': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/blockquote/BlockquoteFigure")['default']>
    'LazyBBlockquoteFooter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/blockquote/BlockquoteFooter")['default']>
    'LazyBFigure': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/figure/Figure")['default']>
    'LazyBFigureCaption': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/figure/FigureCaption")['default']>
    'LazyBFigureImage': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/figure/FigureImage")['default']>
    'LazyBColFormLabel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ColFormLabel")['default']>
    'LazyBColFormLegend': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ColFormLegend")['default']>
    'LazyBDatalist': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Datalist")['default']>
    'LazyBFieldset': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Fieldset")['default']>
    'LazyBForm': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Form")['default']>
    'LazyBFormCheck': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormCheck")['default']>
    'LazyBFormCheckInput': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormCheckInput.vue")['default']>
    'LazyBFormCheckLabel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormCheckLabel")['default']>
    'LazyBFormColor': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormColor.vue")['default']>
    'LazyBFormControl': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormControl")['default']>
    'LazyBFormFile': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormFile.vue")['default']>
    'LazyBFormFloating': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormFloating")['default']>
    'LazyBFormInput': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormInput.vue")['default']>
    'LazyBFormLabel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormLabel")['default']>
    'LazyBFormRange': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormRange.vue")['default']>
    'LazyBFormSelect': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormSelect.vue")['default']>
    'LazyBFormSwitch': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormSwitch")['default']>
    'LazyBFormText': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormText")['default']>
    'LazyBFormTextarea': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormTextarea.vue")['default']>
    'LazyBInputGroup': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/InputGroup")['default']>
    'LazyBInputGroupText': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/InputGroupText")['default']>
    'LazyBLabel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Label")['default']>
    'LazyBLegend': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Legend")['default']>
    'LazyBOption': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Option")['default']>
    'LazyBValidFeedback': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ValidFeedback.vue")['default']>
    'LazyBValidTooltip': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ValidTooltip.vue")['default']>
    'LazyBBlock': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Block")['default']>
    'LazyBDd': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/DefinitionDescription")['default']>
    'LazyBDl': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/DefinitionList")['default']>
    'LazyBDt': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/DefinitionTerm")['default']>
    'LazyBDiv': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Div")['default']>
    'LazyBFooter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Footer")['default']>
    'LazyBHr': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Hr")['default']>
    'LazyBImg': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Image")['default']>
    'LazyBInput': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/HtmlInput.vue")['default']>
    'LazyBUl': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/List")['default']>
    'LazyBLi': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/ListItem.vue")['default']>
    'LazyBMain': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Main")['default']>
    'LazyBOl': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/OrderedList")['default']>
    'LazyBP': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Paragraph")['default']>
    'LazyBPicture': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Picture")['default']>
    'LazyBSelect': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Select.vue")['default']>
    'LazyBTextarea': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Textarea.vue")['default']>
    'LazyBA': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Anchor")['default']>
    'LazyBButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Button")['default']>
    'LazyBH1': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H1")['default']>
    'LazyBH2': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H2")['default']>
    'LazyBH3': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H3")['default']>
    'LazyBH4': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H4")['default']>
    'LazyBH5': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H5")['default']>
    'LazyBH6': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H6")['default']>
    'LazyBH': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Headings")['default']>
    'LazyBSpan': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Inline")['default']>
    'LazyBSmall': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Small")['default']>
    'LazyBStrong': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Strong")['default']>
    'LazyBCaption': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Caption")['default']>
    'LazyBTable': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Table")['default']>
    'LazyBTbody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Tbody")['default']>
    'LazyBTd': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Td")['default']>
    'LazyBTfoot': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Tfoot")['default']>
    'LazyBTh': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Th")['default']>
    'LazyBThead': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Thead")['default']>
    'LazyBTr': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Tr")['default']>
    'LazyBIcon': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/icon/BIcon")['default']>
    'LazyAvatar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/avatar/Avatar")['default']>
    'LazyBAvatar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/avatar/Avatar")['default']>
    'LazyBackToTop': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/back-to-top/BackToTop.vue")['default']>
    'LazyBBackToTop': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/back-to-top/BackToTop.vue")['default']>
    'LazyBackground': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/background/Background.vue")['default']>
    'LazyBBackground': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/background/Background.vue")['default']>
    'LazyCalendar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/Calendar.vue")['default']>
    'LazyBCalendar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/Calendar.vue")['default']>
    'LazyDatePicker': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/DatePicker.vue")['default']>
    'LazyBDatePicker': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/DatePicker.vue")['default']>
    'LazyCodeHighlighter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/CodeHighlighter.vue")['default']>
    'LazyBCodeHighlighter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/CodeHighlighter.vue")['default']>
    'LazyEventViewer': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/EventViewer.vue")['default']>
    'LazyBEventViewer': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/EventViewer.vue")['default']>
    'LazyColorModeNavItemDropdown': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/color-mode/ColorModeNavItemDropdown.vue")['default']>
    'LazyBColorModeNavItemDropdown': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/color-mode/ColorModeNavItemDropdown.vue")['default']>
    'LazyResponsiveRule': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/divider/ResponsiveRule.vue")['default']>
    'LazyBResponsiveRule': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/divider/ResponsiveRule.vue")['default']>
    'LazyLocaleNavItemDropdown': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/LocaleNavItemDropdown.vue")['default']>
    'LazyBLocaleNavItemDropdown': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/LocaleNavItemDropdown.vue")['default']>
    'LazyLocalization': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/Localization.vue")['default']>
    'LazyBLocalization': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/Localization.vue")['default']>
    'LazyBarChart': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/BarChart.vue")['default']>
    'LazyBBarChart': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/BarChart.vue")['default']>
    'LazyLineChart': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/LineChart.vue")['default']>
    'LazyBLineChart': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/LineChart.vue")['default']>
    'LazyPieChart': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/PieChart.vue")['default']>
    'LazyBPieChart': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/PieChart.vue")['default']>
    'LazyFixed': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/fixed/Fixed.vue")['default']>
    'LazyBFixed': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/fixed/Fixed.vue")['default']>
    'LazyGridArea': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridArea")['default']>
    'LazyBGridArea': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridArea")['default']>
    'LazyGridTemplate': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridTemplate.vue")['default']>
    'LazyBGridTemplate': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridTemplate.vue")['default']>
    'LazyHeadingBlock': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/heading/HeadingBlock.vue")['default']>
    'LazyBHeadingBlock': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/heading/HeadingBlock.vue")['default']>
    'LazyHeroRow': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/hero-row/HeroRow.vue")['default']>
    'LazyBHeroRow': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/hero-row/HeroRow.vue")['default']>
    'LazyIconBox': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/icon-box/IconBox")['default']>
    'LazyBIconBox': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/icon-box/IconBox")['default']>
    'LazyIntro': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/intro/Intro.vue")['default']>
    'LazyBIntro': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/intro/Intro.vue")['default']>
    'LazyJsonView': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/json-view/JsonView.vue")['default']>
    'LazyBJsonView': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/json-view/JsonView.vue")['default']>
    'LazyPageLayout': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/layout/PageLayout.vue")['default']>
    'LazyBPageLayout': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/layout/PageLayout.vue")['default']>
    'LazyFloatingNavbar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/FloatingNavbar.vue")['default']>
    'LazyBFloatingNavbar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/FloatingNavbar.vue")['default']>
    'LazySlideNavbar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/SlideNavbar.vue")['default']>
    'LazyBSlideNavbar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/SlideNavbar.vue")['default']>
    'LazyStickyToggleNavbar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/StickyToggleNavbar.vue")['default']>
    'LazyBStickyToggleNavbar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/StickyToggleNavbar.vue")['default']>
    'LazyPasswordStrength': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/password-strength/PasswordStrength.vue")['default']>
    'LazyBPasswordStrength': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/password-strength/PasswordStrength.vue")['default']>
    'LazyPaper': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/paper/Paper.vue")['default']>
    'LazyBPaper': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/paper/Paper.vue")['default']>
    'LazyRating': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/rating/Rating.vue")['default']>
    'LazyBRating': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/rating/Rating.vue")['default']>
    'LazySidebar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sidebar/Sidebar.vue")['default']>
    'LazyBSidebar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sidebar/Sidebar.vue")['default']>
    'LazySortable': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sortable/Sortable.vue")['default']>
    'LazyBSortable': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sortable/Sortable.vue")['default']>
    'LazyStackGroup': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroup.vue")['default']>
    'LazyBStackGroup': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroup.vue")['default']>
    'LazyStackGroupItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroupItem.vue")['default']>
    'LazyBStackGroupItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroupItem.vue")['default']>
    'LazyStatusIndicator': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/status-indicator/StatusIndicator")['default']>
    'LazyBStatusIndicator': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/status-indicator/StatusIndicator")['default']>
    'LazyStep': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/Step.vue")['default']>
    'LazyBStep': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/Step.vue")['default']>
    'LazyStepItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/StepItem.vue")['default']>
    'LazyBStepItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/StepItem.vue")['default']>
    'LazySwiper': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/swiper/Swiper.vue")['default']>
    'LazyBSwiper': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/swiper/Swiper.vue")['default']>
    'LazyTiptapEditor': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/tiptap/TiptapEditor.vue")['default']>
    'LazyBTiptapEditor': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/tiptap/TiptapEditor.vue")['default']>
    'LazyCollapseToc': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/CollapseToc.vue")['default']>
    'LazyBCollapseToc': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/CollapseToc.vue")['default']>
    'LazyToc': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/Toc.vue")['default']>
    'LazyBToc': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/Toc.vue")['default']>
    'LazyTyped': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/typed/Typed")['default']>
    'LazyBTyped': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/typed/Typed")['default']>
    'LazyImage': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Image")['default']>
    'LazyBImage': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Image")['default']>
    'LazyList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/List")['default']>
    'LazyBList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/List")['default']>
    'LazyListItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/ListItem.vue")['default']>
    'LazyBListItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/ListItem.vue")['default']>
    'LazyParagraph': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Paragraph")['default']>
    'LazyBParagraph': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Paragraph")['default']>
    'LazyAnchor': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Anchor")['default']>
    'LazyBAnchor': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Anchor")['default']>
    'LazyHeadings': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Headings")['default']>
    'LazyBHeadings': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Headings")['default']>
    'LazyInline': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Inline")['default']>
    'LazyBInline': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Inline")['default']>
    'LazyActionState': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/ActionState.vue")['default']>
    'LazyArrayQuery': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/ArrayQuery.vue")['default']>
    'LazyDataTable': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTable.vue")['default']>
    'LazyDataTableBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableBody.vue")['default']>
    'LazyDataTableFooter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableFooter.vue")['default']>
    'LazyDataTableHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableHeader.vue")['default']>
    'LazyDataTableHeaderRowFilter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableHeaderRowFilter.vue")['default']>
    'LazyDataTableHeaderRowSorter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableHeaderRowSorter.vue")['default']>
    'LazyFullTextFilter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/FullTextFilter.vue")['default']>
    'LazyViewState': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/ViewState.vue")['default']>
    'LazyComponentsCatalog': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/ComponentsCatalog.vue")['default']>
    'LazyBComponentsCatalog': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/ComponentsCatalog.vue")['default']>
    'LazyUseBootstrap': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/UseBootstrap.vue")['default']>
    'LazyBUseBootstrap': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/UseBootstrap.vue")['default']>
    'LazySpecBinding': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/SpecBinding.vue")['default']>
    'LazyBSpecBinding': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/SpecBinding.vue")['default']>
    'LazySwiperSlide': LazyComponent<typeof import("swiper/vue")['SwiperSlide']>
    'LazyUseWindowSize': LazyComponent<typeof import("@vueuse/components")['UseWindowSize']>
    'LazyUseWindowFocus': LazyComponent<typeof import("@vueuse/components")['UseWindowFocus']>
    'LazyUseVirtualList': LazyComponent<typeof import("@vueuse/components")['UseVirtualList']>
    'LazyUseTimestamp': LazyComponent<typeof import("@vueuse/components")['UseTimestamp']>
    'LazyUseTimeAgo': LazyComponent<typeof import("@vueuse/components")['UseTimeAgo']>
    'LazyUseScreenSafeArea': LazyComponent<typeof import("@vueuse/components")['UseScreenSafeArea']>
    'LazyUsePreferredReducedMotion': LazyComponent<typeof import("@vueuse/components")['UsePreferredReducedMotion']>
    'LazyUsePreferredLanguages': LazyComponent<typeof import("@vueuse/components")['UsePreferredLanguages']>
    'LazyUsePreferredDark': LazyComponent<typeof import("@vueuse/components")['UsePreferredDark']>
    'LazyUsePreferredContrast': LazyComponent<typeof import("@vueuse/components")['UsePreferredContrast']>
    'LazyUsePreferredColorScheme': LazyComponent<typeof import("@vueuse/components")['UsePreferredColorScheme']>
    'LazyUsePointerLock': LazyComponent<typeof import("@vueuse/components")['UsePointerLock']>
    'LazyUsePointer': LazyComponent<typeof import("@vueuse/components")['UsePointer']>
    'LazyUsePageLeave': LazyComponent<typeof import("@vueuse/components")['UsePageLeave']>
    'LazyUseOnline': LazyComponent<typeof import("@vueuse/components")['UseOnline']>
    'LazyUseOffsetPagination': LazyComponent<typeof import("@vueuse/components")['UseOffsetPagination']>
    'LazyUseObjectUrl': LazyComponent<typeof import("@vueuse/components")['UseObjectUrl']>
    'LazyUseNow': LazyComponent<typeof import("@vueuse/components")['UseNow']>
    'LazyUseNetwork': LazyComponent<typeof import("@vueuse/components")['UseNetwork']>
    'LazyUseMousePressed': LazyComponent<typeof import("@vueuse/components")['UseMousePressed']>
    'LazyUseMouseInElement': LazyComponent<typeof import("@vueuse/components")['UseMouseInElement']>
    'LazyUseIdle': LazyComponent<typeof import("@vueuse/components")['UseIdle']>
    'LazyUseGeolocation': LazyComponent<typeof import("@vueuse/components")['UseGeolocation']>
    'LazyUseFullscreen': LazyComponent<typeof import("@vueuse/components")['UseFullscreen']>
    'LazyUseEyeDropper': LazyComponent<typeof import("@vueuse/components")['UseEyeDropper']>
    'LazyUseElementVisibility': LazyComponent<typeof import("@vueuse/components")['UseElementVisibility']>
    'LazyUseElementSize': LazyComponent<typeof import("@vueuse/components")['UseElementSize']>
    'LazyUseElementBounding': LazyComponent<typeof import("@vueuse/components")['UseElementBounding']>
    'LazyUseDraggable': LazyComponent<typeof import("@vueuse/components")['UseDraggable']>
    'LazyUseDocumentVisibility': LazyComponent<typeof import("@vueuse/components")['UseDocumentVisibility']>
    'LazyUseDevicesList': LazyComponent<typeof import("@vueuse/components")['UseDevicesList']>
    'LazyUseDevicePixelRatio': LazyComponent<typeof import("@vueuse/components")['UseDevicePixelRatio']>
    'LazyUseDeviceOrientation': LazyComponent<typeof import("@vueuse/components")['UseDeviceOrientation']>
    'LazyUseDeviceMotion': LazyComponent<typeof import("@vueuse/components")['UseDeviceMotion']>
    'LazyUseClipboard': LazyComponent<typeof import("@vueuse/components")['UseClipboard']>
    'LazyUseBattery': LazyComponent<typeof import("@vueuse/components")['UseBattery']>
    'LazyUseActiveElement': LazyComponent<typeof import("@vueuse/components")['UseActiveElement']>
    'LazyOnClickOutside': LazyComponent<typeof import("@vueuse/components")['OnClickOutside']>
    'LazyLCircle': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LCircle']>
    'LazyLCircleMarker': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LCircleMarker']>
    'LazyLControl': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControl']>
    'LazyLControlAttribution': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlAttribution']>
    'LazyLControlLayers': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlLayers']>
    'LazyLControlScale': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlScale']>
    'LazyLControlZoom': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlZoom']>
    'LazyLFeatureGroup': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LFeatureGroup']>
    'LazyLGeoJson': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LGeoJson']>
    'LazyLIcon': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LIcon']>
    'LazyLImageOverlay': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LImageOverlay']>
    'LazyLLayerGroup': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LLayerGroup']>
    'LazyLMap': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LMap']>
    'LazyLMarker': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LMarker']>
    'LazyLPolygon': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPolygon']>
    'LazyLPolyline': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPolyline']>
    'LazyLPopup': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPopup']>
    'LazyLRectangle': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LRectangle']>
    'LazyLTileLayer': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LTileLayer']>
    'LazyLTooltip': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LTooltip']>
    'LazyLWmsTileLayer': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LWmsTileLayer']>
    'LazyMDC': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
    'LazyMDCRenderer': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
    'LazyMDCSlot': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
    'LazySiteLink': LazyComponent<typeof import("../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']>
    'LazyRobotMeta': LazyComponent<typeof import("../node_modules/@nuxtjs/robots/dist/runtime/nuxt/components/RobotMeta")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
    'LazyOnClickOutside': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['OnClickOutside']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const CommentForm: typeof import("../components/CommentForm.vue")['default']
export const FollowList: typeof import("../components/FollowList.vue")['default']
export const LoginForm: typeof import("../components/LoginForm.vue")['default']
export const PostCard: typeof import("../components/PostCard.vue")['default']
export const PostForm: typeof import("../components/PostForm.vue")['default']
export const ProseA: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']
export const ProseBlockquote: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
export const ProseCode: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']
export const ProseEm: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
export const ProseH1: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
export const ProseH2: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
export const ProseH3: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
export const ProseH4: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
export const ProseH5: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
export const ProseH6: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
export const ProseHr: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
export const ProseImg: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
export const ProseLi: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
export const ProseOl: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
export const ProseP: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
export const ProsePre: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']
export const ProseScript: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
export const ProseStrong: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
export const ProseTable: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']
export const ProseTbody: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
export const ProseTd: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
export const ProseTh: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
export const ProseThead: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
export const ProseTr: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
export const ProseUl: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const Accordion: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/Accordion")['default']
export const BAccordion: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/Accordion")['default']
export const AccordionBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionBody")['default']
export const BAccordionBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionBody")['default']
export const AccordionButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionButton")['default']
export const BAccordionButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionButton")['default']
export const AccordionCollapse: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionCollapse")['default']
export const BAccordionCollapse: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionCollapse")['default']
export const AccordionHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionHeader")['default']
export const BAccordionHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionHeader")['default']
export const AccordionItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionItem")['default']
export const BAccordionItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionItem")['default']
export const AccordionSection: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionSection.vue")['default']
export const BAccordionSection: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionSection.vue")['default']
export const Alert: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/Alert")['default']
export const BAlert: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/Alert")['default']
export const AlertHeading: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertHeading")['default']
export const BAlertHeading: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertHeading")['default']
export const AlertLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertLink.vue")['default']
export const BAlertLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertLink.vue")['default']
export const Backdrop: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/backdrop/Backdrop")['default']
export const BBackdrop: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/backdrop/Backdrop")['default']
export const Badge: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/badge/Badge")['default']
export const BBadge: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/badge/Badge")['default']
export const Breadcrumb: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/Breadcrumb")['default']
export const BBreadcrumb: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/Breadcrumb")['default']
export const BreadcrumbItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/BreadcrumbItem.vue")['default']
export const BBreadcrumbItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/BreadcrumbItem.vue")['default']
export const ButtonGroup: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonGroup")['default']
export const BButtonGroup: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonGroup")['default']
export const ButtonToolbar: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonToolbar")['default']
export const BButtonToolbar: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonToolbar")['default']
export const CheckboxToggleButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CheckboxToggleButton")['default']
export const BCheckboxToggleButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CheckboxToggleButton")['default']
export const CloseButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CloseButton")['default']
export const BCloseButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CloseButton")['default']
export const RadioToggleButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/RadioToggleButton")['default']
export const BRadioToggleButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/RadioToggleButton")['default']
export const Card: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/Card")['default']
export const BCard: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/Card")['default']
export const CardBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardBody")['default']
export const BCardBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardBody")['default']
export const CardFooter: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardFooter")['default']
export const BCardFooter: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardFooter")['default']
export const CardGroup: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardGroup")['default']
export const BCardGroup: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardGroup")['default']
export const CardHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardHeader")['default']
export const BCardHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardHeader")['default']
export const CardImg: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImg")['default']
export const BCardImg: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImg")['default']
export const CardImgBottom: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgBottom")['default']
export const BCardImgBottom: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgBottom")['default']
export const CardImgOverlay: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgOverlay")['default']
export const BCardImgOverlay: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgOverlay")['default']
export const CardImgTop: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgTop")['default']
export const BCardImgTop: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgTop")['default']
export const CardLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardLink.vue")['default']
export const BCardLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardLink.vue")['default']
export const CardSubTitle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardSubTitle")['default']
export const BCardSubTitle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardSubTitle")['default']
export const CardText: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardText")['default']
export const BCardText: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardText")['default']
export const CardTitle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardTitle")['default']
export const BCardTitle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardTitle")['default']
export const Carousel: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/Carousel")['default']
export const BCarousel: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/Carousel")['default']
export const CarouselCaption: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselCaption")['default']
export const BCarouselCaption: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselCaption")['default']
export const CarouselInner: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselInner")['default']
export const BCarouselInner: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselInner")['default']
export const CarouselItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItem")['default']
export const BCarouselItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItem")['default']
export const CarouselItemImage: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItemImage")['default']
export const BCarouselItemImage: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItemImage")['default']
export const Collapse: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/Collapse")['default']
export const BCollapse: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/Collapse")['default']
export const CollapseButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/CollapseButton")['default']
export const BCollapseButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/CollapseButton")['default']
export const Flex: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Flex")['default']
export const BFlex: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Flex")['default']
export const FlexItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/FlexItem")['default']
export const BFlexItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/FlexItem")['default']
export const Grid: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Grid")['default']
export const BGrid: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Grid")['default']
export const GridCol: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/GridCol")['default']
export const BGridCol: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/GridCol")['default']
export const Dropdown: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/Dropdown")['default']
export const BDropdown: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/Dropdown")['default']
export const DropdownItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItem.vue")['default']
export const BDropdownItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItem.vue")['default']
export const DropdownItemDivider: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemDivider")['default']
export const BDropdownItemDivider: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemDivider")['default']
export const DropdownItemText: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemText")['default']
export const BDropdownItemText: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemText")['default']
export const DropdownMenu: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownMenu")['default']
export const BDropdownMenu: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownMenu")['default']
export const DropdownToggle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggle")['default']
export const BDropdownToggle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggle")['default']
export const DropdownToggleSplit: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggleSplit")['default']
export const BDropdownToggleSplit: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggleSplit")['default']
export const Col: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Col")['default']
export const BCol: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Col")['default']
export const Container: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Container")['default']
export const BContainer: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Container")['default']
export const Row: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Row")['default']
export const BRow: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Row")['default']
export const ListGroup: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroup")['default']
export const BListGroup: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroup")['default']
export const ListGroupItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItem")['default']
export const BListGroupItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItem")['default']
export const ListGroupItemAction: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemAction.vue")['default']
export const BListGroupItemAction: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemAction.vue")['default']
export const ListGroupItemLabel: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemLabel")['default']
export const BListGroupItemLabel: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemLabel")['default']
export const ListGroupList: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupList")['default']
export const BListGroupList: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupList")['default']
export const Modal: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/Modal")['default']
export const BModal: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/Modal")['default']
export const ModalBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalBody")['default']
export const BModalBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalBody")['default']
export const ModalContent: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalContent")['default']
export const BModalContent: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalContent")['default']
export const ModalDialog: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalDialog")['default']
export const BModalDialog: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalDialog")['default']
export const ModalFooter: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalFooter")['default']
export const BModalFooter: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalFooter")['default']
export const ModalHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalHeader")['default']
export const BModalHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalHeader")['default']
export const ModalTitle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalTitle")['default']
export const BModalTitle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalTitle")['default']
export const ModalToggleButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalToggleButton")['default']
export const BModalToggleButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalToggleButton")['default']
export const Nav: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/Nav")['default']
export const BNav: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/Nav")['default']
export const NavItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItem")['default']
export const BNavItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItem")['default']
export const NavItemDropdown: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdown")['default']
export const BNavItemDropdown: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdown")['default']
export const NavItemDropdownToggle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdownToggle")['default']
export const BNavItemDropdownToggle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdownToggle")['default']
export const NavLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavLink.vue")['default']
export const BNavLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavLink.vue")['default']
export const NavList: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavList")['default']
export const BNavList: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavList")['default']
export const TabContent: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabContent")['default']
export const BTabContent: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabContent")['default']
export const TabPane: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabPane")['default']
export const BTabPane: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabPane")['default']
export const Navbar: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/Navbar")['default']
export const BNavbar: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/Navbar")['default']
export const NavbarBrand: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarBrand")['default']
export const BNavbarBrand: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarBrand")['default']
export const NavbarCollapse: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarCollapse")['default']
export const BNavbarCollapse: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarCollapse")['default']
export const NavbarNav: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNav")['default']
export const BNavbarNav: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNav")['default']
export const NavbarNavList: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNavList")['default']
export const BNavbarNavList: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNavList")['default']
export const NavbarText: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarText")['default']
export const BNavbarText: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarText")['default']
export const NavbarToggler: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarToggler")['default']
export const BNavbarToggler: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarToggler")['default']
export const Offcanvas: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/Offcanvas")['default']
export const BOffcanvas: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/Offcanvas")['default']
export const OffcanvasBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasBody")['default']
export const BOffcanvasBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasBody")['default']
export const OffcanvasHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasHeader")['default']
export const BOffcanvasHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasHeader")['default']
export const OffcanvasTitle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasTitle")['default']
export const BOffcanvasTitle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasTitle")['default']
export const PageItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageItem")['default']
export const BPageItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageItem")['default']
export const PageLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageLink")['default']
export const BPageLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageLink")['default']
export const Pagination: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/Pagination")['default']
export const BPagination: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/Pagination")['default']
export const Progress: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/Progress")['default']
export const BProgress: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/Progress")['default']
export const ProgressBar: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/ProgressBar")['default']
export const BProgressBar: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/ProgressBar")['default']
export const Spinner: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/spinner/Spinner")['default']
export const BSpinner: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/spinner/Spinner")['default']
export const Toast: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/Toast")['default']
export const BToast: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/Toast")['default']
export const ToastBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastBody")['default']
export const BToastBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastBody")['default']
export const ToastContainer: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastContainer")['default']
export const BToastContainer: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastContainer")['default']
export const ToastHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastHeader")['default']
export const BToastHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastHeader")['default']
export const Vr: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/vertical-rule/VerticalRule")['default']
export const BVr: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/vertical-rule/VerticalRule")['default']
export const BBlockquote: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/blockquote/Blockquote")['default']
export const BBlockquoteFigure: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/blockquote/BlockquoteFigure")['default']
export const BBlockquoteFooter: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/blockquote/BlockquoteFooter")['default']
export const BFigure: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/figure/Figure")['default']
export const BFigureCaption: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/figure/FigureCaption")['default']
export const BFigureImage: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/figure/FigureImage")['default']
export const BColFormLabel: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ColFormLabel")['default']
export const BColFormLegend: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ColFormLegend")['default']
export const BDatalist: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Datalist")['default']
export const BFieldset: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Fieldset")['default']
export const BForm: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Form")['default']
export const BFormCheck: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormCheck")['default']
export const BFormCheckInput: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormCheckInput.vue")['default']
export const BFormCheckLabel: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormCheckLabel")['default']
export const BFormColor: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormColor.vue")['default']
export const BFormControl: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormControl")['default']
export const BFormFile: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormFile.vue")['default']
export const BFormFloating: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormFloating")['default']
export const BFormInput: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormInput.vue")['default']
export const BFormLabel: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormLabel")['default']
export const BFormRange: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormRange.vue")['default']
export const BFormSelect: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormSelect.vue")['default']
export const BFormSwitch: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormSwitch")['default']
export const BFormText: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormText")['default']
export const BFormTextarea: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormTextarea.vue")['default']
export const BInputGroup: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/InputGroup")['default']
export const BInputGroupText: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/InputGroupText")['default']
export const BLabel: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Label")['default']
export const BLegend: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Legend")['default']
export const BOption: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Option")['default']
export const BValidFeedback: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ValidFeedback.vue")['default']
export const BValidTooltip: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ValidTooltip.vue")['default']
export const BBlock: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Block")['default']
export const BDd: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/DefinitionDescription")['default']
export const BDl: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/DefinitionList")['default']
export const BDt: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/DefinitionTerm")['default']
export const BDiv: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Div")['default']
export const BFooter: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Footer")['default']
export const BHr: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Hr")['default']
export const BImg: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Image")['default']
export const BInput: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/HtmlInput.vue")['default']
export const BUl: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/List")['default']
export const BLi: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/ListItem.vue")['default']
export const BMain: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Main")['default']
export const BOl: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/OrderedList")['default']
export const BP: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Paragraph")['default']
export const BPicture: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Picture")['default']
export const BSelect: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Select.vue")['default']
export const BTextarea: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Textarea.vue")['default']
export const BA: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Anchor")['default']
export const BButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Button")['default']
export const BH1: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H1")['default']
export const BH2: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H2")['default']
export const BH3: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H3")['default']
export const BH4: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H4")['default']
export const BH5: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H5")['default']
export const BH6: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H6")['default']
export const BH: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Headings")['default']
export const BSpan: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Inline")['default']
export const BSmall: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Small")['default']
export const BStrong: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Strong")['default']
export const BCaption: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Caption")['default']
export const BTable: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Table")['default']
export const BTbody: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Tbody")['default']
export const BTd: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Td")['default']
export const BTfoot: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Tfoot")['default']
export const BTh: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Th")['default']
export const BThead: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Thead")['default']
export const BTr: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Tr")['default']
export const BIcon: typeof import("../node_modules/usebootstrap/dist/runtime/components/icon/BIcon")['default']
export const Avatar: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/avatar/Avatar")['default']
export const BAvatar: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/avatar/Avatar")['default']
export const BackToTop: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/back-to-top/BackToTop.vue")['default']
export const BBackToTop: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/back-to-top/BackToTop.vue")['default']
export const Background: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/background/Background.vue")['default']
export const BBackground: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/background/Background.vue")['default']
export const Calendar: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/Calendar.vue")['default']
export const BCalendar: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/Calendar.vue")['default']
export const DatePicker: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/DatePicker.vue")['default']
export const BDatePicker: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/DatePicker.vue")['default']
export const CodeHighlighter: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/CodeHighlighter.vue")['default']
export const BCodeHighlighter: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/CodeHighlighter.vue")['default']
export const EventViewer: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/EventViewer.vue")['default']
export const BEventViewer: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/EventViewer.vue")['default']
export const ColorModeNavItemDropdown: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/color-mode/ColorModeNavItemDropdown.vue")['default']
export const BColorModeNavItemDropdown: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/color-mode/ColorModeNavItemDropdown.vue")['default']
export const ResponsiveRule: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/divider/ResponsiveRule.vue")['default']
export const BResponsiveRule: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/divider/ResponsiveRule.vue")['default']
export const LocaleNavItemDropdown: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/LocaleNavItemDropdown.vue")['default']
export const BLocaleNavItemDropdown: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/LocaleNavItemDropdown.vue")['default']
export const Localization: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/Localization.vue")['default']
export const BLocalization: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/Localization.vue")['default']
export const BarChart: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/BarChart.vue")['default']
export const BBarChart: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/BarChart.vue")['default']
export const LineChart: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/LineChart.vue")['default']
export const BLineChart: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/LineChart.vue")['default']
export const PieChart: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/PieChart.vue")['default']
export const BPieChart: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/PieChart.vue")['default']
export const Fixed: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/fixed/Fixed.vue")['default']
export const BFixed: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/fixed/Fixed.vue")['default']
export const GridArea: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridArea")['default']
export const BGridArea: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridArea")['default']
export const GridTemplate: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridTemplate.vue")['default']
export const BGridTemplate: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridTemplate.vue")['default']
export const HeadingBlock: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/heading/HeadingBlock.vue")['default']
export const BHeadingBlock: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/heading/HeadingBlock.vue")['default']
export const HeroRow: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/hero-row/HeroRow.vue")['default']
export const BHeroRow: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/hero-row/HeroRow.vue")['default']
export const IconBox: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/icon-box/IconBox")['default']
export const BIconBox: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/icon-box/IconBox")['default']
export const Intro: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/intro/Intro.vue")['default']
export const BIntro: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/intro/Intro.vue")['default']
export const JsonView: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/json-view/JsonView.vue")['default']
export const BJsonView: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/json-view/JsonView.vue")['default']
export const PageLayout: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/layout/PageLayout.vue")['default']
export const BPageLayout: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/layout/PageLayout.vue")['default']
export const FloatingNavbar: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/FloatingNavbar.vue")['default']
export const BFloatingNavbar: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/FloatingNavbar.vue")['default']
export const SlideNavbar: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/SlideNavbar.vue")['default']
export const BSlideNavbar: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/SlideNavbar.vue")['default']
export const StickyToggleNavbar: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/StickyToggleNavbar.vue")['default']
export const BStickyToggleNavbar: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/StickyToggleNavbar.vue")['default']
export const PasswordStrength: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/password-strength/PasswordStrength.vue")['default']
export const BPasswordStrength: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/password-strength/PasswordStrength.vue")['default']
export const Paper: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/paper/Paper.vue")['default']
export const BPaper: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/paper/Paper.vue")['default']
export const Rating: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/rating/Rating.vue")['default']
export const BRating: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/rating/Rating.vue")['default']
export const Sidebar: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sidebar/Sidebar.vue")['default']
export const BSidebar: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sidebar/Sidebar.vue")['default']
export const Sortable: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sortable/Sortable.vue")['default']
export const BSortable: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sortable/Sortable.vue")['default']
export const StackGroup: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroup.vue")['default']
export const BStackGroup: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroup.vue")['default']
export const StackGroupItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroupItem.vue")['default']
export const BStackGroupItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroupItem.vue")['default']
export const StatusIndicator: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/status-indicator/StatusIndicator")['default']
export const BStatusIndicator: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/status-indicator/StatusIndicator")['default']
export const Step: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/Step.vue")['default']
export const BStep: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/Step.vue")['default']
export const StepItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/StepItem.vue")['default']
export const BStepItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/StepItem.vue")['default']
export const Swiper: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/swiper/Swiper.vue")['default']
export const BSwiper: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/swiper/Swiper.vue")['default']
export const TiptapEditor: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/tiptap/TiptapEditor.vue")['default']
export const BTiptapEditor: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/tiptap/TiptapEditor.vue")['default']
export const CollapseToc: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/CollapseToc.vue")['default']
export const BCollapseToc: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/CollapseToc.vue")['default']
export const Toc: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/Toc.vue")['default']
export const BToc: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/Toc.vue")['default']
export const Typed: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/typed/Typed")['default']
export const BTyped: typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/typed/Typed")['default']
export const Image: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Image")['default']
export const BImage: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Image")['default']
export const List: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/List")['default']
export const BList: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/List")['default']
export const ListItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/ListItem.vue")['default']
export const BListItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/ListItem.vue")['default']
export const Paragraph: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Paragraph")['default']
export const BParagraph: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Paragraph")['default']
export const Anchor: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Anchor")['default']
export const BAnchor: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Anchor")['default']
export const Headings: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Headings")['default']
export const BHeadings: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Headings")['default']
export const Inline: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Inline")['default']
export const BInline: typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Inline")['default']
export const ActionState: typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/ActionState.vue")['default']
export const ArrayQuery: typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/ArrayQuery.vue")['default']
export const DataTable: typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTable.vue")['default']
export const DataTableBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableBody.vue")['default']
export const DataTableFooter: typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableFooter.vue")['default']
export const DataTableHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableHeader.vue")['default']
export const DataTableHeaderRowFilter: typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableHeaderRowFilter.vue")['default']
export const DataTableHeaderRowSorter: typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableHeaderRowSorter.vue")['default']
export const FullTextFilter: typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/FullTextFilter.vue")['default']
export const ViewState: typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/ViewState.vue")['default']
export const ComponentsCatalog: typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/ComponentsCatalog.vue")['default']
export const BComponentsCatalog: typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/ComponentsCatalog.vue")['default']
export const UseBootstrap: typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/UseBootstrap.vue")['default']
export const BUseBootstrap: typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/UseBootstrap.vue")['default']
export const SpecBinding: typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/SpecBinding.vue")['default']
export const BSpecBinding: typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/SpecBinding.vue")['default']
export const SwiperSlide: typeof import("swiper/vue")['SwiperSlide']
export const UseWindowSize: typeof import("@vueuse/components")['UseWindowSize']
export const UseWindowFocus: typeof import("@vueuse/components")['UseWindowFocus']
export const UseVirtualList: typeof import("@vueuse/components")['UseVirtualList']
export const UseTimestamp: typeof import("@vueuse/components")['UseTimestamp']
export const UseTimeAgo: typeof import("@vueuse/components")['UseTimeAgo']
export const UseScreenSafeArea: typeof import("@vueuse/components")['UseScreenSafeArea']
export const UsePreferredReducedMotion: typeof import("@vueuse/components")['UsePreferredReducedMotion']
export const UsePreferredLanguages: typeof import("@vueuse/components")['UsePreferredLanguages']
export const UsePreferredDark: typeof import("@vueuse/components")['UsePreferredDark']
export const UsePreferredContrast: typeof import("@vueuse/components")['UsePreferredContrast']
export const UsePreferredColorScheme: typeof import("@vueuse/components")['UsePreferredColorScheme']
export const UsePointerLock: typeof import("@vueuse/components")['UsePointerLock']
export const UsePointer: typeof import("@vueuse/components")['UsePointer']
export const UsePageLeave: typeof import("@vueuse/components")['UsePageLeave']
export const UseOnline: typeof import("@vueuse/components")['UseOnline']
export const UseOffsetPagination: typeof import("@vueuse/components")['UseOffsetPagination']
export const UseObjectUrl: typeof import("@vueuse/components")['UseObjectUrl']
export const UseNow: typeof import("@vueuse/components")['UseNow']
export const UseNetwork: typeof import("@vueuse/components")['UseNetwork']
export const UseMousePressed: typeof import("@vueuse/components")['UseMousePressed']
export const UseMouseInElement: typeof import("@vueuse/components")['UseMouseInElement']
export const UseIdle: typeof import("@vueuse/components")['UseIdle']
export const UseGeolocation: typeof import("@vueuse/components")['UseGeolocation']
export const UseFullscreen: typeof import("@vueuse/components")['UseFullscreen']
export const UseEyeDropper: typeof import("@vueuse/components")['UseEyeDropper']
export const UseElementVisibility: typeof import("@vueuse/components")['UseElementVisibility']
export const UseElementSize: typeof import("@vueuse/components")['UseElementSize']
export const UseElementBounding: typeof import("@vueuse/components")['UseElementBounding']
export const UseDraggable: typeof import("@vueuse/components")['UseDraggable']
export const UseDocumentVisibility: typeof import("@vueuse/components")['UseDocumentVisibility']
export const UseDevicesList: typeof import("@vueuse/components")['UseDevicesList']
export const UseDevicePixelRatio: typeof import("@vueuse/components")['UseDevicePixelRatio']
export const UseDeviceOrientation: typeof import("@vueuse/components")['UseDeviceOrientation']
export const UseDeviceMotion: typeof import("@vueuse/components")['UseDeviceMotion']
export const UseClipboard: typeof import("@vueuse/components")['UseClipboard']
export const UseBattery: typeof import("@vueuse/components")['UseBattery']
export const UseActiveElement: typeof import("@vueuse/components")['UseActiveElement']
export const OnClickOutside: typeof import("@vueuse/components")['OnClickOutside']
export const LCircle: typeof import("@vue-leaflet/vue-leaflet")['LCircle']
export const LCircleMarker: typeof import("@vue-leaflet/vue-leaflet")['LCircleMarker']
export const LControl: typeof import("@vue-leaflet/vue-leaflet")['LControl']
export const LControlAttribution: typeof import("@vue-leaflet/vue-leaflet")['LControlAttribution']
export const LControlLayers: typeof import("@vue-leaflet/vue-leaflet")['LControlLayers']
export const LControlScale: typeof import("@vue-leaflet/vue-leaflet")['LControlScale']
export const LControlZoom: typeof import("@vue-leaflet/vue-leaflet")['LControlZoom']
export const LFeatureGroup: typeof import("@vue-leaflet/vue-leaflet")['LFeatureGroup']
export const LGeoJson: typeof import("@vue-leaflet/vue-leaflet")['LGeoJson']
export const LIcon: typeof import("@vue-leaflet/vue-leaflet")['LIcon']
export const LImageOverlay: typeof import("@vue-leaflet/vue-leaflet")['LImageOverlay']
export const LLayerGroup: typeof import("@vue-leaflet/vue-leaflet")['LLayerGroup']
export const LMap: typeof import("@vue-leaflet/vue-leaflet")['LMap']
export const LMarker: typeof import("@vue-leaflet/vue-leaflet")['LMarker']
export const LPolygon: typeof import("@vue-leaflet/vue-leaflet")['LPolygon']
export const LPolyline: typeof import("@vue-leaflet/vue-leaflet")['LPolyline']
export const LPopup: typeof import("@vue-leaflet/vue-leaflet")['LPopup']
export const LRectangle: typeof import("@vue-leaflet/vue-leaflet")['LRectangle']
export const LTileLayer: typeof import("@vue-leaflet/vue-leaflet")['LTileLayer']
export const LTooltip: typeof import("@vue-leaflet/vue-leaflet")['LTooltip']
export const LWmsTileLayer: typeof import("@vue-leaflet/vue-leaflet")['LWmsTileLayer']
export const MDC: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
export const MDCRenderer: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
export const MDCSlot: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
export const SiteLink: typeof import("../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']
export const RobotMeta: typeof import("../node_modules/@nuxtjs/robots/dist/runtime/nuxt/components/RobotMeta")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const OnClickOutside: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['OnClickOutside']>
export const LazyCommentForm: LazyComponent<typeof import("../components/CommentForm.vue")['default']>
export const LazyFollowList: LazyComponent<typeof import("../components/FollowList.vue")['default']>
export const LazyLoginForm: LazyComponent<typeof import("../components/LoginForm.vue")['default']>
export const LazyPostCard: LazyComponent<typeof import("../components/PostCard.vue")['default']>
export const LazyPostForm: LazyComponent<typeof import("../components/PostForm.vue")['default']>
export const LazyProseA: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']>
export const LazyProseBlockquote: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
export const LazyProseCode: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseCode.vue")['default']>
export const LazyProseEm: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
export const LazyProseH1: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
export const LazyProseH2: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
export const LazyProseH3: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
export const LazyProseH4: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
export const LazyProseH5: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
export const LazyProseH6: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
export const LazyProseHr: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
export const LazyProseImg: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
export const LazyProseLi: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
export const LazyProseOl: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
export const LazyProseP: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
export const LazyProsePre: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProsePre.vue")['default']>
export const LazyProseScript: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
export const LazyProseStrong: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
export const LazyProseTable: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']>
export const LazyProseTbody: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
export const LazyProseTd: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
export const LazyProseTh: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
export const LazyProseThead: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
export const LazyProseTr: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
export const LazyProseUl: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyAccordion: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/Accordion")['default']>
export const LazyBAccordion: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/Accordion")['default']>
export const LazyAccordionBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionBody")['default']>
export const LazyBAccordionBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionBody")['default']>
export const LazyAccordionButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionButton")['default']>
export const LazyBAccordionButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionButton")['default']>
export const LazyAccordionCollapse: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionCollapse")['default']>
export const LazyBAccordionCollapse: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionCollapse")['default']>
export const LazyAccordionHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionHeader")['default']>
export const LazyBAccordionHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionHeader")['default']>
export const LazyAccordionItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionItem")['default']>
export const LazyBAccordionItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionItem")['default']>
export const LazyAccordionSection: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionSection.vue")['default']>
export const LazyBAccordionSection: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/AccordionSection.vue")['default']>
export const LazyAlert: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/Alert")['default']>
export const LazyBAlert: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/Alert")['default']>
export const LazyAlertHeading: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertHeading")['default']>
export const LazyBAlertHeading: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertHeading")['default']>
export const LazyAlertLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertLink.vue")['default']>
export const LazyBAlertLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/AlertLink.vue")['default']>
export const LazyBackdrop: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/backdrop/Backdrop")['default']>
export const LazyBBackdrop: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/backdrop/Backdrop")['default']>
export const LazyBadge: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/badge/Badge")['default']>
export const LazyBBadge: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/badge/Badge")['default']>
export const LazyBreadcrumb: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/Breadcrumb")['default']>
export const LazyBBreadcrumb: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/Breadcrumb")['default']>
export const LazyBreadcrumbItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/BreadcrumbItem.vue")['default']>
export const LazyBBreadcrumbItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/BreadcrumbItem.vue")['default']>
export const LazyButtonGroup: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonGroup")['default']>
export const LazyBButtonGroup: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonGroup")['default']>
export const LazyButtonToolbar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonToolbar")['default']>
export const LazyBButtonToolbar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/ButtonToolbar")['default']>
export const LazyCheckboxToggleButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CheckboxToggleButton")['default']>
export const LazyBCheckboxToggleButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CheckboxToggleButton")['default']>
export const LazyCloseButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CloseButton")['default']>
export const LazyBCloseButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/CloseButton")['default']>
export const LazyRadioToggleButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/RadioToggleButton")['default']>
export const LazyBRadioToggleButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/RadioToggleButton")['default']>
export const LazyCard: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/Card")['default']>
export const LazyBCard: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/Card")['default']>
export const LazyCardBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardBody")['default']>
export const LazyBCardBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardBody")['default']>
export const LazyCardFooter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardFooter")['default']>
export const LazyBCardFooter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardFooter")['default']>
export const LazyCardGroup: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardGroup")['default']>
export const LazyBCardGroup: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardGroup")['default']>
export const LazyCardHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardHeader")['default']>
export const LazyBCardHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardHeader")['default']>
export const LazyCardImg: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImg")['default']>
export const LazyBCardImg: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImg")['default']>
export const LazyCardImgBottom: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgBottom")['default']>
export const LazyBCardImgBottom: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgBottom")['default']>
export const LazyCardImgOverlay: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgOverlay")['default']>
export const LazyBCardImgOverlay: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgOverlay")['default']>
export const LazyCardImgTop: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgTop")['default']>
export const LazyBCardImgTop: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardImgTop")['default']>
export const LazyCardLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardLink.vue")['default']>
export const LazyBCardLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardLink.vue")['default']>
export const LazyCardSubTitle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardSubTitle")['default']>
export const LazyBCardSubTitle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardSubTitle")['default']>
export const LazyCardText: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardText")['default']>
export const LazyBCardText: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardText")['default']>
export const LazyCardTitle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardTitle")['default']>
export const LazyBCardTitle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/CardTitle")['default']>
export const LazyCarousel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/Carousel")['default']>
export const LazyBCarousel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/Carousel")['default']>
export const LazyCarouselCaption: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselCaption")['default']>
export const LazyBCarouselCaption: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselCaption")['default']>
export const LazyCarouselInner: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselInner")['default']>
export const LazyBCarouselInner: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselInner")['default']>
export const LazyCarouselItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItem")['default']>
export const LazyBCarouselItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItem")['default']>
export const LazyCarouselItemImage: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItemImage")['default']>
export const LazyBCarouselItemImage: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/CarouselItemImage")['default']>
export const LazyCollapse: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/Collapse")['default']>
export const LazyBCollapse: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/Collapse")['default']>
export const LazyCollapseButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/CollapseButton")['default']>
export const LazyBCollapseButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/CollapseButton")['default']>
export const LazyFlex: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Flex")['default']>
export const LazyBFlex: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Flex")['default']>
export const LazyFlexItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/FlexItem")['default']>
export const LazyBFlexItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/FlexItem")['default']>
export const LazyGrid: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Grid")['default']>
export const LazyBGrid: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/Grid")['default']>
export const LazyGridCol: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/GridCol")['default']>
export const LazyBGridCol: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/GridCol")['default']>
export const LazyDropdown: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/Dropdown")['default']>
export const LazyBDropdown: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/Dropdown")['default']>
export const LazyDropdownItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItem.vue")['default']>
export const LazyBDropdownItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItem.vue")['default']>
export const LazyDropdownItemDivider: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemDivider")['default']>
export const LazyBDropdownItemDivider: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemDivider")['default']>
export const LazyDropdownItemText: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemText")['default']>
export const LazyBDropdownItemText: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownItemText")['default']>
export const LazyDropdownMenu: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownMenu")['default']>
export const LazyBDropdownMenu: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownMenu")['default']>
export const LazyDropdownToggle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggle")['default']>
export const LazyBDropdownToggle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggle")['default']>
export const LazyDropdownToggleSplit: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggleSplit")['default']>
export const LazyBDropdownToggleSplit: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/DropdownToggleSplit")['default']>
export const LazyCol: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Col")['default']>
export const LazyBCol: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Col")['default']>
export const LazyContainer: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Container")['default']>
export const LazyBContainer: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Container")['default']>
export const LazyRow: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Row")['default']>
export const LazyBRow: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/Row")['default']>
export const LazyListGroup: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroup")['default']>
export const LazyBListGroup: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroup")['default']>
export const LazyListGroupItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItem")['default']>
export const LazyBListGroupItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItem")['default']>
export const LazyListGroupItemAction: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemAction.vue")['default']>
export const LazyBListGroupItemAction: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemAction.vue")['default']>
export const LazyListGroupItemLabel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemLabel")['default']>
export const LazyBListGroupItemLabel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupItemLabel")['default']>
export const LazyListGroupList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupList")['default']>
export const LazyBListGroupList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/list-group/ListGroupList")['default']>
export const LazyModal: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/Modal")['default']>
export const LazyBModal: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/Modal")['default']>
export const LazyModalBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalBody")['default']>
export const LazyBModalBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalBody")['default']>
export const LazyModalContent: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalContent")['default']>
export const LazyBModalContent: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalContent")['default']>
export const LazyModalDialog: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalDialog")['default']>
export const LazyBModalDialog: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalDialog")['default']>
export const LazyModalFooter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalFooter")['default']>
export const LazyBModalFooter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalFooter")['default']>
export const LazyModalHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalHeader")['default']>
export const LazyBModalHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalHeader")['default']>
export const LazyModalTitle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalTitle")['default']>
export const LazyBModalTitle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalTitle")['default']>
export const LazyModalToggleButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalToggleButton")['default']>
export const LazyBModalToggleButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/ModalToggleButton")['default']>
export const LazyNav: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/Nav")['default']>
export const LazyBNav: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/Nav")['default']>
export const LazyNavItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItem")['default']>
export const LazyBNavItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItem")['default']>
export const LazyNavItemDropdown: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdown")['default']>
export const LazyBNavItemDropdown: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdown")['default']>
export const LazyNavItemDropdownToggle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdownToggle")['default']>
export const LazyBNavItemDropdownToggle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavItemDropdownToggle")['default']>
export const LazyNavLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavLink.vue")['default']>
export const LazyBNavLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavLink.vue")['default']>
export const LazyNavList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavList")['default']>
export const LazyBNavList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/NavList")['default']>
export const LazyTabContent: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabContent")['default']>
export const LazyBTabContent: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabContent")['default']>
export const LazyTabPane: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabPane")['default']>
export const LazyBTabPane: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/TabPane")['default']>
export const LazyNavbar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/Navbar")['default']>
export const LazyBNavbar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/Navbar")['default']>
export const LazyNavbarBrand: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarBrand")['default']>
export const LazyBNavbarBrand: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarBrand")['default']>
export const LazyNavbarCollapse: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarCollapse")['default']>
export const LazyBNavbarCollapse: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarCollapse")['default']>
export const LazyNavbarNav: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNav")['default']>
export const LazyBNavbarNav: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNav")['default']>
export const LazyNavbarNavList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNavList")['default']>
export const LazyBNavbarNavList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarNavList")['default']>
export const LazyNavbarText: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarText")['default']>
export const LazyBNavbarText: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarText")['default']>
export const LazyNavbarToggler: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarToggler")['default']>
export const LazyBNavbarToggler: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/NavbarToggler")['default']>
export const LazyOffcanvas: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/Offcanvas")['default']>
export const LazyBOffcanvas: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/Offcanvas")['default']>
export const LazyOffcanvasBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasBody")['default']>
export const LazyBOffcanvasBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasBody")['default']>
export const LazyOffcanvasHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasHeader")['default']>
export const LazyBOffcanvasHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasHeader")['default']>
export const LazyOffcanvasTitle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasTitle")['default']>
export const LazyBOffcanvasTitle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/OffcanvasTitle")['default']>
export const LazyPageItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageItem")['default']>
export const LazyBPageItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageItem")['default']>
export const LazyPageLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageLink")['default']>
export const LazyBPageLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/PageLink")['default']>
export const LazyPagination: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/Pagination")['default']>
export const LazyBPagination: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/Pagination")['default']>
export const LazyProgress: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/Progress")['default']>
export const LazyBProgress: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/Progress")['default']>
export const LazyProgressBar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/ProgressBar")['default']>
export const LazyBProgressBar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/ProgressBar")['default']>
export const LazySpinner: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/spinner/Spinner")['default']>
export const LazyBSpinner: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/spinner/Spinner")['default']>
export const LazyToast: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/Toast")['default']>
export const LazyBToast: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/Toast")['default']>
export const LazyToastBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastBody")['default']>
export const LazyBToastBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastBody")['default']>
export const LazyToastContainer: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastContainer")['default']>
export const LazyBToastContainer: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastContainer")['default']>
export const LazyToastHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastHeader")['default']>
export const LazyBToastHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/ToastHeader")['default']>
export const LazyVr: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/vertical-rule/VerticalRule")['default']>
export const LazyBVr: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/vertical-rule/VerticalRule")['default']>
export const LazyBBlockquote: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/blockquote/Blockquote")['default']>
export const LazyBBlockquoteFigure: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/blockquote/BlockquoteFigure")['default']>
export const LazyBBlockquoteFooter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/blockquote/BlockquoteFooter")['default']>
export const LazyBFigure: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/figure/Figure")['default']>
export const LazyBFigureCaption: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/figure/FigureCaption")['default']>
export const LazyBFigureImage: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/figure/FigureImage")['default']>
export const LazyBColFormLabel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ColFormLabel")['default']>
export const LazyBColFormLegend: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ColFormLegend")['default']>
export const LazyBDatalist: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Datalist")['default']>
export const LazyBFieldset: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Fieldset")['default']>
export const LazyBForm: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Form")['default']>
export const LazyBFormCheck: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormCheck")['default']>
export const LazyBFormCheckInput: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormCheckInput.vue")['default']>
export const LazyBFormCheckLabel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormCheckLabel")['default']>
export const LazyBFormColor: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormColor.vue")['default']>
export const LazyBFormControl: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormControl")['default']>
export const LazyBFormFile: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormFile.vue")['default']>
export const LazyBFormFloating: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormFloating")['default']>
export const LazyBFormInput: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormInput.vue")['default']>
export const LazyBFormLabel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormLabel")['default']>
export const LazyBFormRange: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormRange.vue")['default']>
export const LazyBFormSelect: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormSelect.vue")['default']>
export const LazyBFormSwitch: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormSwitch")['default']>
export const LazyBFormText: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormText")['default']>
export const LazyBFormTextarea: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/FormTextarea.vue")['default']>
export const LazyBInputGroup: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/InputGroup")['default']>
export const LazyBInputGroupText: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/InputGroupText")['default']>
export const LazyBLabel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Label")['default']>
export const LazyBLegend: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Legend")['default']>
export const LazyBOption: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/Option")['default']>
export const LazyBValidFeedback: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ValidFeedback.vue")['default']>
export const LazyBValidTooltip: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/form/ValidTooltip.vue")['default']>
export const LazyBBlock: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Block")['default']>
export const LazyBDd: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/DefinitionDescription")['default']>
export const LazyBDl: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/DefinitionList")['default']>
export const LazyBDt: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/DefinitionTerm")['default']>
export const LazyBDiv: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Div")['default']>
export const LazyBFooter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Footer")['default']>
export const LazyBHr: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Hr")['default']>
export const LazyBImg: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Image")['default']>
export const LazyBInput: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/HtmlInput.vue")['default']>
export const LazyBUl: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/List")['default']>
export const LazyBLi: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/ListItem.vue")['default']>
export const LazyBMain: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Main")['default']>
export const LazyBOl: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/OrderedList")['default']>
export const LazyBP: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Paragraph")['default']>
export const LazyBPicture: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Picture")['default']>
export const LazyBSelect: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Select.vue")['default']>
export const LazyBTextarea: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Textarea.vue")['default']>
export const LazyBA: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Anchor")['default']>
export const LazyBButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Button")['default']>
export const LazyBH1: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H1")['default']>
export const LazyBH2: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H2")['default']>
export const LazyBH3: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H3")['default']>
export const LazyBH4: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H4")['default']>
export const LazyBH5: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H5")['default']>
export const LazyBH6: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/H6")['default']>
export const LazyBH: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Headings")['default']>
export const LazyBSpan: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Inline")['default']>
export const LazyBSmall: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Small")['default']>
export const LazyBStrong: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Strong")['default']>
export const LazyBCaption: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Caption")['default']>
export const LazyBTable: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Table")['default']>
export const LazyBTbody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Tbody")['default']>
export const LazyBTd: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Td")['default']>
export const LazyBTfoot: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Tfoot")['default']>
export const LazyBTh: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Th")['default']>
export const LazyBThead: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Thead")['default']>
export const LazyBTr: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-table/Tr")['default']>
export const LazyBIcon: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/icon/BIcon")['default']>
export const LazyAvatar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/avatar/Avatar")['default']>
export const LazyBAvatar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/avatar/Avatar")['default']>
export const LazyBackToTop: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/back-to-top/BackToTop.vue")['default']>
export const LazyBBackToTop: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/back-to-top/BackToTop.vue")['default']>
export const LazyBackground: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/background/Background.vue")['default']>
export const LazyBBackground: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/background/Background.vue")['default']>
export const LazyCalendar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/Calendar.vue")['default']>
export const LazyBCalendar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/Calendar.vue")['default']>
export const LazyDatePicker: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/DatePicker.vue")['default']>
export const LazyBDatePicker: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/calendar/DatePicker.vue")['default']>
export const LazyCodeHighlighter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/CodeHighlighter.vue")['default']>
export const LazyBCodeHighlighter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/CodeHighlighter.vue")['default']>
export const LazyEventViewer: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/EventViewer.vue")['default']>
export const LazyBEventViewer: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/code/EventViewer.vue")['default']>
export const LazyColorModeNavItemDropdown: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/color-mode/ColorModeNavItemDropdown.vue")['default']>
export const LazyBColorModeNavItemDropdown: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/color-mode/ColorModeNavItemDropdown.vue")['default']>
export const LazyResponsiveRule: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/divider/ResponsiveRule.vue")['default']>
export const LazyBResponsiveRule: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/divider/ResponsiveRule.vue")['default']>
export const LazyLocaleNavItemDropdown: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/LocaleNavItemDropdown.vue")['default']>
export const LazyBLocaleNavItemDropdown: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/LocaleNavItemDropdown.vue")['default']>
export const LazyLocalization: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/Localization.vue")['default']>
export const LazyBLocalization: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/dynamic-route/Localization.vue")['default']>
export const LazyBarChart: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/BarChart.vue")['default']>
export const LazyBBarChart: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/BarChart.vue")['default']>
export const LazyLineChart: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/LineChart.vue")['default']>
export const LazyBLineChart: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/LineChart.vue")['default']>
export const LazyPieChart: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/PieChart.vue")['default']>
export const LazyBPieChart: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/echart/PieChart.vue")['default']>
export const LazyFixed: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/fixed/Fixed.vue")['default']>
export const LazyBFixed: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/fixed/Fixed.vue")['default']>
export const LazyGridArea: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridArea")['default']>
export const LazyBGridArea: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridArea")['default']>
export const LazyGridTemplate: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridTemplate.vue")['default']>
export const LazyBGridTemplate: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/grid-template/GridTemplate.vue")['default']>
export const LazyHeadingBlock: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/heading/HeadingBlock.vue")['default']>
export const LazyBHeadingBlock: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/heading/HeadingBlock.vue")['default']>
export const LazyHeroRow: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/hero-row/HeroRow.vue")['default']>
export const LazyBHeroRow: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/hero-row/HeroRow.vue")['default']>
export const LazyIconBox: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/icon-box/IconBox")['default']>
export const LazyBIconBox: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/icon-box/IconBox")['default']>
export const LazyIntro: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/intro/Intro.vue")['default']>
export const LazyBIntro: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/intro/Intro.vue")['default']>
export const LazyJsonView: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/json-view/JsonView.vue")['default']>
export const LazyBJsonView: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/json-view/JsonView.vue")['default']>
export const LazyPageLayout: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/layout/PageLayout.vue")['default']>
export const LazyBPageLayout: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/layout/PageLayout.vue")['default']>
export const LazyFloatingNavbar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/FloatingNavbar.vue")['default']>
export const LazyBFloatingNavbar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/FloatingNavbar.vue")['default']>
export const LazySlideNavbar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/SlideNavbar.vue")['default']>
export const LazyBSlideNavbar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/SlideNavbar.vue")['default']>
export const LazyStickyToggleNavbar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/StickyToggleNavbar.vue")['default']>
export const LazyBStickyToggleNavbar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/navbar/StickyToggleNavbar.vue")['default']>
export const LazyPasswordStrength: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/password-strength/PasswordStrength.vue")['default']>
export const LazyBPasswordStrength: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/password-strength/PasswordStrength.vue")['default']>
export const LazyPaper: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/paper/Paper.vue")['default']>
export const LazyBPaper: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/paper/Paper.vue")['default']>
export const LazyRating: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/rating/Rating.vue")['default']>
export const LazyBRating: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/rating/Rating.vue")['default']>
export const LazySidebar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sidebar/Sidebar.vue")['default']>
export const LazyBSidebar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sidebar/Sidebar.vue")['default']>
export const LazySortable: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sortable/Sortable.vue")['default']>
export const LazyBSortable: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/sortable/Sortable.vue")['default']>
export const LazyStackGroup: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroup.vue")['default']>
export const LazyBStackGroup: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroup.vue")['default']>
export const LazyStackGroupItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroupItem.vue")['default']>
export const LazyBStackGroupItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/stack-group/StackGroupItem.vue")['default']>
export const LazyStatusIndicator: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/status-indicator/StatusIndicator")['default']>
export const LazyBStatusIndicator: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/status-indicator/StatusIndicator")['default']>
export const LazyStep: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/Step.vue")['default']>
export const LazyBStep: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/Step.vue")['default']>
export const LazyStepItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/StepItem.vue")['default']>
export const LazyBStepItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/step/StepItem.vue")['default']>
export const LazySwiper: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/swiper/Swiper.vue")['default']>
export const LazyBSwiper: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/swiper/Swiper.vue")['default']>
export const LazyTiptapEditor: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/tiptap/TiptapEditor.vue")['default']>
export const LazyBTiptapEditor: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/tiptap/TiptapEditor.vue")['default']>
export const LazyCollapseToc: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/CollapseToc.vue")['default']>
export const LazyBCollapseToc: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/CollapseToc.vue")['default']>
export const LazyToc: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/Toc.vue")['default']>
export const LazyBToc: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/toc/Toc.vue")['default']>
export const LazyTyped: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/typed/Typed")['default']>
export const LazyBTyped: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/extend/typed/Typed")['default']>
export const LazyImage: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Image")['default']>
export const LazyBImage: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Image")['default']>
export const LazyList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/List")['default']>
export const LazyBList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/List")['default']>
export const LazyListItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/ListItem.vue")['default']>
export const LazyBListItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/ListItem.vue")['default']>
export const LazyParagraph: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Paragraph")['default']>
export const LazyBParagraph: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-block/Paragraph")['default']>
export const LazyAnchor: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Anchor")['default']>
export const LazyBAnchor: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Anchor")['default']>
export const LazyHeadings: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Headings")['default']>
export const LazyBHeadings: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Headings")['default']>
export const LazyInline: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Inline")['default']>
export const LazyBInline: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/html-inline/Inline")['default']>
export const LazyActionState: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/ActionState.vue")['default']>
export const LazyArrayQuery: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/ArrayQuery.vue")['default']>
export const LazyDataTable: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTable.vue")['default']>
export const LazyDataTableBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableBody.vue")['default']>
export const LazyDataTableFooter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableFooter.vue")['default']>
export const LazyDataTableHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableHeader.vue")['default']>
export const LazyDataTableHeaderRowFilter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableHeaderRowFilter.vue")['default']>
export const LazyDataTableHeaderRowSorter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/DataTableHeaderRowSorter.vue")['default']>
export const LazyFullTextFilter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/FullTextFilter.vue")['default']>
export const LazyViewState: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/integration/ViewState.vue")['default']>
export const LazyComponentsCatalog: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/ComponentsCatalog.vue")['default']>
export const LazyBComponentsCatalog: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/ComponentsCatalog.vue")['default']>
export const LazyUseBootstrap: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/UseBootstrap.vue")['default']>
export const LazyBUseBootstrap: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/UseBootstrap.vue")['default']>
export const LazySpecBinding: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/SpecBinding.vue")['default']>
export const LazyBSpecBinding: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/spec/SpecBinding.vue")['default']>
export const LazySwiperSlide: LazyComponent<typeof import("swiper/vue")['SwiperSlide']>
export const LazyUseWindowSize: LazyComponent<typeof import("@vueuse/components")['UseWindowSize']>
export const LazyUseWindowFocus: LazyComponent<typeof import("@vueuse/components")['UseWindowFocus']>
export const LazyUseVirtualList: LazyComponent<typeof import("@vueuse/components")['UseVirtualList']>
export const LazyUseTimestamp: LazyComponent<typeof import("@vueuse/components")['UseTimestamp']>
export const LazyUseTimeAgo: LazyComponent<typeof import("@vueuse/components")['UseTimeAgo']>
export const LazyUseScreenSafeArea: LazyComponent<typeof import("@vueuse/components")['UseScreenSafeArea']>
export const LazyUsePreferredReducedMotion: LazyComponent<typeof import("@vueuse/components")['UsePreferredReducedMotion']>
export const LazyUsePreferredLanguages: LazyComponent<typeof import("@vueuse/components")['UsePreferredLanguages']>
export const LazyUsePreferredDark: LazyComponent<typeof import("@vueuse/components")['UsePreferredDark']>
export const LazyUsePreferredContrast: LazyComponent<typeof import("@vueuse/components")['UsePreferredContrast']>
export const LazyUsePreferredColorScheme: LazyComponent<typeof import("@vueuse/components")['UsePreferredColorScheme']>
export const LazyUsePointerLock: LazyComponent<typeof import("@vueuse/components")['UsePointerLock']>
export const LazyUsePointer: LazyComponent<typeof import("@vueuse/components")['UsePointer']>
export const LazyUsePageLeave: LazyComponent<typeof import("@vueuse/components")['UsePageLeave']>
export const LazyUseOnline: LazyComponent<typeof import("@vueuse/components")['UseOnline']>
export const LazyUseOffsetPagination: LazyComponent<typeof import("@vueuse/components")['UseOffsetPagination']>
export const LazyUseObjectUrl: LazyComponent<typeof import("@vueuse/components")['UseObjectUrl']>
export const LazyUseNow: LazyComponent<typeof import("@vueuse/components")['UseNow']>
export const LazyUseNetwork: LazyComponent<typeof import("@vueuse/components")['UseNetwork']>
export const LazyUseMousePressed: LazyComponent<typeof import("@vueuse/components")['UseMousePressed']>
export const LazyUseMouseInElement: LazyComponent<typeof import("@vueuse/components")['UseMouseInElement']>
export const LazyUseIdle: LazyComponent<typeof import("@vueuse/components")['UseIdle']>
export const LazyUseGeolocation: LazyComponent<typeof import("@vueuse/components")['UseGeolocation']>
export const LazyUseFullscreen: LazyComponent<typeof import("@vueuse/components")['UseFullscreen']>
export const LazyUseEyeDropper: LazyComponent<typeof import("@vueuse/components")['UseEyeDropper']>
export const LazyUseElementVisibility: LazyComponent<typeof import("@vueuse/components")['UseElementVisibility']>
export const LazyUseElementSize: LazyComponent<typeof import("@vueuse/components")['UseElementSize']>
export const LazyUseElementBounding: LazyComponent<typeof import("@vueuse/components")['UseElementBounding']>
export const LazyUseDraggable: LazyComponent<typeof import("@vueuse/components")['UseDraggable']>
export const LazyUseDocumentVisibility: LazyComponent<typeof import("@vueuse/components")['UseDocumentVisibility']>
export const LazyUseDevicesList: LazyComponent<typeof import("@vueuse/components")['UseDevicesList']>
export const LazyUseDevicePixelRatio: LazyComponent<typeof import("@vueuse/components")['UseDevicePixelRatio']>
export const LazyUseDeviceOrientation: LazyComponent<typeof import("@vueuse/components")['UseDeviceOrientation']>
export const LazyUseDeviceMotion: LazyComponent<typeof import("@vueuse/components")['UseDeviceMotion']>
export const LazyUseClipboard: LazyComponent<typeof import("@vueuse/components")['UseClipboard']>
export const LazyUseBattery: LazyComponent<typeof import("@vueuse/components")['UseBattery']>
export const LazyUseActiveElement: LazyComponent<typeof import("@vueuse/components")['UseActiveElement']>
export const LazyOnClickOutside: LazyComponent<typeof import("@vueuse/components")['OnClickOutside']>
export const LazyLCircle: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LCircle']>
export const LazyLCircleMarker: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LCircleMarker']>
export const LazyLControl: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControl']>
export const LazyLControlAttribution: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlAttribution']>
export const LazyLControlLayers: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlLayers']>
export const LazyLControlScale: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlScale']>
export const LazyLControlZoom: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlZoom']>
export const LazyLFeatureGroup: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LFeatureGroup']>
export const LazyLGeoJson: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LGeoJson']>
export const LazyLIcon: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LIcon']>
export const LazyLImageOverlay: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LImageOverlay']>
export const LazyLLayerGroup: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LLayerGroup']>
export const LazyLMap: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LMap']>
export const LazyLMarker: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LMarker']>
export const LazyLPolygon: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPolygon']>
export const LazyLPolyline: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPolyline']>
export const LazyLPopup: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPopup']>
export const LazyLRectangle: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LRectangle']>
export const LazyLTileLayer: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LTileLayer']>
export const LazyLTooltip: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LTooltip']>
export const LazyLWmsTileLayer: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LWmsTileLayer']>
export const LazyMDC: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
export const LazyMDCRenderer: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
export const LazyMDCSlot: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
export const LazySiteLink: LazyComponent<typeof import("../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue")['default']>
export const LazyRobotMeta: LazyComponent<typeof import("../node_modules/@nuxtjs/robots/dist/runtime/nuxt/components/RobotMeta")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
export const LazyOnClickOutside: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['OnClickOutside']>>

export const componentNames: string[]
