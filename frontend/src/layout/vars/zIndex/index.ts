type zIndexProps = {
    [index: string]: number | undefined
}

const zIndex: zIndexProps = {
    modal: 1060,
    fixed: 1030,
    sticky: 1020,
    popover: 1070,
    tooltip: 1080,
    dropdown: 1000,
    offCanvas: 1050,
    modalBackdrop: 1040
}

export default zIndex;
